import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "orange"
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join"
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen"
    }
]

interface ButtonInterface {
    id: number;
    name: string
    title: string
    customColor: string | undefined;
    onPress: () => void;
}

const MenuButtons: React.FC<ButtonInterface> = ({ name, title, customColor, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <View style={{
                ...styles.button,
                backgroundColor: customColor ?
                    customColor : "#0470dc"

            }}>
                <FontAwesome name={name} size={23} color="#efefef" />
            </View>
            <Text style={styles.menu}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 25,
        paddingBottom: 10,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
    },
    menu: {
        color: "#858585",
        fontSize: 12,
        paddingTop: 10,
        fontWeight: "600"
    }
})