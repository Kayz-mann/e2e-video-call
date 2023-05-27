import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.container}>
                <Fontisto name="search" size={20} color="#858585" />
                <Text style={styles.textSearch}>Search</Text>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    layout: {
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        width: '95%'
    },
    textSearch: {
        color: '#858585',
        paddingLeft: 10,
        fontSize: 22
    }
})