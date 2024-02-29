import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {AppNavigator} from '@/navigation/AppNavigator';
import {AuthNavigator} from '@/navigation/AuthNavigator';
import {theme} from '@/theme';
import { navigationRef } from './NavigationRef';
// import {selectLoginAuth} from '@/redux/slices/auth';

export function RootNavigator() {
  const user = useSelector(s => s?.auth?.user)
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={theme[scheme]} ref={navigationRef} >
      {user?.usersInfo ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
