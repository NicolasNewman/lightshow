/* eslint-disable no-return-assign */
import * as React from 'react';
import { PureComponent } from 'react';
import {
    Row,
    Col,
    InputNumber,
    Checkbox,
    Select,
    Button,
    Form,
    Tooltip,
} from 'antd';
import hash from 'object-hash';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DataStore from '../classes/DataStore';
import LightSync from '../classes/LightSync';

const { Option } = Select;

interface IProps {
    dataStore: DataStore;
    lightsync: LightSync;
    monitors: string[];
}

interface IFormProps {
    shrinkframesize: number;
    monitor: number;
    visualize: boolean;
}

export default class Settings extends PureComponent<IProps> {
    private props: IProps;

    private shrinkRef: React.RefObject<any> = React.createRef();

    private visRef: React.RefObject<any> = React.createRef();

    private monitorRef: React.RefObject<any> = React.createRef();

    constructor(props) {
        super(props);
    }

    private onFinish = (vals: IFormProps) => {
        const { dataStore } = this.props;
        dataStore.set('shrinkframesize', vals.shrinkframesize);
        dataStore.set('monitor', vals.monitor);
        dataStore.set('visualize', vals.visualize);
    };

    private onFinishFailed(err) {
        console.log(err);
    }

    // private buildInfoTooltip(label: string, tooltip: string) {
    //     return (
    //         <span>
    //             {text}&nbsp;
    //             <Tooltip title={tooltip}>
    //                 <QuestionCircleOutlined />
    //             </Tooltip>
    //         </span>
    //     );
    // }

    render() {
        const { monitors, dataStore } = this.props;
        return (
            <div className="h-100p mt-1 settings">
                <Form
                    name="settings"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    // TODO what if the monitor is no longer connected and doesn't exist?
                    initialValues={{
                        shrinkframesize: dataStore.get('shrinkframesize'),
                        monitor: dataStore.get('monitor'),
                        visualize: dataStore.get('visualize'),
                    }}
                >
                    <Form.Item
                        label={
                            <span>
                                --shrinkframesize&nbsp;
                                <Tooltip
                                    placement="bottom"
                                    title="Scaling factor for the resolution of the screen capture. Smaller images process faster, but have worse accuracy"
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="shrinkframesize"
                    >
                        <InputNumber min={50} max={200} />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                --monitor&nbsp;
                                <Tooltip
                                    placement="bottom"
                                    title="The monitor to capture from. The first is generally all of the screens combined, if using more then 1"
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="monitor"
                    >
                        <Select>
                            {monitors.map((monitor, i) => (
                                <Option key={hash(monitor)} value={i}>
                                    {monitor}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                --visualize&nbsp;
                                <Tooltip
                                    placement="bottom"
                                    title="If checked, opens a companion app for debugging the dominant color algorithm"
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="visualize"
                        valuePropName="checked"
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
