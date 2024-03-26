import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DropDown, Email, LeftBlackArrow, smile} from '@/assets';
import {goBack} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import {TextInput as TextField} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import { getUpdateProfile } from '@/redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
export function EditInfo() {
  const dispatch = useDispatch()
  const user = useSelector(state => state?.auth?.user);

  const [email, setEmail] = useState(user?.data?.email ||'');
  const [name, setName] = useState(user?.data?.name ||'');
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [countryPhoneCode, setCountryPhoneCode] = useState('1');
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user?.data?.phoneNumber ||'');
  
  const onSelect = country => {
    setCountryCode(country?.cca2);
    setCountryPhoneCode(country?.callingCode[0]);
    setIsVisible(false);
  };

  const updateDetail = {
    full_name: name,
    phoneNumber: phoneNumber,
    email: email
    
  };

  const handleProceedCheckout = () => {
    dispatch(getUpdateProfile(updateDetail));
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
            <Text style={styles.headerTitle}>{'Edit Information'}</Text>
          </View>

          <Spacer space={ms(40)} />

          <CustomInput
            label={isFocusedName ? 'Full Name' : ''}
            value={name}
            placeholder={'Full Name'}
            onChangeText={text => setName(text)}
            left={<TextField.Icon icon={smile} size={20} />}
            onFocus={() => setIsFocusedName(true)}
            onBlur={() => setIsFocusedName(false)}
          />
          <Spacer space={ms(20)} />

          <CustomInput
            label={isFocusedEmail ? 'Email' : ''}
            value={email}
            placeholder={'Email'}
            onChangeText={text => setEmail(text)}
            left={<TextField.Icon icon={Email} size={20} />}
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
          />
          <Spacer space={ms(20)} />

          <TouchableOpacity
            style={styles.countryPickerView}
            onPress={() => setIsVisible(true)}>
            <View style={{flex: 1}}>
              <CountryPicker
                visible={isVisible}
                onSelect={onSelect}
                withFlag={true}
                withCountryNameButton={true}
                countryCode={countryCode}
                withFilter={true}
              />
            </View>

            <Image source={DropDown} style={styles.dropDownImage} />
          </TouchableOpacity>

          <Spacer space={ms(20)} />

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
        </View>

        <CustomButton title={'Update'} onPress={handleProceedCheckout} />
        <Spacer space={ms(20)} />
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
  addIcon: {
    width: ms(24),
    height: ms(24),
    resizeMode: 'contain',
    borderRadius: ms(8),
  },
  countryPickerView: {
    borderWidth: ms(2),
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(52),
    paddingHorizontal: ms(18),
    marginHorizontal: ms(20),
  },
  dropDownImage: {
    width: ms(14),
    height: ms(7),
    resizeMode: 'contain',
  },
  dropDownView: {
    paddingVertical: ms(4),
    paddingHorizontal: ms(2),
  },
  countryText: {
    fontSize: ms(14),
    color: '#828282',
    flex: 1,
    paddingLeft: ms(10),
  },
  phoneNumberView: {
    borderWidth: ms(2),
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(52),
    paddingHorizontal: ms(18),
    marginHorizontal: ms(20),
  },
  phoneNumberText: {
    marginLeft: ms(10),
    color: '#828282',
    fontSize: ms(14),
    padding: 0,
    flex: 1,
  },
});
