import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Apple, Email, Eye, Google, Lock, Seprator, visibleEye} from '@/assets';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {Spacer} from '@/theme/Spacer';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '@/redux/actions/authActions';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const isLoading = useSelector(state => state?.auth?.loading);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };

  const handleSubmit = () => {
    validateFields();
  };

  const validateFields = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      alert('Please enter email id');
    } else if (reg.test(email) === false) {
      alert('Please enter the valid email Id.');
    } else if (password == '') {
      alert('Please enter your password');
  } else {
      loginRequest();
    }
  };
  const loginRequest = async () => {
    const data = {
      email: email.trim(),
      password: password,
      device_type: Platform.OS === 'android' ? 1 : 2,
      fcm_token: 'randomUUID',
    };
    await dispatch(login(data));
  };
  return (
    <View style={styles.container}>
      <CustomInput
        label={isFocused ? 'Email' : ''}
        value={email}
        onChangeText={text => setEmail(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
        placeholder={'Email'}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={isFocusedPassword ? 'Password' : ''}
        value={password}
        onChangeText={text => setPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={
          <TextInput.Icon
            icon={isVisible ? Eye : visibleEye}
            size={20}
            onPress={() => setIsVisible(!isVisible)}
          />
        }
        secureTextEntry={!isVisible}
        placeholder={'Password'}
        onFocus={handleFocusPassword}
        onBlur={handleBlurPassword}
      />

      <TouchableOpacity
        style={styles.forgotPasswordView}
        onPress={() => navigate(NAVIGATION.forgotPassword)}>
        <Text style={styles.forgotText}>{'Forgot Password?'}</Text>
      </TouchableOpacity>
      <Spacer space={ms(10)} />

      <CustomButton
        title={'Login'}
        onPress={handleSubmit}
        loading={isLoading}
      />
      <Spacer space={ms(15)} />

      <View style={styles.sepratorLoginView}>
        <Image source={Seprator} style={{height: ms(3)}} />
        <Text style={{color: '#828282', textAlign: 'center'}}>
          or Login with
        </Text>
        <Image source={Seprator} style={{height: ms(3)}} />
      </View>
      <Spacer space={ms(15)} />

      <View style={styles.sepratorLoginView}>
        <TouchableOpacity style={styles.socialLoginView}>
          <Image style={styles.socialIcon} source={Apple} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginView}>
          <Image style={styles.socialIcon} source={Google} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(10),
    flex: 0.5,
  },
  forgotPasswordView: {
    alignSelf: 'flex-end',
    marginTop: ms(12),
    marginHorizontal: ms(20),
  },
  forgotText: {
    color: 'black',
    fontSize: ms(14),
  },
  sepratorLoginView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ms(20),
  },
  socialLoginView: {
    height: ms(62),
    width: ms(62),
    borderColor: '#E8E8E8',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: ms(20),
    justifyContent: 'center',
    marginHorizontal: ms(4),
  },
  socialIcon: {
    height: ms(25),
    width: ms(20),
    resizeMode: 'contain',
  },
});
