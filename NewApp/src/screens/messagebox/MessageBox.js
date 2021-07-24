import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import Utils from '../../app/Utils'
import images from '../../assets'
import colors from '../../styles/colors'
import datacolor from '../../app/datacolor'
import LottieView from 'lottie-react-native';
import * as actions from '../../redux/actions'
import { connect } from 'react-redux';
import { Height, Width } from '../../styles/sizes'
const MessageBox = (props) => {
    const { route } = props
    const { Content, Title, Cancle, Ok, onOk } = props.route.params;

    const _goback = () => {
        Utils.goback()
    }

    const _onOk = () => {
        onOk()
        Utils.goback()
    }
    useEffect(() => {
    }, [])

    console.log('--------------MessageBox:111', props)
    console.log('--------------MessageBox:111222', route)

    return (
        <View style={{ backgroundColor: props.data.color.color, width: Width(85), alignSelf: 'center', marginTop: Height(40), borderRadius: 10 }} >
            <View style={{ marginHorizontal: 15, marginVertical: 15, }}>
                <Text style={{ alignSelf: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 17 }}>{Title ? Title : 'Thông báo'}</Text>
                <Text style={{ alignSelf: 'center', color: '#FFF', fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
                    {Content ? Content : 'Bạn có châp nhận hành động này?'}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                    <TouchableOpacity style={styles.button} onPress={() => _goback()}>
                        <Text style={{ color: props.data.color.color }}>{Cancle ? Cancle : 'Từ chối'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => _onOk()} >
                        <Text style={{ color: props.data.color.color }}>{Ok ? Ok : 'Chấp nhận'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps, actions, null, { forwardRef: true })(MessageBox);

const styles = StyleSheet.create({
    button: { backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: Width(30) }
})
