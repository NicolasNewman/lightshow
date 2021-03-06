import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Tabs } from 'antd';
// import { Redirect } from 'react-router';
import DataStore from '../classes/DataStore';
import Launcher from './Launcher';
import Integrations from './Integrations';
import Settings from './Settings';
import IntegrationManager from '../integrations/IntegrationManager';
import { Integration } from '../integrations/AbstractIntegration';
import LightSync from '../classes/LightSync';
// import { initialize } from '../actions/integrations';
// import routes from '../constants/routes';

const { TabPane } = Tabs;

interface IProps extends RouteComponentProps<any> {
    dataStore: DataStore;
    lightsync: LightSync;
    monitors: string[];
    // integrations props
    integrationManager: IntegrationManager;
    activeIntegrations: Integration[];
    initialized: boolean;
    initialize: () => void;
    // lightsync props
    // lightSyncRunning: boolean;
    // lightSyncArgs: string[];
    // start: (lightsync: LightSync) => void;
    // stop: (lightsync: LightSync) => void;
    // setArgs: (args: string[]) => void;
}

export default class Home extends Component<IProps> {
    props: IProps;

    constructor(props, history) {
        super(props);
    }

    componentDidMount() {
        const {
            initialized,
            initialize,
            lightsync,
            integrationManager,
        } = this.props;
        if (!initialized) {
            console.log('Initializing integrations...');
            initialize();
            lightsync.connectSetColor(integrationManager.setColor);
        }
    }

    toPage(route: string, e) {
        const { history } = this.props;
        history.push(route);
    }

    render() {
        const {
            dataStore,
            lightsync,
            monitors,
            integrationManager,
            activeIntegrations,
            // lightSyncRunning,
            // lightSyncArgs,
            // start,
            // stop,
        } = this.props;
        // if (this.state.toHome) {
        //     return <Redirect to="/home" />;
        // }
        return (
            <div>
                <Tabs tabPosition="left">
                    <TabPane tab="Home" key="home">
                        <Launcher
                            dataStore={dataStore}
                            lightsync={lightsync}
                            // lightSyncRunning={lightSyncRunning}
                            // lightSyncArgs={lightSyncArgs}
                            // start={start}
                            // stop={stop}
                        />
                    </TabPane>
                    <TabPane tab="Integration" key="integration">
                        <Integrations
                            dataStore={dataStore}
                            integrationManager={integrationManager}
                            activeIntegrations={activeIntegrations}
                        />
                    </TabPane>
                    <TabPane tab="Settings" key="settings">
                        <Settings dataStore={dataStore} monitors={monitors} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
