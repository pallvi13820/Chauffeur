import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Eye, LeftBlackArrow, Lock, changePassword} from '@/assets';
import {goBack} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import CustomInput from '@/components/CustomInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '@/components/CustomButton';

export function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);
  const [isVisibleOldPassword, setIsVisibleOldPassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const [isFocusedOldPassword, setIsFocusedOldPassword] = useState(false);
  const [isFocusedNewPassword, setIsFocusedNewPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginVertical: ms(25)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: ms(20),
            }}>
            <TouchableOpacity
              style={styles.arrowIconViewStyle}
              onPress={() => goBack()}>
              <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginVertical: ms(25)}}>
            <Image
              source={changePassword}
              style={{height: ms(80), width: ms(80), resizeMode: 'contain'}}
            />
            <Spacer space={ms(25)} />

            <Text style={styles.headerTitle}>{'Change Password'}</Text>
            <Text style={styles.subTitle}>
              {'Create your new password here.'}
            </Text>
            <Spacer space={ms(10)} />
          </View>

          <CustomInput
            label={isFocusedOldPassword ? 'Old Password' : ''}
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
            left={<TextInput.Icon icon={Lock} size={20} />}
            right={
              <TextInput.Icon
                icon={Eye}
                size={20}
                onPress={() => setIsVisibleOldPassword(!isVisibleOldPassword)}
              />
            }
            secureTextEntry={!isVisibleOldPassword}
            placeholder={'Old Password'}
            onFocus={() => setIsFocusedOldPassword(true)}
            onBlur={() => setIsFocusedOldPassword(false)}
          />
          <Spacer space={ms(15)} />

          <CustomInput
            label={isFocusedNewPassword ? 'New Password' : ''}
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
            left={<TextInput.Icon icon={Lock} size={20} />}
            right={
              <TextInput.Icon
                icon={Eye}
                size={20}
                onPress={() => setIsVisibleNewPassword(!isVisibleNewPassword)}
              />
            }
            secureTextEntry={!isVisibleNewPassword}
            placeholder={'New Password'}
            onFocus={() => setIsFocusedNewPassword(true)}
            onBlur={() => setIsFocusedNewPassword(false)}
          />
          <Spacer space={ms(15)} />

          <CustomInput
            label={isFocusedConfirmPassword ? 'Confirm Password' : ''}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            left={<TextInput.Icon icon={Lock} size={20} />}
            right={
              <TextInput.Icon
                icon={Eye}
                size={20}
                onPress={() =>
                  setIsVisibleConfirmPassword(!isVisibleOldPassword)
                }
              />
            }
            secureTextEntry={!isVisibleConfirmPassword}
            placeholder={'Confirm Password'}
            onFocus={() => setIsFocusedConfirmPassword(true)}
            onBlur={() => setIsFocusedConfirmPassword(false)}
          />
        </View>

        <CustomButton
          title={'Change'}
          // onPress={handleProceedCheckout}
        />
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
  },
  subTitle: {
    fontSize: ms(12),
    color: COLORS.skyGray,
    fontWeight: '500',
    marginTop: ms(5),
  },
});
