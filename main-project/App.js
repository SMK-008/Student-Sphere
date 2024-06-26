import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import DashboardScreen from './screens/DashboardScreen';
import EditProfile from './screens/EditProfile';
import ProfileScreen from './screens/ProfileScreen';
import ResetPwd from './screens/resetPwd';
import TaskScreen from './screens/taskscreen';
import UnitScreen from './screens/unitscreen';
import Units from './screens/Units';
import Announcements from './screens/Announcements';
import UnitView from './screens/UnitView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="Profile screen"
          component={ProfileScreen}
          options={{ title: 'Profile screen' }}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{ title: 'Edit profile' }}
        />
        <Stack.Screen
          name="Reset password"
          component={ResetPwd}
          options={{ title: 'Reset password' }}
        />
        <Stack.Screen
          name="Task Screen"
          component={TaskScreen}
          options={{ title: 'Task Screen' }}
        />
        <Stack.Screen
          name="Unit Screen"
          component={UnitScreen}
          options={{ title: 'Unit Screen' }}
        />
        <Stack.Screen
          name="Units"
          component={Units}
          options={{ title: 'Units' }}
        />
        <Stack.Screen
          name="Announcements"
          component={Announcements}
          options={{ title: 'Announcements' }}
        />
        <Stack.Screen
          name="View Unit"
          component={UnitView}
          options={{ title: 'View Unit' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
