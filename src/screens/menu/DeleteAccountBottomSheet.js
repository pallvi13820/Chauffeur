import React, {useCallback, useEffect} from 'react';
import {useRef} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserDelete} from '@/assets';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import CustomButton from '@/components/CustomButton';
import {goBack, navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export function DeleteAccountBottomSheet() {
  const bottomSheetRef = useRef(null);

  const handleClosePress = () => goBack();

  return (
    <View style={styles.container}>
      <BottomSheet ref={bottomSheetRef} snapPoints={[320]} index={0}>
        <View style={styles.contentContainer}>
          <Spacer space={ms(20)} />
          <Image
            source={UserDelete}
            style={{height: ms(80), width: ms(80), resizeMode: 'contain'}}
          />
          <Spacer space={ms(20)} />

          <Text
            style={{
              fontSize: ms(20),
              color: COLORS.black,
              fontWeight: '600',
              textAlign: 'center',
              marginHorizontal: ms(60),
            }}>
            {'Are you sure you want to delete your account?'}
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomButton title={'Yes,Delete'} />

            <TouchableOpacity
              style={[styles.resendButtonView, {backgroundColor: '#E6E6E6'}]}
              onPress={handleClosePress}>
              <Text style={[styles.subTitleText, {color: '#000'}]}>
                {'No,Cancel'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff',
  },
  resendButtonView: {
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    width: ms(174),
    height: ms(58),
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ms(20),
    marginLeft: ms(10),
  },
  subTitleText: {
    fontSize: ms(16),
    color: '#828282',
    // marginRight: ms(8),
  },
});
