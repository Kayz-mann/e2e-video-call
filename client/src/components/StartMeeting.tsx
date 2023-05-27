import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface MeetingInterface {
    name: string;
    setName: (name: string) => void;
    roomId: string;
    setRoomId: (roomId: string) => void;
    joinRoom: () => void;
}

const StartMeeting: React.FC<MeetingInterface> = ({
    name,
    setName,
    roomId,
    setRoomId,
    joinRoom
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        placeholder='Enter name'
                        placeholderTextColor='#767476'
                        onChangeText={(e) => setName(e)}
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={roomId}
                        placeholder='Enter room ID'
                        placeholderTextColor='#767476'
                        onChangeText={(e) => setRoomId(e)}
                    />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={joinRoom}
                    style={styles.startMeetingButton}
                >
                    <Text style={{ color: 'white', fontWeight: '600' }}>Start Meeting</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
    },
    startMeetingContainer: {

    },
    info: {
        width: '100%',
        backgroundColor: '#373538',
        height: 50,
        borderTopWidth: 1,
        borderColor: '#484648',
        padding: 12,
        justifyContent: 'center'
    },
    textInput: {
        color: 'white',
        fontSize: 18
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4470dc',
        height: 50,
        borderRadius: 15
    }
})