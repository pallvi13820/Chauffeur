import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  View,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {PERMISSIONS, check, request, RESULTS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import AndroidOpenSettings from 'react-native-android-open-settings';
import {ms} from 'react-native-size-matters';
import {
  Calendar,
  Car,
  Drop,
  OutlineCircle,
  Seprator,
  TimeSquare,
  VerticalLineSeprator,
} from '@/assets';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import PickUpPoint from './PickUpPoint';
import Modal from 'react-native-modal';
import CustomButton from '@/components/CustomButton';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';
import DropPoint from './DropPoint';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import DistanceByRoad from '@/components/DistanceByRoad';
import {getRidePrice} from '@/redux/actions/authActions';
import {useDispatch} from 'react-redux';

const OneWayPickDropPoint = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [permissionStatus, setPermissionStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDropPoint, setIsVisibleDropPoint] = useState(false);

  const [pickupCurrentLocation, setPickupCurrentLocation] = useState('');
  const [dropCurrentLocation, setDropCurrentLocation] = useState('');
  const [distance, setDistance] = useState(null);

  const [pickupLatitude, setPickupLatitude] = useState(null);
  const [pickupLongitude, setPickupLongitude] = useState(null);
  const [pickupStreetAddress, setPickupStreetAddress] = useState('');
  const [pickupCity, setPickupCity] = useState('');
  const [pickupZipCode, setPickupZipCode] = useState('');
  const [pickupState, setPickupState] = useState('');
  const [pickupCountry, setPickupCountry] = useState('');

  const [dropLatitude, setDropLatitude] = useState(null);
  const [dropLongitude, setDropLongitude] = useState(null);
  const [dropStreetAddress, setDropStreetAddress] = useState('');
  const [dropCountry, setDropCountry] = useState('');
  const [dropZipCode, setDropZipCode] = useState('');
  const [dropState, setDropState] = useState('');
  const [dropCity, setDropCity] = useState('');

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Check initial permission status when component mounts
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const status = await checkPlatformPermission();
      setPermissionStatus(status);
    } catch (error) {
      console.error('Error checking permission:', error);
    }
  };

  const checkPlatformPermission = async () => {
    if (Platform.OS === 'ios') {
      return check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      return check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      console.log('Unsupported platform');
    }
  };

  const requestPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      } else if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else {
        console.log('Unsupported platform');
        return;
      }

      const result = await request(permission);
      setPermissionStatus(result);
      return result;
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleLocationButtonClick = async () => {
    try {
      let permissionResult = permissionStatus;
      if (permissionStatus !== RESULTS.GRANTED) {
        permissionResult = await requestPermission();
        if (permissionResult === RESULTS.BLOCKED) {
          throw new Error('Location permission blocked');
        }
        if (permissionResult !== RESULTS.GRANTED) {
          throw new Error('Location permission denied');
        }
      }

      // If permission granted, get the current location
      Geolocation.getCurrentPosition(
        async position => {
          try {
            const {latitude, longitude} = position.coords;

            // Here you have latitude and longitude, now you can fetch the address
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );
            const data = await response.json();
            const address = data.display_name; // Adjust based on the structure of the response

            // Set state variables if necessary

            isVisible === true && setPickupCurrentLocation(address),
              setPickupLatitude(latitude),
              setPickupLongitude(longitude),
              setPickupStreetAddress('');

            isVisibleDropPoint && setDropCurrentLocation(address),
              setDropLatitude(latitude),
              setDropLongitude(longitude),
              setDropStreetAddress('');
            setIsVisible(false);
            setIsVisibleDropPoint(false);
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        error => {
          // Handle any errors that occur while getting location
          if (
            error.code === 3 &&
            error.message === 'Location request timed out'
          ) {
            console.error(
              'Location request timed out. Please make sure your device has a good GPS signal and try again.',
            );
          } else {
            console.error(error.message);
          }
        },
        {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000}, // Increase timeout to 30 seconds
      );
    } catch (error) {
      if (
        Platform.OS === 'android' &&
        error.message === 'Location permission blocked'
      ) {
        Alert.alert(
          'Permission Blocked',
          'Please enable location access in your device settings.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Permission Blocked: Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: () => AndroidOpenSettings.locationSourceSettings(),
            },
          ],
        );
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const dateTime = moment(date).format('YYYY-MM-DD HH:mm:ss');

  const getRidePriceRequest = async () => {
    const body = {
      pickup_type: 1,
      pickup_latitude: pickupLatitude,
      pickup_longitude: pickupLongitude,
      dropoff_latitude: dropLatitude,
      dropoff_longitude: dropLongitude,
      dropoff_location: dropStreetAddress || dropCurrentLocation,
      pickup_location: pickupStreetAddress || pickupCurrentLocation,
      estimate_distance: distance,
      pickup_date_time: dateTime,
    };

    const rideDetail = await dispatch(getRidePrice(body));
    return rideDetail;
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={OutlineCircle}
            style={{
              height: ms(15),
              width: ms(15),
              tintColor: COLORS.black,
              resizeMode: 'contain',
            }}
          />
          <View style={{paddingVertical: ms(2)}}>
            <Image
              source={VerticalLineSeprator}
              style={{
                height: ms(55),
                resizeMode: 'contain',
              }}
            />
          </View>

          <Image
            source={Drop}
            style={{height: ms(20), width: ms(20), tintColor: COLORS.black}}
          />
        </View>
        <View
          style={{
            marginHorizontal: ms(20),
            flex: 1,
          }}>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text
              style={{
                color: '#AEAEAE',
                paddingRight: ms(10),
                fontSize: ms(13),
                fontWeight: '300',
              }}>
              {'Pick Point'}
            </Text>
            <Text
              style={{
                color: '#676767',
                paddingRight: ms(5),
                fontSize: ms(14),
                fontWeight: '300',
              }}
              numberOfLines={1}>
              {pickupStreetAddress || pickupCurrentLocation}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: ms(4),
              alignItems: 'center',
            }}>
            <Image
              source={Seprator}
              style={{
                width: ms(190),
                resizeMode: 'contain',
              }}
            />
            <View
              style={{
                backgroundColor: '#F6F6F6',
                borderRadius: ms(20),
                width: ms(35),
                height: ms(35),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: ms(20), width: ms(20)}}
                source={Car}
                resizeMode="contain"
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => setIsVisibleDropPoint(true)}>
            <Text
              style={{
                color: '#AEAEAE',
                paddingRight: ms(10),
                fontSize: ms(13),
                fontWeight: '300',
              }}>
              {'Drop Point'}
            </Text>
            <Text
              style={{
                color: '#676767',
                paddingRight: ms(5),
                fontSize: ms(14),
                fontWeight: '300',
              }}
              numberOfLines={1}>
              {dropStreetAddress || dropCurrentLocation}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Your UI components */}

      <Spacer space={ms(20)} />
      <Text
        style={{
          fontSize: ms(14),
          color: COLORS.black,
          fontWeight: '600',
          marginHorizontal: ms(8),
        }}>
        {'Date & Time'}
      </Text>
      <Spacer space={ms(10)} />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderWidth: ms(1),
            borderRadius: ms(20),
            paddingVertical: ms(5),
            borderColor: '#E8E8E8',
            paddingHorizontal: ms(10),
            flex: 1,
            alignItems: 'center',
            paddingVertical: ms(15),
            //   height: ms(60)
          }}
          onPress={showDatepicker}>
          <Image
            source={Calendar}
            style={{width: ms(20), height: ms(20), resizeMode: 'contain'}}
          />

          <Text
            style={{color: '#AEAEAE', marginLeft: ms(10), fontSize: ms(14)}}>
            {moment(date).format('YYYY-MM-DD')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderWidth: ms(1),
            borderRadius: ms(20),
            paddingVertical: ms(5),
            borderColor: '#E8E8E8',
            paddingHorizontal: ms(10),
            flex: 1,
            alignItems: 'center',
            paddingVertical: ms(15),
            marginLeft: ms(15),
            //   height: ms(60),
          }}
          onPress={showTimepicker}>
          <Image
            source={TimeSquare}
            style={{width: ms(20), height: ms(20), resizeMode: 'contain'}}
          />

          <Text
            style={{color: '#AEAEAE', marginLeft: ms(10), fontSize: ms(14)}}>
            {moment(date).format('hh:mm A')}
          </Text>
        </TouchableOpacity>
      </View>

      <DistanceByRoad
        origin={pickupStreetAddress || pickupCurrentLocation}
        destination={dropStreetAddress || dropCurrentLocation}
        apiKey="AIzaSyBbytCk92gm3MK3Mrs_374RDKf4bz0X1ck"
        setDistance={setDistance}
      />
      <CustomButton title={'Get Price'} onPress={getRidePriceRequest} />

      {/* <Button title="Get Location" onPress={handleLocationButtonClick} /> */}
      <Modal
        isVisible={isVisible}
        style={{flex: 1, backgroundColor: 'white'}}
        coverScreen={true}
        backdropColor="white"
        backdropOpacity={1}>
        <PickUpPoint
          onPress={handleLocationButtonClick}
          setIsVisible={setIsVisible}
          setPickupStreetAddress={setPickupStreetAddress}
          setPickupLatitude={setPickupLatitude}
          setPickupLongitude={setPickupLongitude}
        />
      </Modal>
      <Modal
        isVisible={isVisibleDropPoint}
        style={{flex: 1, backgroundColor: 'white'}}
        coverScreen={true}
        backdropColor="white"
        backdropOpacity={1}>
        <DropPoint
          setDropStreetAddress={setDropStreetAddress}
          onPress={handleLocationButtonClick}
          setIsVisibleDropPoint={setIsVisibleDropPoint}
          setDropLatitude={setDropLatitude}
          setDropLongitude={setDropLongitude}
        />
      </Modal>
    </View>
  );
};

export default OneWayPickDropPoint;
