import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from '../styles';
import {ms} from 'react-native-size-matters';
import {COLORS} from '@/theme/Colors';
import {goBack} from '@/navigation/NavigationRef';
import {CrossBlack, GPS, GpsIcon, Location, Search, Seprator} from '@/assets';
import {Spacer} from '@/theme/Spacer';

const PickUpPoint = ({
  setLatitude,
  setLongitude,
  setFormattedAddress,
  onPress,
  setIsvisible,
}) => {
  const getAddress = (data, details, place_id = null,) => {
    const addressDetails = details?.address_components;
    const {lat, lng} = details?.geometry?.location;
    setLatitude(lat);
    setLongitude(lng);
    // setFormattedAddress(details?.formatted_address);
    // for (var i = 0; i < addressDetails.length; i++) {
    //   if (
    //     addressDetails[i].types[0] == 'administrative_area_level_2' ||
    //     addressDetails[i].types[0] == 'administrative_area_level_3' ||
    //     addressDetails[i].types[0] == 'locality'
    //   ) {
    //     setCity(addressDetails?.[i]?.long_name);
    //   }
    // }
  };
  return (
    <View style={{flex: 1}}>
      <Spacer space={ms(10)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: ms(30),
            color: COLORS.black,
            fontWeight: '600',
            flex: 1,
          }}>
          {'Pick Up Point'}
        </Text>
        <TouchableOpacity
          style={styles.arrowIconViewStyle}
          onPress={() => setIsvisible(false)}>
          <Image source={CrossBlack} style={styles.arrowIconStyle} />
        </TouchableOpacity>
      </View>

      <Spacer space={ms(20)} />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderWidth: ms(1),
          borderRadius: ms(20),
          paddingVertical: ms(5),
          borderColor: '#E8E8E8',
          paddingHorizontal: ms(10),
          //   alignItems: 'center',
          //   height: ms(60)
        }}>
        <Image
          source={Search}
          style={{width: ms(20), height: ms(20), marginTop: ms(12)}}
        />

        <View
          style={{
            width: ms(2),
            backgroundColor: '#E6E6E6',
            height: ms(25),
            marginLeft: ms(15),
            marginTop: ms(10),
          }}
        />

        <GooglePlacesAutocomplete
          // ref={ref}
          fetchDetails
          autoFocus={true}
          listViewDisplayed={true}
          returnKeyType={'search'}
          placeholder={'Street Address'}
          enablePoweredByContainer={false}
          query={{
            language: 'en',
            type: 'address',
            key: 'AIzaSyBbytCk92gm3MK3Mrs_374RDKf4bz0X1ck',
          }}
          onPress={(data, details) => {
            setFormattedAddress(data?.description);
            // getAddress(data, details);
            setIsvisible(false)
          }}
          styles={{
            textInput: {marginLeft: ms(5)},
          }}
        //   textInputProps={{
        //     editable: true,
        //     // value: for,
        //     onChange: text => setFormattedAddress(text),
        //   }}
        />
      </View>

      <Spacer space={ms(25)} />

      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', marginHorizontal: ms(10), width: '50%'}}>
        <Image
          source={GpsIcon}
          resizeMode="contain"
          style={{height: ms(24), width: ms(24)}}
        />
        <Text style={{marginHorizontal: ms(10)}}>{'Use Current Location'}</Text>
      </TouchableOpacity>

      <Spacer space={ms(10)} />
      <View style={{alignItems: 'center'}}>
        <Image style={{width: '95%'}} source={Seprator} resizeMode="stretch" />
      </View>
      <Spacer space={ms(10)} />

      <TouchableOpacity
        style={{flexDirection: 'row', marginHorizontal: ms(10), width: '50%'}}>
        <Image
          source={Location}
          style={{height: ms(24), width: ms(24)}}
          resizeMode="contain"
        />
        <Text style={{marginHorizontal: ms(10)}}>{'Choose from Map'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickUpPoint;
