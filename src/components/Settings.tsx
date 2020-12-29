import * as React from 'react';
import { PureComponent } from 'react';
import DataStore from 'app/classes/DataStore';
import { Row, Col, InputNumber, Checkbox } from 'antd';
import LightSync from '../classes/LightSync';
import getMonitors from '../utils/monitorResolver';

interface IProps {
    dataStore: DataStore;
    lightsync: LightSync;
}

export default class Settings extends PureComponent<IProps> {
    props: IProps;

    constructor(props) {
        super(props);
        getMonitors();
    }

    render() {
        return (
            <div className="h-100p mt-1">
                <Row justify="start" align="middle" gutter={[16, 24]}>
                    <Col flex="50%">
                        <span>--shrinkframesize </span>
                        <InputNumber min={50} max={200} />
                    </Col>
                    <Col flex="50%">
                        <Checkbox>Visualize?</Checkbox>
                    </Col>
                </Row>
                <Row justify="start">
                    <Col flex="50%">
                        <span>--monitor </span>
                        <InputNumber min={0} />
                    </Col>
                </Row>
            </div>
        );
    }
}
