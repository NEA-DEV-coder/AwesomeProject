import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './Routes';
import Home from '../Home';
import Profile from '../../Profile/Profile';

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        header: () => null,
        swipeEnabled: true,
        headerShown: false,
      }}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
