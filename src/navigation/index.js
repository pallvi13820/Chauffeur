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

export function RootNavigator() {
  const user = useSelector(state => state?.auth?.user);
  const token = user?.data?.auth_token;
  const scheme = useColorScheme();

  const [isAuthorized, setIsAuthorized] = useState(false);
console.log("fdfdlhfd", token)
  useEffect(() => {
    if (token) {
      // console.log(token, 'tk');
      HttpClient.setAuthorization(token);
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [token]);

  return (
    <NavigationContainer theme={theme[scheme]} ref={navigationRef}>
      {isAuthorized ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
