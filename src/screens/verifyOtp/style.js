import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const styles = StyleSheet.create({
  //verifyPhoneNumber
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  bannerText: {
    fontSize: ms(14),
    color: '#828282',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: ms(40),
  },

  dropDownImage: {
    width: ms(14),
    height: ms(7),
    resizeMode: 'contain',
  },
  dropDownView: {
    paddingVertical: ms(4),
    paddingHorizontal: ms(2),
  },
  countryText: {
    fontSize: ms(14),
    color: '#828282',
    flex: 1,
    paddingLeft: ms(10),
  },
  addIcon: {
    width: ms(24),
    height: ms(24),
    resizeMode: 'contain',
    borderRadius: ms(8),
  },
  countryPickerView: {
    width: '90%',
    borderWidth: ms(1),
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    padding: ms(18),
    borderRadius: ms(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumberView: {
    width: '90%',
    borderWidth: ms(1),
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    padding: ms(16),
    borderRadius: ms(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumberText: {
    marginLeft: ms(10),
    color: '#828282',
    fontSize: ms(14),
    padding: 0,
    flex: 1,
  },
  backgroundImage: {
    height: ms(150),
    width: ms(436),
  },

  //VerifyOtp
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
    textAlign: 'center',
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
});
export default styles;
