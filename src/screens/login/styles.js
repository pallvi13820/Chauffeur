import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  logoImage: {
    height: ms(54),
    width: ms(50),
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    height: ms(62),
    backgroundColor: '#E8E8E8',
    marginHorizontal: ms(30),
    alignItems: 'center',
    paddingHorizontal: ms(10),
    borderRadius: ms(21),
    justifyContent: 'center',
  },
  tabButton: {
    height: ms(50),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: ms(17),
    flex: 1,
  },
  buttonText: {
    fontSize: ms(16),
    fontWeight: '600',
  },
  backgroundImage: {
    height: ms(150),
    width: ms(436),
  },

  //verifyOtp
  container: {
    flex: 1,
    paddingHorizontal: ms(20),
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
    width: ms(12),
    height: ms(6),
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
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
    tintColor: '#FFFF',
  },
  addIconView: {
    width: ms(24),
    height: ms(24),
    borderRadius: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DA291C',
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
});
export default styles;
