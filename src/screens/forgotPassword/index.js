import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {
  BottomBackground,
  EmailImg,
  ForgotImage,
  LeftBlackArrow,
  Phone,
  RightArrow,
} from '../../assets';
import {styles} from './styles';
import {Spacer} from '@/theme/Spacer';
import {navigate, goBack} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export function ForgotPassword() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.arrowIconViewStyle}
        onPress={() => goBack()}>
        <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
      </TouchableOpacity>

      <Spacer space={ms(15)} />
      <Text style={styles.headerTitle}>{'Forgot Password'}</Text>
      <Text style={styles.headerSubTitle}>{'Choose Options'}</Text>
      <View style={styles.seprator} />

      <Spacer space={ms(35)} />
      <Image source={ForgotImage} style={styles.bannerImage} />
      <Spacer space={ms(35)} />

      <Text style={styles.bannerText}>
        {'Please select option to reset your password'}
      </Text>
      <Spacer space={ms(30)} />

      <TouchableOpacity
        style={styles.resetView}
        onPress={() => navigate(NAVIGATION.recoverViaEmail)}>
        <View style={styles.innerResetView}>
          <View style={styles.imageView}>
            <Image source={EmailImg} style={styles.emailIcon} />
          </View>

          <View style={styles.marginLeft15}>
            <Text style={styles.resetText}>{'Reset Via Email'}</Text>
            <Text style={styles.linkedDescriptionText}>
              {'Linked with your account'}
            </Text>
          </View>
        </View>

        <View style={styles.rightArrowImageView}>
          <Image source={RightArrow} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.seprateLine} />

      <TouchableOpacity
        style={styles.resetView}
        onPress={() => navigate(NAVIGATION.recoverViaNumber)}>
        <View style={styles.innerResetView}>
          <View style={styles.imageView}>
            <Image source={Phone} style={styles.phoneIcon} />
          </View>
          <View style={styles.marginLeft15}>
            <Text style={styles.resetText}>Reset Via Phone</Text>
            <Text style={styles.linkedDescriptionText}>
              Linked with your account
            </Text>
          </View>
        </View>

        <View style={styles.rightArrowImageView}>
          <Image source={RightArrow} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>

      <Image source={BottomBackground} style={styles.bottomBackgroundImage} />
    </SafeAreaView>
  );
}
