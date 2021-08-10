import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Start from '../screens/Start';


export type Navigators = "Start" | "ContactsScreen"

const RNApp = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: { headerShown: false, gestureEnabled: true },
    },
  },
  {
    initialRouteName: 'Start',
  },
);



export default createAppContainer(RNApp);
