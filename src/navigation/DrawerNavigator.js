import CustomDrawer from '@/components/CustomDrawer';
import {NAVIGATION} from '@/constants';
import {AddCardDetails, Home} from '@/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{headerShown: false}}
        
      />
    </Drawer.Navigator>
  );
}
