import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  Airplane,
  City,
  LeftBlackArrow,
  Seprator,
  TrackingMap,
  bag,
  clock,
  information,
  leaf,
  user,
  wifi,
} from '@/assets';
import CustomButton from '@/components/CustomButton';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {goBack} from '@/navigation/NavigationRef';
import {COLORS} from '@/theme/Colors';
import {Spacer} from '@/theme/Spacer';
import {getRidePrice} from '@/redux/actions/authActions';
import {useSelector} from 'react-redux';

export function ChooseVehicle() {
  const rideRates = useSelector(state => state?.user?.ridePrice?.data);

  const vehicleDetail = [
    {
      id: 5,
      image: user,
      title: '3-4 Passengers',
    },
    {
      id: 6,
      image: wifi,
      title: 'Free WiFi',
    },
    {
      id: 7,
      image: bag,
      title: '2-3 Bags',
    },
    {
      id: 8,
      image: clock,
      title: 'Meet & Greet',
    },
    {
      id: 9,
      image: clock,
      title: '60 Min Free Airport Waiting',
    },
    {
      id: 10,
      image: leaf,
      title: 'Eco-friendly',
    },
  ];

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        alignItems: '#00008B',
        padding: ms(10),
        borderColor: 'blue',
        borderWidth: 1,
        marginHorizontal: ms(10),
        justifyContent: 'center',
        // height: ms(110),
        borderRadius: ms(15),
        paddingHorizontal: ms(20),
        alignItems: 'center',
      }}
      onPress={item?.onPress}>
      <Image
        source={{uri: item?.file_src}}
        resizeMode="contain"
        style={{height: ms(46), width: ms(88)}}
      />
      <Text
        style={{
          fontSize: ms(14),
          fontWeight: '600',
          color: COLORS.black,
          marginTop: ms(5),
        }}>
        {item?.ride_price}
      </Text>
      <Text
        style={{
          fontSize: ms(10),
          fontWeight: '500',
          color: COLORS.skyGray,
        }}>
        {item?.category_name}
      </Text>
    </TouchableOpacity>
  );

  const renderVehilceItem = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: ms(10),
        marginVertical: ms(5),
        alignItems: 'center',
      }}>
      <Image
        source={item?.image}
        style={{height: ms(16), width: ms(16), resizeMode: 'contain'}}
      />
      <Text
        style={{
          marginLeft: ms(15),
          fontSize: ms(14),
          color: '#676767',
          fontWeight: '400',
          textAlign: 'center',
        }}>
        {item?.title}
      </Text>
    </View>
  );

  return (
    <ScreenWrapper>
      <View>
        <Image
          source={TrackingMap}
          style={{height: ms(240), width: '100%', resizeMode: 'stretch'}}
        />

        <TouchableOpacity
          style={styles.arrowIconViewStyle}
          onPress={() => goBack()}>
          <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: ms(30),
          borderTopRightRadius: ms(30),
        }}>
        <Spacer space={ms(20)} />
        <Text
          style={{
            fontSize: ms(18),
            color: COLORS.black,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {'Choose a Vehicle Class'}
        </Text>
        <Spacer space={ms(20)} />
        <View>
          <FlatList
            data={rideRates?.categories_rates || []}
            horizontal
            renderItem={renderItem}
            style={{marginHorizontal: ms(10)}}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Spacer space={ms(15)} />

        <Text
          style={{
            fontSize: ms(12),
            color: '#676767',
            fontWeight: '500',
            textAlign: 'center',
            letterSpacing: 1,
          }}>
          {'Mercedes E Class or similar'}
        </Text>

        <View style={{alignItems: 'center', marginVertical: ms(10)}}>
          <Image
            source={Seprator}
            style={{
              // width: ms(190),
              resizeMode: 'stretch',
              width: '90%',
            }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={vehicleDetail}
            renderItem={renderVehilceItem}
            style={{marginHorizontal: ms(10)}}
            showsHorizontalScrollIndicator={false}
          />

          <View
            style={{
              flexDirection: 'row',
              marginVertical: ms(5),
              alignItems: 'center',
              marginRight: ms(20),
              alignSelf: 'flex-end',
            }}>
            <Image
              source={information}
              style={{height: ms(16), width: ms(16), resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: ms(15),
                fontSize: ms(12),
                color: COLORS.black,
                fontWeight: '500',
                textAlign: 'center',
                letterSpacing: 1,
              }}>
              {'Read More'}
            </Text>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: ms(10)}}>
          <Image
            source={Seprator}
            style={{
              // width: ms(190),
              resizeMode: 'stretch',
              width: '90%',
            }}
          />
        </View>

        <CustomButton
          title={'Continue'}
          // onPress={() => navigate(NAVIGATION.chooseVehicle)}
        />
      </View>
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
    // marginTop: ms(25),
    position: 'absolute',
    top: ms(25),
    left: ms(25),
  },
  arrowIconStyle: {
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
  },
});
