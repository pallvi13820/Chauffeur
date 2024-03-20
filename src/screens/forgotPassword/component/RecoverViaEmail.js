import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  BottomBackground,
  Email,
  EmailBanner,
  LeftBlackArrow,
} from '../../../assets';
import {styles} from '../styles';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '@/components/CustomButton';
import {Spacer} from '@/theme/Spacer';
import {navigate, goBack} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import CustomInput from '@/components/CustomInput';
import {forgotPassword} from '@/redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import FastImage from 'react-native-fast-image';

export function RecoverViaEmail() {
  const dispatch = useDispatch();
  const registerDetail = useSelector(state => state?.auth);
  const isLoading = registerDetail?.loading;
  const [email, setEmail] = useState('');

  const handleVerifyClick = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      alert('Please enter email id');
    } else if (reg.test(email) === false) {
      alert('Please enter the valid email Id.');
    } else {
      forgotPasswordRequest();
    }
  };

  const forgotPasswordRequest = () => {
    const data = {
      email: email.trim(),
      type: 1,
    };

    const forgotData = dispatch(forgotPassword(data));

    if (forgotData?.error?.message != 'Rejected') {
      navigate(NAVIGATION.verifyByEmailCode, {email: email});
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'always'}>
        <View style={{flex: 1, paddingHorizontal: ms(20)}}>
          <TouchableOpacity
            style={styles.arrowIconViewStyle}
            onPress={() => goBack()}>
            <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
          </TouchableOpacity>

          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Recover'}</Text>
          <Text style={styles.headerSubTitle}>{'Password Via Email'}</Text>
          <View style={styles.seprator} />

          <Spacer space={ms(35)} />
          <Image source={EmailBanner} style={styles.bannerEmailImage} />
          <Spacer space={ms(35)} />

          <Text style={styles.bannerText}>
            {'Please enter the email to recover your password.'}
          </Text>
          <Spacer space={ms(40)} />

          <CustomInput
            label={'Email'}
            value={email}
            onChangeText={text => setEmail(text)}
            left={<TextInput.Icon icon={Email} size={20} />}
            placeholder={'Email'}
          />

          <Spacer space={ms(30)} />

          <CustomButton
            title={'Submit'}
            onPress={handleVerifyClick}
            loading={isLoading}
          />
        </View>
        <Image
          source={BottomBackground}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
