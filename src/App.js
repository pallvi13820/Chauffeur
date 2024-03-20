import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from '@/navigation';
import {persistor, store} from './redux/store';
import Toast, {BaseToast} from 'react-native-toast-message';
import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {COLORS} from './theme/Colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

enableScreens();

export function App() {
  const toastConfig = {
    success_toast: ({text1, text2, ...rest}) => (
      <BaseToast
        {...rest}
        text1={text1}
        text2={text2}
        text2NumberOfLines={2}
        text2Style={styles.successTextStyle}
        onTrailingIconpress={() => Toast.hide()}
        style={{borderLeftColor: COLORS.green}}
        contentContainerstyle={{paddingHorizontal: ms(15)}}
        // renderTrailingIcon={() => <Image source={Images.success} style={styles.trailingIconStyle} />}
      />
    ),

    error_toast: ({text1, text2, ...rest}) => (
      <BaseToast
        {...rest}
        text1={text1}
        text2={text2}
        text2NumberOfLines={2}
        text2Style={styles.errorTextStyles}
        style={{borderLeftColor: COLORS.red}}
        onTrailingIconpress={() => Toast.hide()}
        contentContainerstyle={{paddingHorizontal: ms(15)}}
        // renderTrailingIcon={() => <Image source={Images.error} style={styles.trailingIconStyle} />}
      />
    ),
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
          <Toast config={toastConfig} />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trailingIconStyle: {
    right: 10,
    width: ms(15),
    height: ms(15),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  successTextStyle: {
    fontSize: ms(14),
    color: COLORS.green,
    fontWeight: '500',
    // fontFamily: Fonts.SemiBold,
  },
  errorTextStyles: {
    fontSize: ms(14),
    color: COLORS.red,
    fontWeight: '500',

    // fontFamily: Fonts.SemiBold,
  },
});
