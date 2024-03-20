import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Calling,
  EmailImg,
  LeftBlackArrow,
  Message,
  globe,
  userIcon,
} from '@/assets';
import {goBack, navigate} from '@/navigation/NavigationRef';
import {ms} from 'react-native-size-matters';
import {Spacer} from '@/theme/Spacer';
import {COLORS} from '@/theme/Colors';
import CustomButton from '@/components/CustomButton';
import { NAVIGATION } from '@/constants';

export function PersonalInfo() {
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, paddingHorizontal: ms(20), marginVertical: ms(25)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.arrowIconViewStyle}
              onPress={() => goBack()}>
              <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
            </TouchableOpacity>

            <Spacer space={ms(15)} />
            <Text style={styles.headerTitle}>{'Your Information'}</Text>
          </View>

          <Spacer space={ms(40)} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: ms(48), width: ms(48), resizeMode: 'contain'}}
              source={userIcon}
            />
            <View style={{marginLeft: ms(15)}}>
              <Text
                style={{
                  fontSize: ms(14),
                  color: COLORS.skyGray,
                  fontWeight: '500',
                }}>
                {'Hey'}
              </Text>
              <Text
                style={{
                  fontSize: ms(26),
                  color: COLORS.black,
                  fontWeight: '600',
                }}>
                {'Johan'}
              </Text>
            </View>
          </View>

          <Spacer space={ms(20)} />

          <View style={styles.resetView}>
            <View style={styles.innerResetView}>
              <Image source={Message} style={styles.emailIcon} />

              <View style={styles.marginLeft15}>
                <Text style={styles.title}>{'Email'}</Text>
                <Text style={styles.linkedDescriptionText}>
                  {'hello758@gmail.com'}
                </Text>
              </View>
            </View>
          </View>

          <Spacer space={ms(20)} />

          <View style={styles.resetView}>
            <View style={styles.innerResetView}>
              <Image source={globe} style={styles.emailIcon} />

              <View style={styles.marginLeft15}>
                <Text style={styles.title}>{'Country'}</Text>
                <Text style={styles.linkedDescriptionText}>
                  {'Switzerland'}
                </Text>
              </View>
            </View>
          </View>

          <Spacer space={ms(20)} />

          <View style={styles.resetView}>
            <View style={styles.innerResetView}>
              <Image source={Calling} style={styles.emailIcon} />

              <View style={styles.marginLeft15}>
                <Text style={styles.title}>{'Phone'}</Text>
                <Text style={styles.linkedDescriptionText}>
                  {'+41 (785)0025674'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <CustomButton title={'Edit Details'} onPress={() => navigate(NAVIGATION.editInfo)}/>
        <Spacer space={ms(20)} />
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
    marginLeft: ms(20),
  },
  emailIcon: {
    width: ms(24),
    height: ms(24),
    resizeMode: 'contain',
  },

  innerResetView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  resetView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: ms(10),
  },

  linkedDescriptionText: {
    fontSize: ms(16),
    color: COLORS.black,
    fontWeight: '500',
  },
  title: {
    fontSize: ms(14),
    color: '#828282',
    fontWeight: '500',
  },
  marginLeft15: {
    marginLeft: ms(15),
  },
});
