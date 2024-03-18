import React from 'react';
import {NAVIGATION} from '@/constants';
import {
  AddCardDetails,
  Booking,
  Checkout,
  ChooseVehicle,
  Home,
} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.home}>
      <Stack.Screen
        component={Home}
        name={NAVIGATION.home}
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
    </Stack.Navigator>
  );
}
