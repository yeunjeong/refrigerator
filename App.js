import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommunityScreen from './screens/CommunityScreen.js';
import NotificationScreen from './screens/NotificationScreen.js';
import UserUserInfoScreen from './screens/UserInfoScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Community" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="UserInfo" component={UserUserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
