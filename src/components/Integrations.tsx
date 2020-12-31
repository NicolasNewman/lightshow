import * as React from 'react';
import { PureComponent } from 'react';
import { List } from 'antd';
import DataStore from '../classes/DataStore';
import IntigrationManager from '../integrations/IntegrationManager';
import { Integration } from '../integrations/AbstractIntegration';

interface IProps {
    dataStore: DataStore;
    integrationManager: IntigrationManager;
    activeIntegrations: Integration[];
}

export default class Integrations extends PureComponent<IProps> {
    props: IProps;

    // constructor(props) {
    //     super(props);
    // }

    renderList(item: Integration, index: number): React.ReactNode {
        return (
            <List.Item>
                <h1>{item.name}</h1>
            </List.Item>
        );
    }

    render() {
        const { integrationManager, activeIntegrations } = this.props;
        return (
            <div className="integrations">
                <List
                    className="integrations__list"
                    itemLayout="horizontal"
                    renderItem={this.renderList}
                    dataSource={activeIntegrations}
                />
            </div>
        );
    }
}
