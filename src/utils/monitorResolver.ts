import * as path from 'path';
import { spawn, exec, ChildProcessWithoutNullStreams } from 'child_process';
import kill from 'tree-kill';

export default function getMonitors() {
    console.log('here1');
    return new Promise((resolve, reject) => {
        console.log('here2');
        if (process.env.NODE_ENV === 'production') {
            path = path.join(process.resourcesPath, 'light-sync/');
        } else {
            path = path.join(
                __dirname,
                '..',
                'light-sync',
                'dist',
                'light_sync.exe'
            );
        }
        const lightsync = spawn(path, ['--screens', 'true'], {
            shell: false,
            detached: false,
        });

        lightsync.stdout.on('data', (data) => {
            try {
                let str: string = data.toString();
                console.log(str);
                if (str.contains('[')) {
                    // str = str.replace(/^[^\[]*/, '');
                    str = str.replace(/\t|\[|\]|\n/, '');
                    console.log(str);
                }
            } catch (e) {
                reject(new Error('Error fetching screens'));
            }
        });

        lightsync.stdout.on('close', (code) => {
            console.log(`[screen-resolver] closed with code ${code}`);
            resolve('success');
        });

        lightsync.stderr.on('data', (data) => {
            console.error(data.toString());
        });
    });
}
