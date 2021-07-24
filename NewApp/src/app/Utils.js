
import { NavigationActions } from '@react-navigation/compat';
import { StackActions } from '@react-navigation/native';

var _navigator;
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function goscreen(routeName, params = {}) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        }),
    );
}

async function replace(routeName, params = {}) {
    try {
        _navigator.dispatch(
            StackActions.replace(routeName, params)
        );
    } catch (error) {
        console.log('ERROR:', error);
    }
}

function goback(nthis, routeName = '') {
    _navigator.dispatch(NavigationActions.back());

}

export default {
    setTopLevelNavigator, goscreen, replace, goback
}