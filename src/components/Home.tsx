import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Tabs } from 'antd';
// import { Redirect } from 'react-router';
import DataStore from 'app/classes/DataStore';
import Launcher from './Launcher';
import Integrations from './Integrations';
import Settings from './Settings';
// import routes from '../constants/routes';

const { TabPane } = Tabs;

interface IProps extends RouteComponentProps<any> {
    dataStore: DataStore;
}

export default class Home extends Component<IProps> {
    props: IProps;

    constructor(props, history) {
        super(props);
    }

    toPage(route: string, e) {
        const { history } = this.props;
        history.push(route);
    }

    render() {
        const { dataStore } = this.props;
        // if (this.state.toHome) {
        //     return <Redirect to="/home" />;
        // }
        return (
            <div>
                <Tabs tabPosition="left">
                    <TabPane tab="Home" key="home">
                        <Launcher dataStore={dataStore} />
                    </TabPane>
                    <TabPane tab="Integration" key="integration">
                        <Integrations dataStore={dataStore} />
                    </TabPane>
                    <TabPane tab="Settings" key="settings">
                        <Settings dataStore={dataStore} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
