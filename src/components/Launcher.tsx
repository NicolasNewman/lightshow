/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { Component } from 'react';
import DataStore from 'app/classes/DataStore';

interface IProps {
    dataStore: DataStore;
}

export default class Launcher extends Component<IProps> {
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
