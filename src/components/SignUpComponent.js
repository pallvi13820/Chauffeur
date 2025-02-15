import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './CustomInput';
import {Email, Eye, Lock, visibleEye} from '../assets';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import CustomButton from './CustomButton';
import {navigate} from '../navigation/NavigationRef';
import {NAVIGATION} from '../constants';
import {Spacer} from '@/theme/Spacer';
import Toast from 'react-native-toast-message';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPwd, setIsVisibleConfirmPwd] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);

  const handleSubmit = () => {
    validateFields();
  };

  const validateFields = () => {
    const signUpUserDetail = {
      full_name: name?.trim(),
      email: email.trim(),
      password: password,
      confirm_password: confirmPassword,
      device_type: Platform.OS === 'android' ? 1 : 2,
      fcm_token: 'randomUUID',
    };
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let fullnameregex = /^[A-Za-z ]+$/;
    let Passwordregex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (name?.trim() == '') {
      Toast.show({
        text2: 'Please enter full name',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (name?.trim()?.length < 3) {
      Toast.show({
        text2: 'Full name must be 3 character long',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (fullnameregex.test(name?.trim()) == false) {
      Toast.show({
        text2: 'Please enter alphabetic character only',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (email?.trim == '') {
      Toast.show({
        text2: 'Please enter alphabetic character only',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
      alert('Please enter email id');
    } else if (reg.test(email) === false) {
      Toast.show({
        text2: 'Please enter the valid email Id.',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (password == '') {
      Toast.show({
        text2: 'Please enter your password',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (password?.length < 8) {
      Toast.show({
        text2: 'Password must be 8 character long!',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (Passwordregex.test(password) === false) {
      Toast.show({
        text2: 'Password must be at least 1 Number and 1 Capital case letter!',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else if (password !== confirmPassword) {
      Toast.show({
        text2: 'Password and confirm password should be same.',
        position: 'bottom',
        type: 'error_toast',
        visibilityTime: 1500,
      });
    } else {
      navigate(NAVIGATION.verifyPhoneNumber, {
        signUpUserDetail: signUpUserDetail,
      });

      // setEmail('');
      // setPassword('');
      // setConfirmPassword('');
      // setName('');
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label={isFocusedName ? 'Full Name' : ''}
        value={name}
        placeholder={'Full Name'}
        onChangeText={text => setName(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
        onFocus={() => setIsFocusedName(true)}
        onBlur={() => setIsFocusedName(false)}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={isFocusedEmail ? 'Email' : ''}
        value={email}
        placeholder={'Email'}
        onChangeText={text => setEmail(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => setIsFocusedEmail(false)}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={isFocusedPassword ? 'Password' : ''}
        value={password}
        placeholder={'Password'}
        onChangeText={text => setPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={
          <TextInput.Icon
            icon={isVisiblePassword ? Eye : visibleEye}
            size={20}
            onPress={() => setIsVisiblePassword(!isVisiblePassword)}
          />
        }
        secureTextEntry={!isVisiblePassword}
        onFocus={() => setIsFocusedPassword(true)}
        onBlur={() => setIsFocusedPassword(false)}
      />
      <Spacer space={ms(20)} />
      <CustomInput
        label={isFocusedConfirmPassword ? 'Confirm Password' : ''}
        value={confirmPassword}
        placeholder={'Confirm Password'}
        onChangeText={text => setConfirmPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={
          <TextInput.Icon
            icon={isVisibleConfirmPwd ? Eye : visibleEye}
            size={20}
            onPress={() => setIsVisibleConfirmPwd(!isVisibleConfirmPwd)}
          />
        }
        secureTextEntry={!isVisibleConfirmPwd}
        onFocus={() => setIsFocusedConfirmPassword(true)}
        onBlur={() => setIsFocusedConfirmPassword(false)}
      />

      <Text style={styles.textStyle}>
        {'By continue you have accepted our '}
        <Text style={styles.descriptionText} onPress={() => {}}>
          {'Terms of Services'}
        </Text>
        {' and the'}
        <Text style={styles.descriptionText} onPress={() => {}}>
          {' Privacy Policy'}
        </Text>
        .
      </Text>
      <CustomButton title={'Sign Up'} onPress={handleSubmit} />
    </View>
  );
};

export default SignUpComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(10),
    flex: 0.5,
  },
  textStyle: {
    marginHorizontal: ms(30),
    marginTop: ms(30),
    color: '#828282',
    fontSize: ms(11),
  },
  descriptionText: {
    color: 'black',
    fontSize: ms(11),
    fontWeight: '500',
  },
});
