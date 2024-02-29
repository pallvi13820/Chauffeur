import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(20),
    backgroundColor: '#F5F5F5',
  },
  phoneIcon: {
    width: ms(20),
    heigth: ms(20),
    resizeMode: 'contain',
  },
  seprateLine: {
    borderTopWidth: ms(1),
    marginVertical: ms(25),
    borderColor: '#E6E6E6',
  },
  rightIcon: {
    width: ms(6),
    heigth: ms(12),
    resizeMode: 'contain',
    tintColor: '#FFFF',
  },
  rightArrowImageView: {
    width: ms(28),
    height: ms(26),
    borderRadius: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0F',
  },
  linkedDescriptionText: {
    fontSize: ms(16),
    color: '#828282',
  },
  resetText: {
    fontSize: ms(16),
    color: '#0F0F0F',
    fontWeight: '500',
  },
  marginLeft15: {
    marginLeft: ms(15),
  },
  emailIcon: {
    width: ms(24),
    heigth: ms(24),
    resizeMode: 'contain',
  },
  imageView: {
    width: ms(58),
    height: ms(56),
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
  },
  innerResetView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  resetView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: ms(14),
    color: '#828282',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: ms(40),
  },
  bannerImage: {
    height: ms(152),
    width: ms(150),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  seprator: {
    borderTopWidth: ms(4),
    width: ms(40),
    marginTop: ms(6),
    borderRadius: ms(1.5),
    borderColor: '#0F0F0F',
  },
  headerSubTitle: {
    fontSize: ms(16),
    color: '#0F0F0F',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: ms(30),
    color: '#0F0F0F',
    fontWeight: '500',
  },
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
    marginTop: ms(25),
  },
  arrowIconStyle: {
    width: ms(8),
    heigth: ms(12),
    resizeMode: 'contain',
  },
  bottomBackgroundImage: {
    width: ms(400),
    height: ms(100),
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
  },

  //recover Email

  bannerEmailImage: {
    height: ms(121),
    width: ms(114),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backgroundImage: {
    height: ms(150),
    width: ms(436),
  },

  // verifyByPhoneCode

  cellRoot: {
    backgroundColor: '#fff',
    height: ms(58),
    width: ms(58),
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    marginHorizontal: ms(6),
  },
  cellText: {
    fontSize: ms(15),
    color: 'black',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },

  countText: {
    fontSize: ms(14),
    color: '#828282',
  },
  resendCodeText: {
    fontSize: ms(14),
    color: 'black',
    fontWeight: '500',
    textAlign:"center"
  },
  editIcon: {
    height: ms(12),
    width: ms(12),
    resizeMode: 'contain',
  },
  subTitleText: {
    fontSize: ms(16),
    color: '#828282',
    marginRight: ms(8),
  },
  editTextView: {
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: ms(6),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    alignItems: 'center',
  },
  resendButtonView: {
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    width: ms(174),
    height: ms(58),
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  //createNew Password CSS

  checkIcon: {
    height: ms(20),
    width: ms(20),
    resizeMode: 'contain',
  },
  CheckPasswordView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: ms(25),
  },
  strongText: {
    marginLeft: ms(10),
  },
  grayLineStyle: {
    width: ms(53),
    height: ms(8),
    resizeMode: 'contain',
    tintColor: '#E8E8E8',
  },
  greenLineStyle: {
    width: ms(53),
    height: ms(8),
    resizeMode: 'contain',
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
