import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch, Appearance } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import HeaderCus from '../../components/HeaderCus'
import colors from '../../styles/colors';
import images from '../../assets';
import { useTheme } from '@react-navigation/native';
import Utils from '../../app/Utils';
const index = () => {
    const data = [
        {
            id: 0,
            name: 'Ngôn ngữ',
            image: images.language
        },
        {
            id: 1,
            name: 'Font chữ',
            image: images.icFont
        },
        {
            id: 2,
            name: 'Chủ đề',
            image: images.color
        }
    ]

    const _openModal = (value) => {
        value.id == 0 ? Utils.goscreen('MessageBox', {
            Title: 'Thông báo',
            Content: 'Bạn chọn ngôn ngữ này!',
            Cancle: 'Huỷ', Ok: 'Ok',
            onOk: () => alert(1)
        })
            : null
        value.id == 1 ? alert('Chưa') : null
        value.id == 2 ? Utils.goscreen('Modal_Color') : null
    }

    return (
        <View style={styles.container}>
            <HeaderCus
                Title={'Settings'}
                iconLeftHide={false}
                iconRightHide={false}
            />
            <View style={styles.content}>
                {data.map((value, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => _openModal(value)}
                                style={[styles.button, { backgroundColor: colors.card }]}>
                                <Image source={value.image} style={{ width: 20, height: 20, marginRight: 5 }} />
                                <Text style={[styles.Text, { color: colors.text }]}>{value.name}</Text>
                                <Image source={images.icNext} style={{ width: 10, height: 10, }} />
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}


const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps, actions, null, { forwardRef: true })(index);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
    },
    button: {
        height: 45,
        alignSelf: 'center',
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    Brightness: {
        backgroundColor: 'white',
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    Text: {
        color: colors.colorText,
        flex: 1
    },
    line: {
        width: '90%', height: 1, backgroundColor: '#D8D8D8', alignSelf: 'flex-end'
    }

})
