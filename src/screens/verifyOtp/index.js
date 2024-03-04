import React, {useEffect, useState} from 'react';
import {ms} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {BottomBackground, DropDown} from '@/assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Spacer} from '@/theme/Spacer';
import {useIsFocused, useRoute} from '@react-navigation/native';
import styles from './style';
import CountryPicker from 'react-native-country-picker-modal';
import CustomButton from '@/components/CustomButton';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/Colors';
import {signUp} from '@/redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export const CustomFlagComponent = ({country}) => {
  const flagImage = `https://flagcdn.com/w20/${country.cca2.toLowerCase()}.png`;
  return <Image source={{uri: flagImage}} style={styles.addIcon} />;
};

export function VerifyPhoneNumber() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const route = useRoute();
  const signUpUserDetail = route?.params?.signUpUserDetail;
  const [countryCode, setCountryCode] = useState('US');
  const [countryPhoneCode, setCountryPhoneCode] = useState('1');
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = country => {
    setCountryCode(country?.cca2);
    setCountryPhoneCode(country?.callingCode[0]);
    setIsVisible(false);
  };

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        StatusBar.setBackgroundColor(COLORS.sky_grey, true);
        StatusBar.setBarStyle('dark-content');
      }, 300);
    }
  }, [isFocused]);

  const handleSubmit = () => {
    validateFields();
  };

  const validateFields = () => {
    const data = {
      ...signUpUserDetail,
      phone_code: countryPhoneCode,
      phone_number: phoneNumber,
    };
    if (phoneNumber == '') {
      alert('Please enter Phone Number');
    } else if (phoneNumber?.length < 10) {
      alert('Please enter the valid Phone Number');
    } else {
        signUpRequest();
      navigate(NAVIGATION.verifyOtp, {
        userDetail: data,
      });
    }
  };
  const signUpRequest = () => {
    const data = {
      ...signUpUserDetail,
      phone_code: countryPhoneCode,
      phone_number: phoneNumber,
    };
    dispatch(signUp(data));
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: ms(20)}}>
          <Spacer space={ms(20)} />

          <Text style={styles.headerTitle}>{'Verify Phone'}</Text>
          <Text style={styles.headerSubTitle}>{'Number'}</Text>
          <View style={styles.seprator} />
          <Spacer space={ms(35)} />

          <Text style={styles.bannerText}>
            {'Please confirm your country code and enter your phone number.'}
          </Text>

          <Spacer space={ms(35)} />

          <TouchableOpacity
            style={styles.countryPickerView}
            onPress={() => setIsVisible(true)}>
            <View style={{flex: 1}}>
              <CountryPicker
                visible={isVisible}
                onSelect={onSelect}
                // onClose={() => setIsVisible(false)}
                withFlag={true}
                withCountryNameButton={true}
                countryCode={countryCode}
                filter={true}
                // filterPlaceholder="Search"
                // filterPlaceholderTextColor="#ccc"
                // filterOptions={{
                //   keys: ['name', 'cca2', 'callingCode'],
                // }}
                // data=
                // renderFlag={props => (
                //   <CustomFlagComponent country={props.country} />
                // )}
              />
            </View>
            {/* <TouchableOpacity style={styles.addIconView} onPress={() => setIsVisible(true) }>
              <CustomFlagComponent country={country} />
            </TouchableOpacity> */}

            {/* <View
                  style={{
                    width: ms(1),
                    height: ms(15),
                    marginHorizontal: ms(8),
                    backgroundColor: '#E6E6E6',
                  }}
                /> */}

            {/* <Text style={styles.countryText}>{countryName}</Text> */}

            <Image source={DropDown} style={styles.dropDownImage} />
          </TouchableOpacity>
          <Spacer space={ms(35)} />

          <View style={styles.phoneNumberView}>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <Text
                style={{
                  fontSize: ms(14),
                  color: '#0F0F0F',
                }}>
                +{countryPhoneCode}
              </Text>
            </TouchableOpacity>

            <TextInput
              maxLength={10}
              placeholder={'7850025674'}
              placeholderTextColor={'#D2D2D2'}
              keyboardType={'numeric'}
              style={styles.phoneNumberText}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <Spacer space={ms(20)} />

          <CustomButton title={'Send Code'} onPress={handleSubmit} />
          <Spacer space={ms(10)} />
        </View>

        <View style={{flex: 0.01}}>
          <Image
            source={BottomBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
