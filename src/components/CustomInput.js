import React from 'react';
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
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      style={{...style, marginHorizontal: ms(20)}}
      outlineStyle={{
        ...outlineStyle,
        borderRadius: ms(15),
        borderColor: '#E8E8E8',
        borderWidth: 2,
      }}
      underlineColor={underlineColor}
      //   left={<TextInput.Icon icon={leftIcon} size={20} />}
      //   right={<TextInput.Icon icon={rightIcon} size={20} />}
      left={left}
      right={right}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      activeOutlineColor="#AEAEAE"
    />
  );
};

export default CustomInput;
