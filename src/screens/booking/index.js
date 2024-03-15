import React, {useState} from 'react';
import {Image, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ms} from 'react-native-size-matters';
import {OutlineCircle, activeCheckBox, inActiveCheckBox} from '@/assets';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import CountryPicker from 'react-native-country-picker-modal';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export function Booking(props) {
  const rideData = props?.route?.params?.rideData;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [bookingType, setBookingType] = useState(1);
  const [notes, setNotes] = useState('');
  const [user, setUser] = useState('');

  const onSelect = country => {
    setCountryCode(country?.cca2);
    // setCountryPhoneCode(country?.callingCode[0]);
    setIsVisible(false);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleContinue = () => {
    if (!user) {
      alert('Please describe Pickup Sign.');
    } else if (!notes) {
      alert('Please describe notes.');
    } else {
      navigate(NAVIGATION.checkout, {
        rideData: rideData,
        bookingType: bookingType,
      });
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginHorizontal: ms(20), marginTop: ms(20)}}>
          <Text
            style={{fontSize: ms(26), fontWeight: '700', color: COLORS.black}}>
            {'Select who you are booking for'}
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
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  flex: 1,
                  fontSize: ms(14),
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                {'Booking For mySelf'}
              </Text>
              <TouchableOpacity
                onPress={() => setBookingType(1)}
                style={{
                  height: ms(30),
                  width: ms(30),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={bookingType === 1 ? activeCheckBox : inActiveCheckBox}
                  style={{height: ms(22), width: ms(22), resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: ms(1),
                backgroundColor: '#E6E6E6',
                marginVertical: ms(10),
              }}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  flex: 1,
                  fontSize: ms(14),
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                {'Book for someone else'}
              </Text>
              <TouchableOpacity
                onPress={() => setBookingType(2)}
                style={{
                  height: ms(30),
                  width: ms(30),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={bookingType === 2 ? activeCheckBox : inActiveCheckBox}
                  style={{height: ms(20), width: ms(20), resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Spacer space={ms(20)} />
        </View>

        {bookingType === 2 && (
          <View>
            <Text
              style={{
                fontSize: ms(16),
                color: COLORS.black,
                fontWeight: '500',
                marginHorizontal: ms(20),
              }}>
              {'Provide Person information'}
            </Text>
            <Spacer space={ms(15)} />

            <CustomInput
              label={isFocused ? 'Name' : ''}
              value={name}
              onChangeText={text => setName(text)}
              placeholder={'Name'}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Spacer space={ms(5)} />

            <CustomInput
              label={isFocused ? 'Email' : ''}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder={'Email'}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: ms(15),
                borderColor: '#E8E8E8',
                borderWidth: 2,
                backgroundColor: 'transparent',
                paddingHorizontal: ms(10),
                marginHorizontal: ms(20),
                marginVertical: ms(5),
                height: ms(55),
              }}>
              <CountryPicker
                visible={isVisible}
                onSelect={onSelect}
                onClose={() => setIsVisible(false)}
                countryCode={countryCode}
                withCallingCode={true}
                withCallingCodeButton={true}
                withAlphaFilter={true}
              />

              <TextInput
                onChangeText={setPhoneNo}
                placeholder={'Phone number'}
                value={phoneNo}
                keyboardType="number-pad"
                maxLength={10}
                style={{paddingHorizontal: 10}}
              />
            </View>

            <Spacer space={ms(10)} />

            <Text
              style={{
                fontSize: ms(10),
                color: COLORS.skyGray,
                fontWeight: '500',
                marginHorizontal: ms(20),
              }}>
              {
                'Please enter the phone number on which the guest would like to receive notifications'
              }
            </Text>
          </View>
        )}

        <View
          style={{
            height: ms(1),
            backgroundColor: '#E6E6E6',
            marginVertical: ms(10),
            marginHorizontal: ms(20),
          }}
        />

        <Text
          style={{
            fontSize: ms(16),
            color: COLORS.black,
            fontWeight: '500',
            marginHorizontal: ms(20),
          }}>
          {'Provide additional information'}
        </Text>
        <Spacer space={ms(15)} />

        <CustomInput
          label={isFocused ? 'Pickup sign' : ''}
          value={user}
          onChangeText={text => setUser(text)}
          placeholder={'Pickup sign'}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Spacer space={ms(5)} />

        <CustomInput
          label={isFocused ? 'Notes for the chauffeur' : ''}
          value={notes}
          onChangeText={text => setNotes(text)}
          placeholder={'Notes for the chauffeur'}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <View
          style={{justifyContent: 'flex-end', flex: 1, marginBottom: ms(20)}}>
          <CustomButton
            title={'Continue'}
            onPress={handleContinue}
            // loading={isLoading}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
