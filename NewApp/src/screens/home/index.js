import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
const index = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>

        </View>
    )
}


export default index

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
})
