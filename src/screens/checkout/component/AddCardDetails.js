import React, {useState} from 'react';
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

export function AddCardDetails(props) {
  console.log('dfkhdfh', props?.route?.params);
  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const formatCardNumber = (input) => {
    // Remove any non-numeric characters from the input
    const numericInput = input.replace(/\D/g, '');

    // Format the card number with spaces every 4 characters
    const formattedInput = numericInput.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Set the formatted card number to the state
    setCardNumber(formattedInput);
  };
  console.log("kjdhfkdhfkg", cardNumber)
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
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
            value={cardNumber}
            onChangeText={formatCardNumber}
            left={<TextInput.Icon icon={creditCard} size={20} />}
            placeholder={'Card Number'}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={19}
          />
          <Spacer space={ms(20)} />

          <View style={{flexDirection: 'row', marginHorizontal: ms(20)}}>
            <CustomInput
              label={isFocused ? ' MM/YY' : ''}
              value={holderName}
              onChangeText={text => setHolderName(text)}
              left={<TextInput.Icon icon={Calendar} size={20} />}
              placeholder={'MM/YY'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{flex: 1, marginHorizontal: 0}}
            />
            <CustomInput
              label={isFocused ? 'cvv' : ''}
              value={holderName}
              onChangeText={text => setHolderName(text)}
              left={<TextInput.Icon icon={cvvIcon} size={20} />}
              placeholder={'cvv'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{flex: 1, marginHorizontal: 0, marginLeft: ms(10)}}
            />
          </View>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', marginBottom: ms(30)}}>
          <CustomButton
            title={'Proceed to checkout'}
            // onPress={() => navigate(NAVIGATION.addCardDetails)}
            // loading={isLoading}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
