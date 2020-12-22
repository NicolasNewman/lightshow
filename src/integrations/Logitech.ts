import LogitechSDK from 'logitech-led';
import { Integration } from './Integration';

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
        return LogitechSDK.LogiLedSetLighting(shift(r), shift(g), shift(b));
    }
}
