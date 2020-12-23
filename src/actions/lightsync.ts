export enum LightSyncTypeKeys {
    START = 'START',
    STOP = 'STOP',
    SET_ARGS = 'SET_ARGS',
}

interface Start {
    type: LightSyncTypeKeys.START;
}

interface Stop {
    type: LightSyncTypeKeys.STOP;
}

interface SetArgs {
    type: LightSyncTypeKeys.SET_ARGS;
    args: string[];
}

export type LightSyncTypes = Start | Stop | SetArgs;

export function start() {
    return {
        type: LightSyncTypeKeys.START,
    };
}

export function stop() {
    return {
        type: LightSyncTypeKeys.STOP,
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
