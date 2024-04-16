const fs = require('fs');

require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  production: ${process.env.isProd},
  ANGULAR_BP_API_URL: '${process.env.ANGULAR_BP_API_URL}'
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output generated at ${targetPath}`);
});
