import {COLORS} from '@/theme/Colors';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';

const CustomInput = ({
  left,
  right,
  label,
  value,
  onChangeText,
  underlineColor,
  outlineStyle,
  style,
  secureTextEntry,
  placeholder,
  maxLength,
  onFocus,
  onBlur,
  inputMode,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      style={[
        {
          marginHorizontal: ms(20),
          backgroundColor: '#f5f5f5',
          color: '#AEAEAE',
        },
        style,
      ]}
      outlineStyle={{
        ...outlineStyle,
        borderRadius: ms(15),
        borderColor: '#E8E8E8',
        borderWidth: 2,
        backgroundColor: 'transparent',
      }}
      theme={{
        colors: {
          background: 'transparent',
        },
      }}
      underlineColor={underlineColor}
      //   left={<TextInput.Icon icon={leftIcon} size={20} />}
      //   right={<TextInput.Icon icon={rightIcon} size={20} />}
      left={left}
      right={right}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      activeOutlineColor="#AEAEAE"
      maxLength={maxLength}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholderTextColor={'#AEAEAE'}
      inputMode={inputMode}
    />
  );
};

export default CustomInput;
