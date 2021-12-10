import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateToDoList from '../screens/CreateToDoList';
import CreateNotes from '../screens/CreateNotes';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CreateToDoList') {
            iconName = focused ? 'list' : 'list-outline';
          }
           else if (route.name === 'CreateNotes') {
            iconName = focused ? 'document-text' : 'document-text-outline';
           }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E11584',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateToDoList" component={CreateToDoList} />
      <Tab.Screen name="CreateNotes" component={CreateNotes}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
