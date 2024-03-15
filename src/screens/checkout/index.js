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
  visa,
} from '@/assets';
import {NAVIGATION} from '@/constants';

export function Checkout(props) {
  console.log('dfkhdfh', props?.route?.params);

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
              source={Onboarding_1}
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
            {'€ 45.00'}
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
            {'Mon, Sep. 26 at 10:00 AM'}
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
                  {'pickupStreetAddress || pickupCurrentLocation'}
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
                  {'dropStreetAddress || dropCurrentLocation'}
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
            onPress={() => navigate(NAVIGATION.addCardDetails)}
            // loading={isLoading}
          />
        </View>
      </KeyboardAwareScrollView>
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
