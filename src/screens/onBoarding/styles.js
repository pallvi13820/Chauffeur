import {Dimensions, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  skipView: {
    alignSelf: 'center',
    marginTop: ms(20),
  },
  bottomImageView: {
    height: ms(100),
    width: ms(430),
    alignSelf: 'center',
  },
  inActiveIcon: {
    height: ms(10),
    width: ms(10),
    resizeMode: 'contain',
  },
  activeIcon: {
    height: ms(10),
    width: ms(32),
    resizeMode: 'contain',
  },
  activeBarView: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: ms(20),
    flexDirection: 'row',
  },
  backIcon: {
    height: ms(42),
    width: ms(42),
    resizeMode: 'contain',
  },
  backButtonView: {
    margin: ms(10),
    height: ms(42),
    width: ms(42),
    alignItems: 'center',
  },
  headerImageBackGround: {
    height: ms(420),
    width: width,
  },
  subTitle: {
    fontSize: ms(14),
    marginHorizontal: ms(24),
    textAlign: 'center',
    color: '#828282',
    fontWeight: '300',
  },
  title: {
    fontSize: ms(24),
    marginHorizontal: ms(14),
    textAlign: 'center',
    color: '#0F0F0F',
    fontWeight: '600',
  },
  backButtonView: {
    position: 'absolute',
    top: ms(20),
    left: ms(10),
    zIndex: 1,
  },
  backIcon: {
    height: ms(42),
    width: ms(42),
    resizeMode: 'contain',
  },
});
export default styles;
