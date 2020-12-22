import * as React from 'react';
import { PureComponent } from 'react';
import DataStore from 'app/classes/DataStore';
import IntigrationManager from '../integrations/IntegrationManager';

interface IProps {
    dataStore: DataStore;
    integrationManager: IntigrationManager;
}

export default class Integrations extends PureComponent<IProps> {
    props: IProps;

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}
