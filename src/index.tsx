import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.less';
import getMonitors from './utils/monitorResolver';

const store = configureStore();
getMonitors()
    .then((monitors) => {
        return render(
            <Root store={store} history={history} monitors={monitors} />,
            document.getElementById('root')
        );
    })
    .catch((err) => {
        console.error(err);
        return render(
            <Root store={store} history={history} monitors={['1']} />,
            document.getElementById('root')
        );
    });
