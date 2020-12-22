import IntegrationManager from '../integrations/IntegrationManager';

import { IntegrationTypeKeys, IntegrationTypes } from '../actions/integrations';

export interface IInitialState {
    manager: IntegrationManager;
    initialized: boolean;
}

const initialState: IInitialState = {
    manager: new IntegrationManager(),
    initialized: false,
};

export default function integration(
    state = initialState,
    action: IntegrationTypes
) {
    switch (action.type) {
        case IntegrationTypeKeys.INITIALIZE:
            state.manager.activate();
            return {
                manager: state.manager,
                initialized: true,
            };
        default:
            return state;
    }
}
