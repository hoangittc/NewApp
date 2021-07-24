import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import Utils from '../../app/Utils'
import images from '../../assets'
import colors from '../../styles/colors'
import datacolor from '../../app/datacolor'
import LottieView from 'lottie-react-native';
import * as actions from '../../redux/actions'
import { connect } from 'react-redux';
const modal_color = (props) => {

    const [check, setcheck] = useState(props.data.color.id ? props.data.color.id : 1)

    const _goback = () => {
        Utils.goback()
    }
    useEffect(() => {
        console.log("-------COLO:", props.data)
    }, [])

    const _selected = (item) => {
        setcheck(item.id)
        props.setColor(item)
    }

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => _selected(item)}
                key={index}
                style={[styles.color, { backgroundColor: item.color }]}>
                {check == item.id ?
                    <LottieView source={require('../../assets/lottiefiles/success.json')}
                        style={{ width: 30, height: 30 }}
                        loop={true}
                        autoPlay={true} /> : null}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <TouchableOpacity onPress={_goback} style={styles.touch} >
                    <Image source={images.icBack} style={[styles.img, { tintColor: props.data.color.color ? props.data.color.color : colors.main }]} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 15, color: '#848484' }}>Select Color</Text>
                <View style={styles.box}>
                    <FlatList
                        numColumns={5}
                        data={datacolor.data}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps, actions, null, { forwardRef: true })(modal_color);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.colorModal, justifyContent: 'center', alignItems: 'center' },
    content: { width: '90%', height: '80%', backgroundColor: '#FFF', borderRadius: 10, },
    touch: { marginTop: 10, marginLeft: 10, width: 50, height: 30 },
    img: { width: 26, height: 26 },
    box: { flex: 1, marginHorizontal: 10, marginBottom: 10, marginTop: 10 },
    color: { width: '19%', height: 50, marginRight: 4, borderRadius: 500, marginBottom: 5, justifyContent: 'center', alignItems: 'center' }

})
