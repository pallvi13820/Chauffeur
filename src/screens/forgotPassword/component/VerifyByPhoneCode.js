import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BottomBackground, Edit} from '../../../assets';
import {styles} from '../styles';
import {ms} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '@/components/CustomButton';
import {Spacer} from '@/theme/Spacer';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {useRoute} from '@react-navigation/native';
import {
  resendForgotPasswordOtp,
  verifyForgotPasswordOtp,
} from '@/redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

export function VerifyByPhoneCode() {
  const registerDetail = useSelector(state => state?.auth);

  const dispatch = useDispatch();
  const route = useRoute();
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingResend, setIsLoadingResend] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleResendClick = async () => {
    const data = {
      type: 2,
      user_id: registerDetail?.forgotPasswordDetail?.data?.id,
    };
    setSeconds(59);
    setValue('');
    setIsLoadingResend(true);
    await dispatch(resendForgotPasswordOtp(data));
    setIsLoadingResend(false);
  };

  const handleVerifyClick = async () => {
    const data = {
      user_id: registerDetail?.forgotPasswordDetail?.data?.id,
      reset_password_otp: value,
    };
    if (value?.length < 4) {
      alert('Please Fill the Verification Code');
    } else {
      setIsLoading(true);
      const verifyOtp = await dispatch(verifyForgotPasswordOtp(data));
      setIsLoading(false);
      if (verifyOtp?.error?.message != 'Rejected') {
        navigate(NAVIGATION.createNewPassword);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 0.9}}>
          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Verify Phone'}</Text>
          <Text style={styles.headerSubTitle}>{'Code'}</Text>
          <View style={styles.seprator} />

          <Spacer space={ms(45)} />

          <Text style={styles.bannerText}>
            {'Verification Code was sent to '}
          </Text>

          <Spacer space={ms(25)} />
          <View style={styles.editTextView}>
            <Text style={styles.subTitleText}>
              {route?.params?.phoneNumber}
            </Text>
            <TouchableOpacity>
              <Image source={Edit} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <Spacer space={ms(35)} />

          <CodeField
            ref={ref}
            {...prop}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.alignSelfCenter}
            keyboardType={'number-pad'}
            textContentType={'oneTimeCode'}
            renderCell={({index, symbol, isFocused}) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  styles.cellRoot,
                  {backgroundColor: isFocused ? '#0f0f0f' : '#fff'},
                ]}>
                <Text
                  style={[
                    styles.cellText,
                    {color: isFocused ? '#fff' : '#0f0f0f'},
                  ]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <Spacer space={ms(25)} />

          <Text style={styles.resendCodeText}>
            {'Resend Code in  '}
            <Text style={styles.countText}>{formatTime(seconds)}</Text>
          </Text>
          <Spacer space={ms(70)} />

          <TouchableOpacity
            style={[
              styles.resendButtonView,
              {backgroundColor: seconds === 0 ? '#1616C8' : '#E6E6E6'},
            ]}
            disabled={seconds !== 0}
            onPress={handleResendClick}>
            {isLoadingResend ? (
              <FastImage
                source={require('@/assets/gif/Loader.gif')}
                style={{width: ms(35), height: ms(35)}}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : (
              <Text
                style={[
                  styles.subTitleText,
                  {color: seconds === 0 ? '#fff' : '#000'},
                ]}>
                {'Resend'}
              </Text>
            )}
          </TouchableOpacity>
          {/* <Spacer space={ms(10)} /> */}
          <CustomButton
            title={'Verify'}
            onPress={handleVerifyClick}
            loading={isLoading}
          />
        </View>
        <View style={{flex: 0.1}}>
          <Image
            source={BottomBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
