import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import io from 'socket.io-client';
import Environment from '../shared/Environment';
import Constants from 'expo-constants';
import Pusher from 'pusher-js';
import { PusherEvent } from '@pusher/pusher-websocket-react-native';




const MeetingRoom = () => {
    const [name, setName] = useState<string>('');
    const [roomId, setRoomId] = useState<string>('');


    // // Get the origin of the Expo client
    // const expoClientOrigin = Constants.manifest?.hostUri || Constants.linkingUri;

    // console.log('Expo client origin:', expoClientOrigin);

    // const socket = io("https://81c1-105-112-155-88.ngrok-free.app")

    // const handleJoinRoom = () => {
    //     socket.emit("join-room", {
    //         roomId: roomId,
    //         userName: name,
    //     })
    // }

    // // Handle general errors
    // socket.on("error", (error) => {
    //     console.log("Socket error:", error);
    //     // Handle the error as needed
    // });

    // // Handle connection errors
    // socket.on("connect_error", (error) => {
    //     console.log("Socket connection error:", error);
    //     // Handle the connection error as needed
    // });

    // socket.on('connection', () => console.log('connected'));

    const pusherFunction = async () => {
        const pusher= Pusher.getInstance();

        await pusher.init({
            apiKey: "ed99b616c44e8a1f4aba",
            cluster: "eu"
        });

        await pusher.connect();

        await pusher.subscribe({
            channelName: "my-channel",
            onEvent: (event: PusherEvent) => {
                console.log(`onEvent: ${event}`);
            }
        });

        const onEvent = (event: PusherEvent) => {
            console.log(`onEvent: ${event}`);
        };
    }





    return (
        <View style={styles.container}>
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={pusherFunction}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
    },

})