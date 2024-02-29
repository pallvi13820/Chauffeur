import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './CustomInput';
import {Email, Eye, Lock} from '../assets';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import CustomButton from './CustomButton';
import {navigate} from '../navigation/NavigationRef';
import {NAVIGATION} from '../constants';
import {Spacer} from '@/theme/Spacer';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    validateFields();
  };

  const validateFields = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let Passwordregex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (email == '') {
      alert('Please enter email id');
    } else if (reg.test(email) === false) {
      alert('Please enter the valid email Id.');
    } else if (password == '') {
      alert('Please enter your password');
    } else if (password?.length < 8) {
      alert('Password must be 8 character long!');
    } else if (Passwordregex.test(password) === false) {
      alert('Password must be at least 1 Number and 1 Capital case letter!');
    } else if (password !== confirmPassword) {
      alert('Password and confirm password should be same.');
    } else {
      loginRequest();
    }
  };
  const loginRequest = () => {
    const data = {
      email: email.trim(),
      password: password,

      device_type: Platform.OS === 'android' ? 1 : 2,
      fcm_token: 'randomUUID',
    };

    dispatch(login(data));
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label={'Full Name'}
        value={name}
        onChangeText={text => setName(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={<TextInput.Icon icon={Eye} size={20} />}
        secureTextEntry
      />
      <Spacer space={ms(20)} />
      <CustomInput
        label={'Confirm Password'}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={<TextInput.Icon icon={Eye} size={20} />}
        secureTextEntry
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
      <CustomButton
        title={'Sign Up'}
        onPress={() => navigate(NAVIGATION.verifyPhoneNumber)}
      />
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
  },
  descriptionText: {
    color: 'black',
    fontSize: ms(14),
  },
});
