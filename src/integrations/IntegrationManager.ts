// import Integration from './Integration';
import Logitech from './Logitech';
import Corsair from './Corsair';
import { IntegrationName, Integration } from './AbstractIntegration';

export default class IntegrationManager {
    integrations: Integration[];

    private activeIntegrations: { [value: IntegrationName]: Integration };

    private activeIntegrationKeys: IntegrationName;

    private activeIntegrationValues: Integration[];

    constructor() {
        this.integrations = [];
        this.activeIntegrations = {};
        this.integrations.push(new Logitech());
        this.integrations.push(new Corsair());
    }

    activate() {
        this.integrations.forEach((integration) => {
            if (integration.automatic) {
                const res = integration.init();
                console.log(
                    `[${integration.name}] is ${res ? 'active' : 'inactive'}`
                );
                if (res) {
                    console.log(this.activeIntegrations);
                    this.activeIntegrations[integration.name] = integration;
                    console.log(this.activeIntegrations);
                }
            }
        });
        this.activeIntegrationKeys = Object.keys(
            this.activeIntegrations
        ) as IntegrationName;
        this.activeIntegrationValues = Object.values(
            this.activeIntegrations
        ) as Integration[];
    }

    getActiveIntigrations(): {
        [value: IntegrationName]: Integration;
    } {
        return this.activeIntegrations;
    }

    setColor = (r: number, g: number, b: number) => {
        console.log('Setting color');
        console.log(this.activeIntegrations);
        this.activeIntegrationValues.forEach((integration) => {
            console.log(integration);
            console.log(integration.setColor);
            const result = integration.setColor(r, g, b);
            console.log(result);
        });
    };
}
