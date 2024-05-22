// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import People from '../screens/People';
import Spaceships from '../screens/Spaceships';
import Planets from '../screens/Planets';

const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator initialRouteName='People'>
      <Tab.Screen
        name='People'
        component={People}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='human' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Spaceships'
        component={Spaceships}
        options={{
          tabBarLabel: 'Spaceships',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='rocket-launch'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Planets'
        component={Planets}
        options={{
          tabBarLabel: 'Planets',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='google-earth'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
