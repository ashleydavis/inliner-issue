//
// A simple build script.
//

const { execSync } = require("child_process");

const cmd = "inliner index.html > out/index.html";

console.log(`Invoking ${cmd}`);

const result = execSync(cmd);

console.log(`Output:`);
console.log(result.toString());

console.log("! Note that ./out/index.html is an empty file!");