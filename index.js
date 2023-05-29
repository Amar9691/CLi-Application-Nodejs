const { program } = require('commander');
const { feature } = require('./feature');

program
    .option('math')
    .option('--operation <string>')
    .option('--firstnumber <number>')
    .option('--secondnumber <number>')

program.parse(process.argv);

const options = program.opts();
var output = 0;
switch (options.operation) {
    case '+':
        output = feature.add(options.firstnumber, options.secondnumber);
        console.log("Output = " + output);
        break;
    case '-':
        output = feature.sub(options.firstnumber, options.secondnumber);
        console.log("Output = " + output);
        break;
    case '*':
        output = feature.mul(options.firstnumber, options.secondnumber);
        console.log("Output = " + output);
        break;
    case '/':
        output = feature.div(options.firstnumber, options.secondnumber);
        console.log("Output = " + output);
        break;
    case '**':
        output = feature.power(options.firstnumber, options.secondnumber);
        console.log("Output = " + output);
        break;
    default:
        console.log("Invalid Command");
        break

}
