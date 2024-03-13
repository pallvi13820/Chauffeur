import { COLORS } from '@/theme/Colors';
import {Dimensions, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  mainBackgroundImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  headerBannerImage: {
    width: width,
    height: ms(300),
    resizeMode: 'contain',
  },
  opacityBackgroundImage: {
    width: width,
    height: ms(305),
    resizeMode: 'contain',
  },
  menuView: {
    alignSelf: 'flex-end',
    height: ms(47),
    width: ms(47),
    marginTop: ms(20),
    borderWidth: ms(1),
    justifyContent: 'center',
    borderRadius: ms(14),
    alignItems: 'center',
    marginRight: ms(15),
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  menuIcon: {
    width: ms(22),
    height: ms(15),
    resizeMode: 'contain',
  },
  rideView: {
    position: 'absolute',
    bottom: ms(20),
    left: 0,
    right: 0,
  },
  rideText: {
    fontSize: ms(22),
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  selectionStyle: {
    borderColor: '#727272',
    borderRadius: ms(14),
    borderWidth: 1,
    marginHorizontal: ms(25),
    padding: ms(3),
    alignSelf: 'center',
  },

  transferView: {
    width: width / 3 - ms(25),
    height: ms(75),
    overflow: 'hidden',
    borderRadius: ms(15),
    alignItems: 'center',
    paddingHorizontal: ms(10),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  transportIcon: {
    height: ms(20),
    width: ms(20),
  },
  rideTransferTitle: {
    fontSize: ms(12),
    fontWeight: '400',
    color: COLORS.white,
    textAlign: 'center',
  },
  selectedSeprator: {
    width: ms(2),
    marginVertical: ms(4),
  },
  bottomView: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: ms(25),
    marginVertical: ms(10),
    borderRadius: ms(30),
    marginBottom: ms(25),
    padding: ms(20),
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  tabView: {
    flex: 1,
    padding: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: ms(16),
    color: COLORS.black,
  },

  //pickup

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
  },
  arrowIconStyle: {
    width: ms(21),
    height: ms(21),
    resizeMode: 'contain',
  },
});
