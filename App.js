import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommunityScreen from './screens/CommunityScreen.js';
import NotificationScreen from './screens/NotificationScreen.js';
import PostingScreen from './screens/PostingScreen.js';
import PostReadingScreen from './screens/PostReadingScreen.js';
import PostRewritingScreen from './screens/PostRewritingScreen.js';
import ProfileSettingScreen from './screens/ProfileSettingScreen.js';
import RecipeScreen from './screens/RecipeScreen.js';
import UserUserInfoScreen from './screens/UserInfoScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Community" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Posting" component={PostingScreen} />
        <Stack.Screen name="PostReading" component={PostReadingScreen} />
        <Stack.Screen name="PostRewriting" component={PostRewritingScreen} />
        <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="UserInfo" component={UserUserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
