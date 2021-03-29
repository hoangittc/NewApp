import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Test from './Test'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
const index = (props) => {
    const click = () => {
        console.log("-------this:", props)
        props.setLanguage('600')
    }
    return (
        <View style={styles.container}>
            <Test />
            <Text>Setting</Text>
            <TouchableOpacity onPress={click} style={{ backgroundColor: 'blue', width: 50, height: 50 }}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}


const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps, actions, null, { forwardRef: true })(index);

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
})
