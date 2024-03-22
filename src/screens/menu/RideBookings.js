import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Calendar,
  Car,
  Drop,
  LeftBlackArrow,
  OutlineCircle,
  VerticalLineSeprator,
  card,
} from '@/assets';
import {goBack, navigate} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getBookings} from '@/redux/actions/authActions';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {NAVIGATION} from '@/constants';

export function RideBookings() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const rideBookings = useSelector(state => state?.user?.rideBookings);
  const isLoading = useSelector(state => state?.user?.loading);

  useEffect(() => {
    dispatch(getBookings(active));
  }, [active]);

  const handleRideBooking = item => {
    navigate(NAVIGATION.rideUpcoming, {bookingId: item?.id});
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles.bookingDetailView}
      onPress={() => handleRideBooking(item)}>
      <View style={styles.displayFlex}>
        <Image source={Calendar} style={styles.calendarIcon} />
        <Text style={styles.dateTimeText}>
          {moment(item?.pickup_date_time)?.format('ddd, MMM. DD [at] hh:mm A')}
        </Text>
        <Text style={styles.amountText}>${item?.price}</Text>
      </View>
      <Spacer space={ms(20)} />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: item?.car_category?.file_src}}
          style={styles.rideImage}
        />

        <View style={{alignItems: 'center'}}>
          <Text style={styles.businessText}>{item?.car_category?.title}</Text>
          <Text style={styles.descriptionText}>
            {'Mercedes E Class or similar'}
          </Text>
        </View>
      </View>
      <Spacer space={ms(20)} />

      <View style={styles.displayFlex}>
        <View style={{alignItems: 'center'}}>
          <Image source={OutlineCircle} style={styles.pickupIcon} />
          <View style={{paddingVertical: ms(2)}}>
            <Image source={VerticalLineSeprator} style={styles.verticalLine} />
          </View>

          <Image source={Drop} style={styles.dropIcon} />
        </View>
        <View style={styles.addressView}>
          <View>
            <Text style={styles.pickupPoint}>{'Pick Point'}</Text>
            <Text style={styles.pickupAddress} numberOfLines={1}>
              {item?.pickup_location}
            </Text>
          </View>

          <Spacer space={ms(20)} />
          <View>
            <Text style={styles.DropHeaderText}>{'Drop Point'}</Text>
            <Text style={styles.dropAddressText} numberOfLines={1}>
              {item?.dropoff_location}
            </Text>
          </View>
        </View>
      </View>

      <Spacer />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <View style={{flex: 1, marginVertical: ms(25)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            paddingHorizontal: ms(20),
          }}>
          <TouchableOpacity
            style={styles.arrowIconViewStyle}
            onPress={() => goBack()}>
            <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
          </TouchableOpacity>

          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Ride Bookings '}</Text>
        </View>
        <Spacer space={ms(25)} />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => setActive(0)}>
            <Text
              style={{
                textAlign: 'center',
                color: active === 0 ? COLORS.black : COLORS.skyGray,
                fontSize: ms(14),
                fontWeight: '500',
              }}>
              {'Upcoming'}
            </Text>
            <Spacer space={ms(10)} />
            <View
              style={{
                height: active === 0 ? ms(3) : ms(2),
                backgroundColor: active === 0 ? COLORS.black : '#E8E8E8',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}} onPress={() => setActive(6)}>
            <Text
              style={{
                textAlign: 'center',
                color: active === 6 ? COLORS.black : COLORS.skyGray,
                fontSize: ms(14),
                fontWeight: '500',
              }}>
              {'Past'}
            </Text>
            <Spacer space={ms(10)} />
            <View
              style={{
                height: active === 6 ? ms(3) : ms(2),
                backgroundColor: active === 6 ? COLORS.black : '#E8E8E8',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}} onPress={() => setActive(7)}>
            <Text
              style={{
                textAlign: 'center',
                color: active === 7 ? COLORS.black : COLORS.skyGray,
                fontSize: ms(14),
                fontWeight: '500',
              }}>
              {'Cancelled'}
            </Text>
            <Spacer space={ms(10)} />
            <View
              style={{
                height: active === 7 ? ms(3) : ms(2),
                backgroundColor: active === 7 ? COLORS.black : '#E8E8E8',
              }}
            />
          </TouchableOpacity>
        </View>

        <Spacer space={ms(20)} />
        {isLoading ? (
          <View style={{alignItems: 'center', marginVertical: ms(40)}}>
            <FastImage
              source={require('@/assets/gif/Loader.gif')}
              style={{width: ms(78), height: ms(78)}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        ) : (
          <FlatList
            data={rideBookings?.data?.list}
            renderItem={renderItem}
            keyExtractor={(item, index) => index?.toString()}
            ListEmptyComponent={() => (
              <View style={{alignItems: 'center', marginVertical: ms(40)}}>
                <Text style={{fontSize: ms(22), color: COLORS.black}}>
                  {'No Booking'}
                </Text>
              </View>
            )}
          />
        )}
        <Spacer space={ms(20)} />
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  bookingDetailView: {
    backgroundColor: COLORS.white,
    marginHorizontal: ms(20),
    borderRadius: ms(20),
    paddingVertical: ms(20),
    paddingHorizontal: ms(15),
  },
  calendarIcon: {
    height: ms(19),
    width: ms(19),
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  dateTimeText: {
    fontSize: ms(12),
    color: COLORS.skyGray,
    fontWeight: '400',
    flex: 1,
    marginHorizontal: ms(10),
  },
  amountText: {
    fontSize: ms(18),
    color: COLORS.black,
    fontWeight: '600',
  },
  rideImage: {
    height: ms(39),
    width: ms(75),
    resizeMode: 'contain',
  },
  businessText: {
    fontSize: ms(12),
    color: COLORS.black,
    fontWeight: '500',
    marginHorizontal: ms(10),
  },
  descriptionText: {
    fontSize: ms(12),
    color: '#676767',
    fontWeight: '500',
    marginHorizontal: ms(10),
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickupIcon: {
    height: ms(15),
    width: ms(15),
    tintColor: COLORS.black,
    resizeMode: 'contain',
  },
  verticalLine: {
    height: ms(35),
    resizeMode: 'contain',
  },
  dropIcon: {
    height: ms(20),
    width: ms(20),
    tintColor: COLORS.black,
  },
  addressView: {
    marginHorizontal: ms(20),
    flex: 1,
  },
  pickupPoint: {
    color: COLORS.black,
    paddingRight: ms(10),
    fontSize: ms(12),
    fontWeight: '500',
  },
  pickupAddress: {
    color: '#676767',
    paddingRight: ms(5),
    fontSize: ms(14),
    fontWeight: '300',
  },
  DropHeaderText: {
    color: COLORS.black,
    paddingRight: ms(10),
    fontSize: ms(12),
    fontWeight: '500',
  },
  dropAddressText: {
    color: '#676767',
    paddingRight: ms(5),
    fontSize: ms(14),
    fontWeight: '300',
  },

  arrowIconViewStyle: {
    width: ms(42),
    height: ms(42),
    borderRadius: ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  arrowIconStyle: {
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: ms(26),
    color: '#0F0F0F',
    fontWeight: '500',
    marginLeft: ms(20),
  },
  emailIcon: {
    width: ms(24),
    height: ms(24),
    resizeMode: 'contain',
  },

  innerResetView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  resetView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: ms(10),
  },

  linkedDescriptionText: {
    fontSize: ms(16),
    color: COLORS.black,
    fontWeight: '500',
  },
  title: {
    fontSize: ms(14),
    color: '#828282',
    fontWeight: '500',
  },
  marginLeft15: {
    marginLeft: ms(15),
  },
});
