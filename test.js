console.log('Hello World');

var nums = [];

function createNumberFunctions() { 
    for (let i = 0; i < 10; i++) {
        nums[i] = function (j) {
            return i + j;
        };
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));

SLACK_TOKEN=xoxb-244636495000-244564491300-Wwpw98abcdabcdefabcdabcz

let dynamic = window.prompt() // arbitrary user input
eval(`${dynamic} possibly malicious code`);
