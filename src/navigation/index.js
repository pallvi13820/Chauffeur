import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {AuthNavigator} from '@/navigation/AuthNavigator';
import {theme} from '@/theme';
import {navigationRef} from './NavigationRef';
import {HomeNavigator} from './HomeNavigator';
import {HttpClient} from '@/controllers';
// import {selectLoginAuth} from '@/redux/slices/auth';
import SplashScreen from 'react-native-splash-screen';

export function RootNavigator() {
  const verifyUser = useSelector(state => state?.auth?.verifyUser);
  const user = useSelector(state => state?.auth?.user);

  const token = user?.data?.auth_token || verifyUser?.data?.auth_token;
  const scheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    if (token) {
      HttpClient.setAuthorization(token);
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [token, isAuthorized]);

  return (
    <NavigationContainer theme={theme[scheme]} ref={navigationRef}>
      {isAuthorized ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
