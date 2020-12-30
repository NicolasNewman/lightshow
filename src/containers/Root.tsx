import * as React from 'react';
import { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import Routes from '../Routes';

type Props = {
    store: any;
    history: History<any>;
    monitors: string[];
};

export default class Root extends PureComponent<Props> {
    render() {
        const { store, history, monitors } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routes monitors={monitors} />
                </ConnectedRouter>
            </Provider>
        );
    }
}
