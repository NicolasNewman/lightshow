import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import integrations from './integrations';
import lightsync from './lightsync';

export default function createRootReducer(history: History) {
    return combineReducers({
        router: connectRouter(history),
        integrations,
        // lightsync,
    });
}
