import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, ms} from 'react-native-size-matters';

const CustomButton = ({title, onPress}) => {
  return (
    <LinearGradient
      colors={['rgba(22, 22, 200, 1)', 'rgba(0, 0, 139, 1)']}
      style={styles.buttonGradientStyle}>
      <TouchableOpacity onPress={onPress} style={styles.buttonView}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  buttonView: {
    width: ms(174),
    alignSelf: 'center',
    height: ms(58),
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: "center"
  },
  buttonGradientStyle: {
    marginTop: ms(20),
    alignItems: 'center',
    borderRadius: ms(20),
    width: ms(174),
    alignSelf: 'center',
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: 'white',
    fontSize: ms(16),
    fontWeight: '500',
  },
});
