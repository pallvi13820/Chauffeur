import React from 'react';
import {NAVIGATION} from '@/constants';
import {
  AddCardDetails,
  AddNewCard,
  Booking,
  ChangePassword,
  Checkout,
  ChooseVehicle,
  DeleteAccountBottomSheet,
  EditInfo,
  Home,
  InvoiceDetail,
  PaymentMethod,
  PersonalInfo,
  PrivacyPolicy,
  TermConditions,
} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.home}>
      <Stack.Screen
        component={DrawerNavigator}
        name={'Home '}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChooseVehicle}
        name={NAVIGATION.chooseVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Booking}
        name={NAVIGATION.booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Checkout}
        name={NAVIGATION.checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AddCardDetails}
        name={NAVIGATION.addCardDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={InvoiceDetail}
        name={NAVIGATION.invoiceDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PersonalInfo}
        name={NAVIGATION.personalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={EditInfo}
        name={NAVIGATION.editInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AddNewCard}
        name={NAVIGATION.addNewCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={TermConditions}
        name={NAVIGATION.termConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PrivacyPolicy}
        name={NAVIGATION.privacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChangePassword}
        name={NAVIGATION.changePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DeleteAccountBottomSheet}
        name={NAVIGATION.deleteAccountBottomSheet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PaymentMethod}
        name={NAVIGATION.paymentMethod}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
