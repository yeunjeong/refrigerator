import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommunityScreen from './screens/CommunityScreen.js';
import NotificationScreen from './screens/NotificationScreen.js';
import PostingScreen from './screens/PostingScreen.js';
import PostReadingScreen from './screens/PostReadingScreen.js';
import UserUserInfoScreen from './screens/UserInfoScreen.js';
import ProfileSettingScreen from './screens/ProfileSettingScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Community" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Posting" component={PostingScreen} />
        <Stack.Screen name="PostReading" component={PostReadingScreen} />
        <Stack.Screen name="UserInfo" component={UserUserInfoScreen} />
        <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
