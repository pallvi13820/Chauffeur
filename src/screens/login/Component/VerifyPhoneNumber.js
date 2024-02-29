import React from 'react';
import {ms} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Logo, RightArrow} from '@/assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Spacer} from '@/theme/Spacer';
import styles from '../styles';

export function VerifyPhoneNumber() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 0.9}}>
          <Spacer space={ms(20)} />

          <Text style={styles.headerTitle}>{'Verify Phone'}</Text>
          <Text style={styles.headerSubTitle}>{'Number'}</Text>
          <View style={styles.seprator} />
          <Spacer space={ms(35)} />

          <Text style={styles.bannerText}>
            {'Please confirm your country code and enter your phone number.'}
          </Text>

          <Spacer space={ms(35)} />

          <View style={styles.countryPickerView}>
            <View style={styles.addIconView}>
              <Image source={RightArrow} style={styles.addIcon} />
            </View>

            {/* <View
                style={{
                  width: ms(1),
                  height: ms(15),
                  marginHorizontal: ms(8),
                  backgroundColor: '#E6E6E6',
                }}
              /> */}

            <Text style={styles.countryText}>{'Switzerland'}</Text>
            <TouchableOpacity style={styles.dropDownView}>
              <Image source={Logo} style={styles.dropDownImage} />
            </TouchableOpacity>
          </View>
          <Spacer space={ms(35)} />

          <View style={styles.countryPickerView}>
            <Text
              style={{
                fontSize: ms(14),
                color: '#0F0F0F',
              }}>
              +91
            </Text>

            <TextInput
              maxLength={12}
              placeholder={'7850025674'}
              placeholderTextColor={'#828282'}
              keyboardType={'numeric'}
              style={{
                marginLeft: ms(10),
                color: '#828282',

                fontSize: ms(14),
                padding: 0,
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
