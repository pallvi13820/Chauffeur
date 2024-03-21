import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BlankCard,
  CardType,
  CrossBlack,
  Eye,
  LeftBlackArrow,
  Lock,
  OutlineCircle,
  PaymentCard,
  changePassword,
  deleteIcon,
} from '@/assets';
import {goBack, navigate} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import CustomInput from '@/components/CustomInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '@/components/CustomButton';
import {NAVIGATION} from '@/constants';
import {Circle} from 'react-native-maps';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

export function PaymentMethod() {
  const bottomSheetRef = useRef(null);
  const [animatedIndex, setAnimatedIndex] = useState(2);

  const handleClosePress = () => {
    bottomSheetRef?.current?.close(), setAnimatedIndex(2);
  };

  function formatDebitCardNumber(debitCardNumber) {
    // Convert the number to a string
    const cardNumberString = debitCardNumber?.toString();

    // Get the last 3 digits
    const lastThreeDigits = cardNumberString?.slice(-4);

    // Create a masked string with dots
    const maskedString =
      '*'.repeat(cardNumberString?.length - 4) + lastThreeDigits;

    return maskedString;
  }

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={-1}
        disappearsOnIndex={2}
        opacity={0.8}
        animatedIndex={{
          value: 0,
        }}
      />
    ),
    [],
  );

  return (
    <ScreenWrapper containerPropStyle={{backgroundColor: 'white'}}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginVertical: ms(25)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: ms(20),
            }}>
            <TouchableOpacity
              style={styles.arrowIconViewStyle}
              onPress={() => goBack()}>
              <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginVertical: ms(25)}}>
            <Image
              source={PaymentCard}
              style={{height: ms(80), width: ms(80), resizeMode: 'contain'}}
            />
            <Spacer space={ms(25)} />

            <Text style={styles.headerTitle}>{'Payment Method'}</Text>
            <Text style={styles.subTitle}>
              {'Choose your payment method with Credit/Debit card here.'}
            </Text>
            <Spacer space={ms(10)} />
          </View>

          <View style={{marginHorizontal: ms(20)}}>
            <ImageBackground
              source={BlankCard}
              style={{
                height: ms(182),
                width: ms(295),
                borderRadius: ms(16),
                overflow: 'hidden',
                paddingHorizontal: ms(20),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: ms(20),
                  alignItems: 'center',
                }}>
                <Image
                  source={CardType}
                  style={{height: ms(25), width: ms(40), resizeMode: 'contain'}}
                />
                <TouchableOpacity
                  style={styles.deleteIconViewStyle}
                  onPress={() => {
                    bottomSheetRef?.current?.expand(), setAnimatedIndex(0);
                  }}>
                  <Image source={deleteIcon} style={styles.deleteIconStyle} />
                </TouchableOpacity>
              </View>
              <Spacer space={ms(35)} />
              <Text
                style={{
                  fontWeight: '400',
                  color: COLORS.white,
                  fontSize: ms(14),
                }}>
                {'**** **** **** 4323'}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: ms(35),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    flex: 1,
                    fontSize: ms(18),
                    fontWeight: '700',
                  }}>
                  {'Agatha Christie'}
                </Text>

                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: ms(12),
                    fontWeight: '500',
                  }}>
                  {'12/25'}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <CustomButton
          title={'Add New Card'}
          onPress={() => navigate(NAVIGATION.addNewCard)}
        />
        <Spacer space={ms(20)} />

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[320]}
          index={-1}
          backdropComponent={animatedIndex === 0 ? renderBackdrop : () => {}}>
          <View style={styles.contentContainer}>
            <Spacer space={ms(20)} />
            <Image
              source={PaymentCard}
              style={{height: ms(80), width: ms(80), resizeMode: 'contain'}}
            />
            <Spacer space={ms(20)} />

            <Text
              style={{
                fontSize: ms(20),
                color: COLORS.black,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              {'Are you sure you want to delete the card details?'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: ms(20),
                flex: 1,
              }}>
              <CustomButton
                title={'Yes,Delete'}
                buttonStyle={{width: ms(140)}}
              />

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
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  arrowIconViewStyle: {
    width: ms(42),
    height: ms(42),
    borderRadius: ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  arrowIconStyle: {
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: ms(26),
    color: '#0F0F0F',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: ms(12),
    color: COLORS.skyGray,
    fontWeight: '500',
    marginTop: ms(5),
    width: '60%',
    textAlign: 'center',
  },
  deleteIconStyle: {
    height: ms(18),
    width: ms(18),
    resizeMode: 'contain',
  },
  deleteIconViewStyle: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,

    position: 'absolute',
    right: ms(0),
    top: ms(0),
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: ms(30),
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
    width: ms(140),
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
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity for the blur effect
  },
});
