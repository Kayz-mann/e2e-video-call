import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MeetingRoom from '../screens/MeetingRoom';

export type RootStackParamList = {
    Home: undefined;
    Room: undefined;
}

const Navigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Room" component={MeetingRoom}
                    options={{
                        title: 'Start a Meeting',
                        headerStyle: {
                            backgroundColor: '#1c1c1c'
                        },
                        headerTintColor: 'white'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation