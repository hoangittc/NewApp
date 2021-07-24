import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
// import WS from 'react-native-websocket'
const index = (props) => {
    return (
        <View style={{ flex: 1 }}>
            {/* <WS
                ref={ref => { this.ws = ref }}
                url="wss://camera-rec1.ioc.thinghub.vn/evup/12603_16206…yNTR9.ROrTlRdQqHtjC-jEDKeavHC9-UgNguMH-Y1LB0net9Q"
                onOpen={() => {
                    console.log('Open!')
                    this.ws.send('Hello')
                }}
                onMessage={(e) => console.log("WSS respone E:", e)}
                onError={console.log}
                onClose={console.log}
                reconnect // Will try to reconnect onClose
            /> */}
        </View>
    )
}


export default index

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
})
