import { LightSyncTypeKeys, LightSyncTypes } from '../actions/lightsync';

export interface IInitialState {
    running: boolean;
    args: string[];
}

const initialState: IInitialState = {
    running: false,
    args: [],
};

export default function integration(
    state = initialState,
    action: LightSyncTypes
) {
    switch (action.type) {
        case LightSyncTypeKeys.START:
            return {
                running: true,
                args: state.args,
            };
        case LightSyncTypeKeys.STOP:
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
