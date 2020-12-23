import * as path from 'path';
import { spawn, exec, ChildProcessWithoutNullStreams } from 'child_process';
import kill from 'tree-kill';

export default class LightSync {
    private path: string;

    private lightsync: ChildProcessWithoutNullStreams | null;

    private color: { r: number; g: number; b: number; brightness: number };

    private isRunning: boolean;

    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.path = path.join(process.resourcesPath, 'light-sync/');
        } else {
            this.path = path.join(
                __dirname,
                '..',
                'light-sync',
                'dist',
                'light_sync.exe'
            );
        }
        this.isRunning = false;
    }

    start(args: string[]) {
        if (!this.isRunning) {
            this.lightsync = spawn(this.path, args, {
                shell: false,
                detached: false,
            });
            this.isRunning = true;

            this.lightsync.stdout.on('data', (data) => {
                console.log(`[light-sync] Received data: ${data.toString()}`);
                this.color = JSON.parse(data.toString());
            });

            this.lightsync.stdout.on('close', (code) => {
                console.log(`[light-sync] closed with code ${code}`);
                this.isRunning = false;
            });

            this.lightsync.stderr.on('data', (data) => {
                console.error(data.toString());
            });
        }
    }

    stop() {
        if (this.isRunning && this.lightsync) {
            // console.log('kill');
            // this.lightsync.kill('SIGINT');
            kill(this.lightsync.pid);
            this.isRunning = false;
        }
    }

    getColor() {
        return this.color;
    }
}
