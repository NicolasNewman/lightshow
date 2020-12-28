import { LightSyncTypeKeys, LightSyncTypes } from '../actions/lightsync';

export interface IInitialState {
    running: boolean;
    args: string[];
}

const initialState: IInitialState = {
    running: false,
    args: ['-vis', 'true'],
};

export default function integration(
    state = initialState,
    action: LightSyncTypes
) {
    switch (action.type) {
        case LightSyncTypeKeys.START:
            action.lightsync.start(state.args);
            return {
                running: true,
                args: state.args,
            };
        case LightSyncTypeKeys.STOP:
            action.lightsync.stop();
            return {
                running: false,
                args: state.args,
            };
        case LightSyncTypeKeys.SET_ARGS:
            return {
                running: state.running,
                args: action.args,
            };
        default:
            return state;
    }
}
