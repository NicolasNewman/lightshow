// fs = require('fs');nodejs
// fs.writeFile('light-sync/.env', data, [encoding], [callback])
import commandExists from 'command-exists';
import chalk from 'chalk';

if (!commandExists.sync('python')) {
    console.log(
        chalk.whiteBright.bgRed.bold(
            `python is not detected as being installed on this system. The light-sync binary will not be able to be compiled`
        )
    );
    process.exit(2);
}

if (!commandExists.sync('pip')) {
    console.log(
        chalk.whiteBright.bgRed.bold(
            `pip is not detected as being installed on this system. The light-sync binary will not be able to be compiled`
        )
    );
    process.exit(2);
}

if (!commandExists.sync('pipenv')) {
    console.log(
        chalk.whiteBright.bgRed.bold(
            `pipenv is not detected as being installed on this system. The light-sync binary will not be able to be compiled`
        )
    );
    process.exit(2);
}
