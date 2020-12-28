import LogitechSDK from 'logitech-led';
import { Integration } from './AbstractIntegration';

export default class Logitech extends Integration {
    constructor() {
        super('LOGITECH', true);
    }

    shift(n: number) {
        return Math.round((n / 255) * 100);
    }

    init() {
        this.enabled = LogitechSDK.LogiLedInit();
        return this.enabled;
    }

    setColor(r: number, g: numberm, b: number) {
        console.log(`Setting color to ${this.shift(r)}`);
        return LogitechSDK.LogiLedSetLighting(
            this.shift(r),
            this.shift(g),
            this.shift(b)
        );
    }
}
