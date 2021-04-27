import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../styles/colors'

const HeaderCus = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default HeaderCus

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: colors.main,
    },
    hearder: {
        marginTop: 10
    }
})
