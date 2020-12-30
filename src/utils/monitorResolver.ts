import * as path from 'path';
import { spawn, exec, ChildProcessWithoutNullStreams } from 'child_process';
import kill from 'tree-kill';

export default function getMonitors(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const timeout = (pid) => {
            kill(pid);
            reject(new Error('Error: monitorResolver has timed out'));
        };

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

        const lightsync: ChildProcessWithoutNullStreams = spawn(
            path,
            ['--screens', 'true'],
            {
                shell: false,
                detached: false,
            }
        );

        lightsync.stdout.on('data', (data) => {
            try {
                let str: string = data.toString();
                if (str.includes('[')) {
                    str = str
                        .replaceAll('\n', '')
                        .replaceAll('\t', '')
                        .replace(/(^[^[]*)/, '') // replace everything before the start of the array
                        // .replaceAll(/[0-9]: /g, '') // replace the index indicator for each element
                        .replaceAll('[', '')
                        .replaceAll(']', '')
                        .replaceAll(/,(?! )/g, ''); // replace trailing comma
                    const split = str.split(/,(?= )(?! ') /); // split by commas that seperate array elements, not object fields
                    kill(lightsync.pid);
                    console.log(split);
                    resolve(split);
                }
            } catch (e) {
                reject(new Error(`Error fetching screens: ${e}`));
            }
        });

        // lightsync.stdout.on('close', (code) => {
        //     console.log(`[screen-resolver] closed with code ${code}`);
        //     resolve('success');
        // });

        lightsync.stderr.on('data', (data) => {
            reject(new Error(data.toString()));
        });

        setTimeout(() => timeout(lightsync.pid), 7500);
    });
}
