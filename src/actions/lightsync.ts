import LightSync from '../classes/LightSync';

export enum LightSyncTypeKeys {
    START = 'START',
    STOP = 'STOP',
    SET_ARGS = 'SET_ARGS',
}

interface Start {
    type: LightSyncTypeKeys.START;
    lightsync: LightSync;
}

interface Stop {
    type: LightSyncTypeKeys.STOP;
    lightsync: LightSync;
}

interface SetArgs {
    type: LightSyncTypeKeys.SET_ARGS;
    args: string[];
}

export type LightSyncTypes = Start | Stop | SetArgs;

export function start(lightsync: LightSync) {
    return {
        type: LightSyncTypeKeys.START,
        lightsync,
    };
}

export function stop(lightsync: LightSync) {
    return {
        type: LightSyncTypeKeys.STOP,
        lightsync,
    };
}

export function setArgs(args: string[]) {
    return {
        type: LightSyncTypeKeys.SET_ARGS,
        args,
    };
}

export default {
    start,
    stop,
    setArgs,
};
