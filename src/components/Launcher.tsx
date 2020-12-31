/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { Component } from 'react';
import { Button } from 'antd';
import DataStore from '../classes/DataStore';
import LightSync from '../classes/LightSync';

interface IProps {
    dataStore: DataStore;
    lightsync: LightSync;
    // lightSyncRunning: boolean;
    // lightSyncArgs: string[];
    // start: (lightsync: LightSync) => void;
    // stop: (lightsync: LightSync) => void;
}

interface IState {
    running: boolean;
}

export default class Launcher extends Component<IProps, IState> {
    props: IProps;

    constructor(props) {
        super(props);
        this.state = {
            running: false,
        };
    }

    private buildArgs = () => {
        const { dataStore } = this.props;
        const shrinkframesize = dataStore.get('shrinkframesize');
        const monitor = dataStore.get('monitor');
        const visualize = dataStore.get('visualize');
        // return [
        //     `-z ${shrinkframesize}`,
        //     `-mon ${monitor}`,
        //     `-vis ${visualize}`,
        // ];
        return ['-z', shrinkframesize, '-mon', monitor, '-vis', visualize];
    };

    render() {
        const {
            lightsync,
            // lightSyncRunning,
            // lightSyncArgs,
            // start,
            // stop,
        } = this.props;
        const { running } = this.state;
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        if (!lightsync.getIsRunning()) {
                            lightsync.start(this.buildArgs());
                            this.setState({ running: true });
                            // start(lightsync);
                        } else {
                            lightsync.stop();
                            this.setState({ running: false });
                            // stop(lightsync);
                        }
                    }}
                    style={
                        running
                            ? { backgroundColor: '#F93154' }
                            : { backgroundColor: '#00B74A' }
                    }
                >
                    {running ? 'Stop' : 'Start'}
                </Button>
            </div>
        );
    }
}
