import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import colors from '../styles/colors'
import { connect } from 'react-redux';
import images from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Height } from '../styles/sizes'
import Utils from '../app/Utils';
const HeaderCus = (props) => {

    useEffect(() => {
        console.log("------COLOR:", props.data.color.id)
    }, [])

    return (
        <View style={[styles.container, { height: Platform.OS == 'ios' ? Height(9) : Height(6), backgroundColor: props.data.color.color ? props.data.color.color : '#f44336' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 45, marginHorizontal: 15 }}>
                {!props.iconLeftHide ? <View style={styles.size}></View> :
                    <TouchableOpacity onPress={() => Utils.goback}>
                        <Image source={images.icBack} style={styles.iconLR} />
                    </TouchableOpacity>}
                <Text style={styles.title}>{props.Title}</Text>
                {!props.iconRightHide ? <View style={styles.size}></View> :
                    <TouchableOpacity>
                        <Image source={images.icNext} style={styles.iconLR} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(HeaderCus);

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    hearder: {
        marginTop: 10
    },
    size: { width: 30, height: 30 },
    title: { alignSelf: 'center', fontSize: 20, fontWeight: '300', color: '#FFF' },
    iconLR: { width: 30, height: 30, tintColor: '#FFF' }
})
