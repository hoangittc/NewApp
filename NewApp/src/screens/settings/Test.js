import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';

const Test = (props) => {
    useEffect(() => {
        console.log("---------:", props.data.language)
    }, [])
    return (
        <View style={styles.container}>
            <Text>{props.data.language}</Text>
        </View>
    )
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(Test);

const styles = StyleSheet.create({
    container: {
        height: 200, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'
    }
})
