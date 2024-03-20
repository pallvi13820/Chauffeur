import {
  Car,
  Drop,
  OutlineCircle,
  Seprator,
  VerticalLineSeprator,
  success,
  visa,
} from '@/assets';
import CustomButton from '@/components/CustomButton';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {NAVIGATION} from '@/constants';
import {navigate} from '@/navigation/NavigationRef';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import moment from 'moment';
import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
const width = Dimensions.get('window').width;

export function InvoiceDetail() {
  const bookingDetail = useSelector(state => state?.user?.bookRideDetail?.data);
  console.log('dfjgdjfgjdfg', bookingDetail);
  return (
    <ScreenWrapper>
      <View style={{flex: 1, backgroundColor: COLORS.sky_grey}}>
        <Spacer space={ms(70)} />

        <Image
          source={success}
          style={{
            height: ms(78),
            width: ms(78),
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />

        <Spacer space={ms(10)} />
        <Text
          style={{
            fontSize: ms(22),
            fontWeight: '600',
            color: COLORS.black,
            marginTop: ms(5),
            textAlign: 'center',
          }}>
          ${bookingDetail?.price?.toFixed(2)}
        </Text>
        <Text
          style={{
            fontSize: ms(12),
            fontWeight: '500',
            color: COLORS.skyGray,
            textAlign: 'center',
            marginVertical: ms(2),
          }}>
          {'Business Class'}
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

        <Spacer space={ms(20)} />

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
            marginHorizontal: ms(25),
          }}>
          <Text
            style={{fontSize: ms(16), color: COLORS.black, fontWeight: '600'}}>
            {'Ride Successfully Booked'}
          </Text>

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
                    marginTop: ms(10),
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
                  {bookingDetail?.pickup_location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: ms(2),
                  alignItems: 'center',
                }}>
                <Image
                  source={Seprator}
                  style={{
                    width: ms(220),
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
                  {bookingDetail?.dropoff_location}
                </Text>
              </View>
            </View>
          </View>

          <Spacer space={ms(15)} />

          <Image
            source={Seprator}
            style={{
              width: width - ms(10),
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          <Text
            style={{fontSize: ms(16), color: COLORS.black, fontWeight: '600'}}>
            {'Pickup Date and Time'}
          </Text>

          <Text
            style={{
              fontSize: ms(14),
              fontWeight: '500',
              color: COLORS.skyGray,
              marginTop: ms(10),
            }}>
            {moment(bookingDetail?.pickup_date_time?.moment)?.format(
              'ddd, MMM. DD [at] hh:mm A',
            )}
          </Text>

          <Spacer space={ms(15)} />

          <Image
            source={Seprator}
            style={{
              width: width - ms(10),
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Spacer space={ms(15)} />

          <Text
            style={{fontSize: ms(16), color: COLORS.black, fontWeight: '600'}}>
            {'Payment mode'}
          </Text>
          <Spacer space={ms(10)} />

          <Text
            style={{
              fontSize: ms(14),
              fontWeight: '500',
              color: COLORS.skyGray,
              marginBottom: ms(10),
            }}>
            {'Card'}
          </Text>

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
          </View>
        </View>
      </View>
      <CustomButton title={'Okay'} onPress={() => navigate(NAVIGATION.home)} />
      <Spacer space={ms(20)} />
    </ScreenWrapper>
  );
}
