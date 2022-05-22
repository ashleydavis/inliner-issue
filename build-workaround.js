//
// A simple build script.
//

const { execSync } = require("child_process");

const cmd = "cat index.html | npx inliner > out/index.html";

console.log(`Invoking "${cmd}"`);

const result = execSync(cmd);

console.log(`Output:`);
console.log(result.toString());

console.log("! Note that ./out/index.html not contains the correct web page!");