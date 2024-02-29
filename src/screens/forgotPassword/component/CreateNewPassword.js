import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BottomBackground,
  Eye,
  GrayCircle,
  GreenCircle,
  GreenLine,
  Lock,
  WhiteLine,
} from '../../../assets';
import {styles} from '../styles';
import {ms} from 'react-native-size-matters';
import {TextInput} from 'react-native-paper';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Spacer } from '@/theme/Spacer';

export function CreateNewPassword() {
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 0.9}}>
          <Spacer space={ms(20)} />
          <Text style={styles.headerTitle}>{'Create New'}</Text>
          <Text style={styles.headerSubTitle}>{'Password'}</Text>
          <View style={styles.seprator} />

          <Spacer space={ms(45)} />

          <Text style={styles.bannerText}>
            {'Create strong and secure password that protect your account.'}
          </Text>
          <Spacer space={ms(25)} />

          <CustomInput
            label={'Password'}
            value={password}
            onChangeText={text => setPassword(text)}
            left={<TextInput.Icon icon={Lock} size={20} />}
            right={<TextInput.Icon icon={Eye} size={20} />}
            secureTextEntry
            placeholder={'Password'}
          />

          <Spacer space={ms(25)} />
          <View style={styles.passwordView}>
            <Image source={GreenLine} style={styles.greenLineStyle} />
            <Image source={GreenLine} style={styles.greenLineStyle} />
            <Image source={GreenLine} style={styles.greenLineStyle} />
            <Image source={WhiteLine} style={styles.grayLineStyle} />
            <Text style={styles.strongText}>{'Strong'}</Text>
          </View>
          <Spacer space={ms(15)} />

          <View style={styles.CheckPasswordView}>
            <Image source={GreenCircle} style={styles.checkIcon} />
            <Text style={styles.strongText}>{'at least 6 characters'}</Text>
          </View>
          <Spacer space={ms(10)} />

          <View style={styles.CheckPasswordView}>
            <Image source={GrayCircle} style={styles.checkIcon} />
            <Text style={styles.strongText}>
              {'contain at least one uppercase letter'}
            </Text>
          </View>

          <Spacer space={ms(15)} />
          <CustomButton title={'Reset Password'} />
        </View>
        <View style={{flex: 0.1}}>
          <Image
            source={BottomBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
