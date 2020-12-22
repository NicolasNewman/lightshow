// import Integration from './Integration';
import Logitech from './Logitech';
import { IntegrationName, Integration } from './AbstractIntegration';

export default class IntegrationManager {
    integrations: Integration[];

    private activeIntegrations: { [value: IntegrationName]: Integration };

    constructor() {
        this.integrations = [];
        this.activeIntegrations = {};
        this.integrations.push(new Logitech());
    }

    activate() {
        this.integrations.forEach((integration) => {
            if (integration.automatic) {
                const res = integration.init();
                console.log(
                    `[${integration.name}] is ${res ? 'active' : 'inactive'}`
                );
                if (res) {
                    this.activeIntegrations[integration.name] = integration;
                }
            }
        });
    }

    getActiveIntigrations(): {
        [value: IntegrationName]: Integration;
    } {
        return this.activeIntegrations;
    }

    setColor(r: number, g: number, b: number) {
        this.integrations.forEach((integration) => {
            integration.setColor(r, g, b);
        });
    }
}
