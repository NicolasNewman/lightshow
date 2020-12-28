import * as sdk from 'cue-sdk';
import { Integration } from './AbstractIntegration';

export default class Corsair extends Integration {
    leds: { ledId: number; r: number; g: number; b: number }[][];

    constructor() {
        super('CORSAIR', true);
    }

    private getAvailableLeds() {
        const leds = [];
        const deviceCount = sdk.CorsairGetDeviceCount();
        for (let di = 0; di < deviceCount; ++di) {
            console.log(sdk.CorsairGetDeviceInfo(di));
            const ledPositions = sdk.CorsairGetLedPositionsByDeviceIndex(di);
            leds.push(
                ledPositions.map((p) => ({ ledId: p.ledId, r: 0, g: 0, b: 0 }))
            );
        }
        console.log(leds);

        this.leds = leds;
    }

    init() {
        const details = sdk.CorsairPerformProtocolHandshake();
        const errCode = sdk.CorsairGetLastError();
        const success = errCode === 0;
        if (success) {
            this.getAvailableLeds();
        }
        return success && this.leds.length > 0;
    }

    setColor(r: number, g: number, b: number) {
        console.log('Corsair setting color');
        for (let di = 0; di < this.leds.length; di++) {
            const deviceLeds = this.leds[di];
            deviceLeds.forEach((led) => {
                led.r = r;
                led.g = g;
                led.b = b;
            });

            sdk.CorsairSetLedsColorsBufferByDeviceIndex(di, deviceLeds);
        }
        sdk.CorsairSetLedsColorsFlushBuffer();
    }
}
