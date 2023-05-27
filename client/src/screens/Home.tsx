import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons, { items } from '../components/MenuButtons'
import ContactsMenu, { contactsMenuButtons } from '../components/ContactsMenu'
import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation'

export type RootNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

const Home = () => {
    const navigation = useNavigation<RootNavigationProp>();

    const openMeeting = () => {
        navigation.navigate('Room')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <SearchBar />

            <View>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.button}
                >
                    {items.map((item, index) => (
                        <View key={index}>
                            <MenuButtons
                                id={index}
                                name={item.name}
                                title={item.title}
                                customColor={item.customColor}
                                onPress={openMeeting}
                            />
                        </View>
                    ))}
                </ScrollView>
                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: 15 }}>
                    {contactsMenuButtons.map((item, index) => (
                        <View key={index}>
                            <ContactsMenu
                                type={item.type}
                                name={item.name}
                                photo={item.photo}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15,
        height: '100%',
    },
    button: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,

    }
})