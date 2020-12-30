import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
import DataStore from './classes/DataStore';
import IpcInterface from './classes/IpcInterface';
import sizes from './constants/sizes';
import LightSync from './classes/LightSync';

interface IProps {
    monitors: string[];
}

export default class Routes extends Component<IProps> {
    props: IProps;

    private dataStore: DataStore = new DataStore();

    private lightsync: LightSync = new LightSync();

    render() {
        const { monitors } = this.props;
        return (
            <App>
                <Switch>
                    <Route
                        path={routes.HOME}
                        component={() => {
                            IpcInterface.resizeWindow(
                                sizes.homeWindow.width,
                                sizes.homeWindow.height
                            );
                            return (
                                <HomePage
                                    dataStore={this.dataStore}
                                    lightsync={this.lightsync}
                                    monitors={monitors}
                                />
                            );
                        }}
                    />
                    <Redirect from="/" to="/home" />
                </Switch>
            </App>
        );
    }
}
