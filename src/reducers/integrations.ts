import IntegrationManager from '../integrations/IntegrationManager';

import { IntegrationTypeKeys, IntegrationTypes } from '../actions/integrations';
import { Integration } from '../integrations/AbstractIntegration';

export interface IInitialState {
    manager: IntegrationManager;
    activeIntegrations: Integration[];
    initialized: boolean;
}

const initialState: IInitialState = {
    manager: new IntegrationManager(),
    activeIntegrations: [],
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
                activeIntegrations: Object.values(
                    state.manager.getActiveIntigrations()
                ) as Integration[],
                initialized: true,
            };
        default:
            return state;
    }
}
