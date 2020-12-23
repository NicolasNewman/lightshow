import { execSync } from 'child_process';
import chalk from 'chalk';
import { writeFileSync } from 'fs';
import path from 'path';

const lightSyncPath = path.join(__dirname, '..', '..', 'light-sync');
try {
    const venvPath = execSync('pipenv --venv', {
        cwd: lightSyncPath,
    }).toString();

    writeFileSync(path.join(lightSyncPath, '.env'), `PATH=${venvPath}`);
} catch (e) {
    console.log(
        chalk.whiteBright.bgRed.bold(
            `Error obtaining path to the virtual Python environment: ${e}`
        )
    );
}
