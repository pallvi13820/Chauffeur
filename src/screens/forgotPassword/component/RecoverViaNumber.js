import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  BottomBackground,
  Email,
  LeftBlackArrow,
  PhoneBanner,
} from '../../../assets';
import {styles} from '../styles';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import {Spacer} from '@/theme/Spacer';
import {navigate, goBack} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {useDispatch} from 'react-redux';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {forgotPassword} from '@/redux/actions/authActions';

export function RecoverViaNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleVerifyClick = () => {
    if (phoneNumber == '') {
      alert('Please enter Phone Number');
    } else {
      forgotPasswordRequest();
    }
  };

  const forgotPasswordRequest = async () => {
    const data = {
      phoneNumber: phoneNumber,
      type: 2,
    };

    setIsLoading(true);

    const forgotData = await dispatch(forgotPassword(data));

    setIsLoading(false);
    if (forgotData?.error?.message != 'Rejected') {
      navigate(NAVIGATION.verifyByPhoneCode, {phoneNumber: phoneNumber});
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: ms(20)}}>
          <TouchableOpacity
            style={styles.arrowIconViewStyle}
            onPress={() => goBack()}>
            <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
          </TouchableOpacity>

          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Recover'}</Text>
          <Text style={styles.headerSubTitle}>{'Password Via Phone'}</Text>
          <View style={styles.seprator} />

          <Spacer space={ms(35)} />
          <Image source={PhoneBanner} style={styles.bannerEmailImage} />
          <Spacer space={ms(35)} />

          <Text style={styles.bannerText}>
            {'Please enter the email to recover your password.'}
          </Text>
          <Spacer space={ms(40)} />

          <CustomInput
            label={'Phone Number'}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            left={<TextInput.Icon icon={Email} size={20} />}
            placeholder={'Phone Number'}
            maxLength={10}
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
