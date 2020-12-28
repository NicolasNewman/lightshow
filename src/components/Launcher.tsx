/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { Component } from 'react';
import { Button } from 'antd';
import DataStore from 'app/classes/DataStore';
import LightSync from '../classes/LightSync';

interface IProps {
    dataStore: DataStore;
    lightsync: LightSync;
    lightSyncRunning: boolean;
    lightSyncArgs: string[];
    start: (lightsync: LightSync) => void;
    stop: (lightsync: LightSync) => void;
}

export default class Launcher extends Component<IProps> {
    props: IProps;

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {
            lightsync,
            lightSyncRunning,
            lightSyncArgs,
            start,
            stop,
        } = this.props;
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        if (!lightSyncRunning) {
                            // lightsync.start(['-vis', 'true']);
                            start(lightsync);
                        } else {
                            // lightsync.stop();
                            stop(lightsync);
                        }
                    }}
                    style={
                        lightSyncRunning
                            ? { backgroundColor: '#F93154' }
                            : { backgroundColor: '#00B74A' }
                    }
                >
                    {lightSyncRunning ? 'Stop' : 'Start'}
                </Button>
            </div>
        );
    }
}
