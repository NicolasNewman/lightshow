export enum IntegrationTypeKeys {
    INITIALIZE = 'INITIALIZE',
}

interface Initialize {
    type: IntegrationTypeKeys.INITIALIZE;
}

export type IntegrationTypes = Initialize;

export function initialize() {
    return {
        type: IntegrationTypeKeys.INITIALIZE,
    };
}

export default {
    initialize,
};
