import React from 'react';
import {NAVIGATION} from '@/constants';
import {
  CreateNewPassword,
  ForgotPassword,
  Login,
  OnBoarding,
  RecoverViaEmail,
  RecoverViaNumber,
  VerifyByEmailCode,
  VerifyByPhoneCode,
  VerifyOtp,
  VerifyPhoneNumber,
} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.onBoarding}>
      <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ForgotPassword}
        name={NAVIGATION.forgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RecoverViaEmail}
        name={NAVIGATION.recoverViaEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RecoverViaNumber}
        name={NAVIGATION.recoverViaNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyByPhoneCode}
        name={NAVIGATION.verifyByPhoneCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyByEmailCode}
        name={NAVIGATION.verifyByEmailCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CreateNewPassword}
        name={NAVIGATION.createNewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyPhoneNumber}
        name={NAVIGATION.verifyPhoneNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyOtp}
        name={NAVIGATION.verifyOtp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
