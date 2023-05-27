import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export const contactsMenuButtons = [
    {
        id: 1,
        type: "starred"
    },
    {
        id: 2,
        type: "contact",
        name: "Jessy",
        photo: "https://images.pexels.com/photos/6224372/pexels-photo-6224372.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 3,
        type: "contact",
        name: "Greg",
        photo: "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 4,
        type: "contact",
        name: "Sham",
        photo: "https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
]

interface ContactInterface {
    type: string;
    name: string | undefined;
    photo: string | undefined;
}


const ContactsMenu: React.FC<ContactInterface> = ({ type, name, photo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {type === "starred" ? (
                    <View style={styles.starredFlex}>
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#efefef" />

                        </View>
                        <Text style={styles.text}>Starred</Text>
                    </View>
                ) : (
                    <Image source={{ uri: photo }} style={styles.image} />
                )}

                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {},
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    starredFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 15
    }
})