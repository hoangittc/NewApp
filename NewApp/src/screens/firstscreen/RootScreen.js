import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Utils from '../../app/Utils'
import LottieView from 'lottie-react-native';

const modal_color = ({ navigation }) => {

    useEffect(() => {
        // console.log("----:", navigation)
        // Utils.goscreen('Home')
        setTimeout(() => {
            // navigation.navigate('Home')
            Utils.replace('TabMain')
        }, 2800)

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <LottieView source={require('../../assets/lottiefiles/firstscreen.json')}
                style={{ flex: 1 }}
                loop={true}
                autoPlay={true} />
        </View>
    )
}

export default modal_color

const styles = StyleSheet.create({})
