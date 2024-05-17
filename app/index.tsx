import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import People from '../screens/People';
import Spaceships from '../screens/Spaceships';
import Planets from '../screens/Planets';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator initialRouteName='People'>
      <Tab.Screen name='People' component={People} />
      <Tab.Screen name='Spaceships' component={Spaceships} />
      <Tab.Screen name='Planets' component={Planets} />
    </Tab.Navigator>
  );
}
