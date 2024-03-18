import React from 'react';
import CustomButton from '@/components/CustomButton';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {goBack, navigate} from '@/navigation/NavigationRef';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ms} from 'react-native-size-matters';
import {
  Car,
  Drop,
  LeftBlackArrow,
  Onboarding_1,
  OutlineCircle,
  Seprator,
  VerticalLineSeprator,
  activeCheckBox,
  add,
  success,
  visa,
} from '@/assets';
import {NAVIGATION} from '@/constants';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {bookRide} from '@/redux/actions/authActions';
import Modal from 'react-native-modal';

export function Checkout(props) {
  const dispatch = useDispatch();
  const rideDetail = useSelector(
    state => state?.user?.ridePrice?.data?.booking,
  );
  const bookingDetail = props?.route?.params?.bookingDetail;
  const cardDetail = props?.route?.params?.cardDetail;
  const rideData = props?.route?.params?.rideData;
  const price = rideData?.ride_price.substring(1);
  const bookRideData = {
    pickup_type: rideDetail?.pickup_type,
    pickup_latitude: rideDetail?.pickup_latitude,
    pickup_longitude: rideDetail?.pickup_longitude,
    dropoff_latitude: rideDetail?.dropoff_latitude,
    dropoff_longitude: rideDetail?.dropoff_longitude,
    dropoff_location: rideDetail?.dropoff_location,
    pickup_location: rideDetail?.pickup_location,
    estimate_distance: rideDetail?.estimate_distance,
    pickup_date_time: rideDetail?.pickup_date_time,
    car_category_id: rideData?.category_id,
    pickup_sign: bookingDetail?.pickup_sign,
    notes: bookingDetail?.notes,
    book_for: bookingDetail?.book_for,
    //   recipient_first_name:lakshdeep
    //   recipient_last_name:singh
    //   recipient_phone_code:+91
    //   recipient_phone_number:7087519219
    //   recipient_email:lakshdeep@yopmail.com
    price: price,
    card_holder_name: cardDetail?.card_holder_name,
    card_number: cardDetail?.card_number,
    expiry_date: cardDetail?.expiry_date,
    card_cvv: cardDetail?.card_cvv,
  };

  const checkout = () => {
    navigate(NAVIGATION.invoiceDetail)
    // dispatch(bookRide(bookRideData));
  };
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, paddingHorizontal: ms(20), marginVertical: ms(25)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.arrowIconViewStyle}
              onPress={() => goBack()}>
              <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
            </TouchableOpacity>

            <Spacer space={ms(15)} />
            <Text style={styles.headerTitle}>{'Checkout'}</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: ms(20)}}>
            <Image
              source={{uri: rideData?.file_src}}
              style={{height: ms(128), width: ms(244), resizeMode: 'stretch'}}
            />
          </View>

          <Spacer space={ms(10)} />
          <Text
            style={{
              fontSize: ms(22),
              fontWeight: '600',
              color: COLORS.black,
              marginTop: ms(5),
              textAlign: 'center',
            }}>
            {rideData?.ride_price}
          </Text>
          <Text
            style={{
              fontSize: ms(12),
              fontWeight: '500',
              color: COLORS.skyGray,
              textAlign: 'center',
              marginVertical: ms(2),
            }}>
            {rideData?.category_name}
          </Text>

          <Text
            style={{
              fontSize: ms(12),
              color: '#676767',
              fontWeight: '500',
              textAlign: 'center',
              letterSpacing: 1,
            }}>
            {'Mercedes E Class or similar'}
          </Text>

          <View
            style={{
              height: ms(1),
              backgroundColor: '#E6E6E6',
              marginVertical: ms(20),
            }}
          />

          <Text
            style={{
              fontSize: ms(12),
              fontWeight: '500',
              color: COLORS.skyGray,
            }}>
            {'Pickup Date and Time'}
          </Text>

          <Text
            style={{
              fontSize: ms(14),
              fontWeight: '500',
              color: COLORS.black,
              marginTop: ms(4),
            }}>
            {moment(rideDetail?.pickup_date_time?.moment)?.format(
              'ddd, MMM. DD [at] hh:mm A',
            )}
          </Text>

          <View
            style={{
              height: ms(1),
              backgroundColor: '#E6E6E6',
              marginVertical: ms(20),
            }}
          />

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
              <View>
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
                  {rideDetail?.pickup_location}
                </Text>
              </View>
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
              <View>
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
                  {rideDetail?.dropoff_location}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: ms(1),
              backgroundColor: '#E6E6E6',
              marginVertical: ms(20),
            }}
          />

          <Text
            style={{
              fontSize: ms(14),
              fontWeight: '500',
              color: COLORS.skyGray,
              marginBottom: ms(10),
            }}>
            {'Card'}
          </Text>

          <View
            style={{
              backgroundColor: '#FFF',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.15,
              shadowRadius: 3,
              elevation: 5,
              paddingHorizontal: ms(20),
              paddingVertical: ms(15),
              borderRadius: ms(15),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={visa}
                style={{height: ms(13), width: ms(42), resizeMode: 'contain'}}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: ms(14),
                  color: COLORS.black,
                  fontWeight: '500',
                  marginHorizontal: ms(10),
                }}>
                {'Visa....4567'}
              </Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  height: ms(30),
                  width: ms(30),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={activeCheckBox}
                  style={{height: ms(22), width: ms(22), resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginVertical: ms(15),
              alignItems: 'center',
            }}>
            <Image
              source={add}
              style={{height: ms(18), width: ms(18), resizeMode: 'contain'}}
            />
            <Text
              style={{
                fontSize: ms(12),
                fontWeight: '500',
                color: COLORS.black,
                marginHorizontal: ms(5),
              }}>
              {'Add Other Card'}
            </Text>
          </TouchableOpacity>

          <CustomButton
            title={'Pay Now'}
            onPress={checkout}
            // loading={isLoading}
          />
        </View>
      </KeyboardAwareScrollView>
      <Modal isVisible={false}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            flex: 1 / 2.5,
            alignItems: 'center',
            borderRadius: ms(15),
          }}>
          <Image
            source={success}
            style={{height: ms(76), width: ms(76), resizeMode: 'contain'}}
          />
          <Spacer space={ms(20)} />

          <Text
            style={{fontSize: ms(22), color: COLORS.black, fontWeight: '600'}}>
            {'Payment Successful'}
          </Text>

          <Spacer space={ms(20)} />
          <Text
            style={{fontSize: ms(12), color: COLORS.skyGray, fontWeight: '400', textAlign: "center", marginHorizontal: ms(20)}}>
            {
              'Please wait a moment we will redirect you to the conformation page.'
            }
          </Text>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
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
});
