import React, {useCallback, useState} from 'react';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, View} from 'react-native';
import {COLORS} from '@/theme/Colors';
import {ms} from 'react-native-size-matters';
import CustomInput from '@/components/CustomInput';
import {TextInput} from 'react-native-paper';
import {Calendar, creditCard, cvvIcon, smile} from '@/assets';
import {Spacer} from '@/theme/Spacer';
import CustomButton from '@/components/CustomButton';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {useDispatch} from 'react-redux';
import {addCards} from '@/redux/actions/authActions';

export function AddCardDetails(props) {
  const rideData = props?.route?.params?.rideData;
  const bookingDetail = props?.route?.params?.bookingDetail;
  const dispatch = useDispatch();

  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvMasked, setCvvMasked] = useState('');

  const [isFocused, setIsFocused] = useState(false);
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  const [formattedCardNumber, setFormattedCardNumber] = useState('');
  const [cardNumberWithoutSpaces, setCardNumberWithoutSpaces] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const formatCardNumber = useCallback(
    input => {
      // Remove any non-numeric characters from the input
      const numericInput = input.replace(/\D/g, '');

      // Format the card number with spaces every 4 characters
      const formattedInput = numericInput.replace(/(\d{4})(?=\d)/g, '$1 ');

      // Set the formatted card number to the state
      setFormattedCardNumber(formattedInput);

      // Remove spaces and set the card number without spaces to the state
      setCardNumberWithoutSpaces(numericInput);
    },
    [formattedCardNumber, cardNumberWithoutSpaces],
  );

  const cardDetail = {
    card_holder_name: holderName,
    card_number: cardNumberWithoutSpaces,
    expiry_date: expireDate,
    card_cvv: cvv,
  };

  const isValidExpiryDate = date => {
    return expiryDateRegex.test(date);
  };
  // if (isValidExpiryDate(expireDate)) {
  //   console.log('Valid expiry date format');
  // } else {
  //   console.log('Invalid expiry date format');
  // }
  const handleProceedCheckout = () => {
    dispatch(addCards(cardDetail));
    navigate(NAVIGATION.checkout, {
      rideData: rideData,
      bookingDetail: bookingDetail,
      // cardDetail: cardDetail,
    });
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'always'}>
        <View style={{marginVertical: ms(20)}}>
          <Text
            style={{
              fontSize: ms(26),
              fontWeight: '700',
              color: COLORS.black,
              marginHorizontal: ms(20),
            }}>
            {'Add Card details'}
          </Text>

          <Text
            style={{
              marginHorizontal: ms(20),
              fontSize: ms(12),
              fontWeight: '400',
              color: COLORS.skyGray,
              marginTop: ms(10),
            }}>
            {'Add Credit/Debit card here as a payment method.'}
          </Text>

          <Spacer space={ms(20)} />

          <CustomInput
            label={isFocused ? 'Card Holder Name' : ''}
            value={holderName}
            onChangeText={text => setHolderName(text)}
            left={<TextInput.Icon icon={smile} size={20} />}
            placeholder={'Card Holder Name'}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Spacer space={ms(20)} />

          <CustomInput
            label={isFocused ? 'Card Number' : ''}
            value={formattedCardNumber}
            onChangeText={formatCardNumber}
            left={<TextInput.Icon icon={creditCard} size={20} />}
            placeholder={'Card Number'}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={19}
            inputMode="numeric"
          />
          <Spacer space={ms(20)} />

          <View style={{flexDirection: 'row', marginHorizontal: ms(20)}}>
            <CustomInput
              label={isFocused ? ' MM/YY' : ''}
              value={expireDate}
              onChangeText={text => {
                if (/^\d{0,2}\/?\d{0,2}$/.test(text)) {
                  const formattedDate = text
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d{2})/, '$1/$2');
                  setExpireDate(formattedDate);
                }
              }}
              left={<TextInput.Icon icon={Calendar} size={20} />}
              placeholder={'MM/YY'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{flex: 1, marginHorizontal: 0}}
              inputMode="numeric"
            />
            <CustomInput
              label={isFocused ? 'cvv' : ''}
              value={cvvMasked}
              onChangeText={text => {
                const strippedText = text.replace(/\D/g, ''); // Remove non-digit characters
                if (strippedText.length <= 4) {
                  setCvv(text); // Store original CVV
                  setCvvMasked(strippedText.padEnd('*')); // Mask the CVV
                }
              }}
              left={<TextInput.Icon icon={cvvIcon} size={20} />}
              placeholder={'cvv'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{flex: 1, marginHorizontal: 0, marginLeft: ms(10)}}
              inputMode="numeric"
            />
          </View>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', marginBottom: ms(30)}}>
          <CustomButton
            title={'Proceed to Checkout'}
            onPress={handleProceedCheckout}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
