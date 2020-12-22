export type IntegrationName = 'LOGITECH' | 'HUE' | 'CORSAIR';

export abstract class Integration {
    enabled: boolean;

    name: string;

    automatic: boolean;

    constructor(name: IntegrationName, automatic: boolean) {
        this.enabled = false;
        this.name = name;
        this.automatic = automatic;
    }

    abstract init(): boolean;

    abstract setColor(r: number, g: number, b: number);
}
