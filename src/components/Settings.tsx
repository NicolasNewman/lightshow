import * as React from 'react';
import { PureComponent } from 'react';
import DataStore from 'app/classes/DataStore';
import { Row, Col, InputNumber, Checkbox, Select } from 'antd';
import hash from 'object-hash';
import LightSync from '../classes/LightSync';

const { Option } = Select;

interface IProps {
    dataStore: DataStore;
    lightsync: LightSync;
    monitors: string[];
}

export default class Settings extends PureComponent<IProps> {
    props: IProps;

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { monitors } = this.props;
        return (
            <div className="h-100p mt-1 settings">
                <Row justify="start" align="middle" gutter={[16, 24]}>
                    <Col flex="50%">
                        <span>--shrinkframesize </span>
                        <InputNumber min={50} max={200} />
                    </Col>
                    <Col flex="50%">
                        <Checkbox>--visualize</Checkbox>
                    </Col>
                </Row>
                <Row justify="start">
                    <Col flex="50%">
                        <span>--monitor </span>
                        <Select>
                            {monitors.map((monitor, i) => (
                                <Option key={hash(monitor)} value={i}>
                                    {monitor}
                                </Option>
                            ))}
                        </Select>
                        {/* <InputNumber min={0} /> */}
                    </Col>
                </Row>
            </div>
        );
    }
}
