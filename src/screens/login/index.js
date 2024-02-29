import React, {useEffect, useState} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Spacer} from '@/theme/Spacer';
import LoginComponent from '@/components/LoginComponent';
import SignUpComponent from '@/components/SignUpComponent';
import {BottomBackground, Logo} from '@/assets';
import {useIsFocused} from '@react-navigation/native';
import {COLORS} from '@/theme/Colors';

export function Login() {
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState(0);

  const loginButton = {
    backgroundColor: activeTab === 0 ? '#0F0F0F' : '#E8E8E8',
  };
  const signUpButton = {
    backgroundColor: activeTab === 1 ? '#0F0F0F' : '#E8E8E8',
  };
  const loginText = {
    color: activeTab === 0 ? '#fff' : '#0F0F0F',
  };
  const signupText = {
    color: activeTab == 1 ? '#fff' : '#0F0F0F',
  };
  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        StatusBar.setBackgroundColor(COLORS.sky_grey, true);
        StatusBar.setBarStyle('dark-content');
      }, 300);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 0.3}}>
          <Spacer space={ms(25)} />
          <Image source={Logo} style={styles.logoImage} />
          <Spacer space={ms(25)} />

          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(0);
              }}
              style={[styles.tabButton, loginButton]}>
              <Text style={[styles.buttonText, loginText]}>{'Login'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setActiveTab(1);
              }}
              style={[styles.tabButton, signUpButton]}>
              <Text style={[styles.buttonText, signupText]}>{'Sign Up'}</Text>
            </TouchableOpacity>
          </View>

          <Spacer space={ms(25)} />
        </View>

        {activeTab === 0 ? <LoginComponent /> : <SignUpComponent />}

        <View style={{flex: 0.2}}>
          <Image
            source={BottomBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
