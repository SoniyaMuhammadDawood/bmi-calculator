#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.hex('#FFC0CB')(`\n \t ▂▃▅▇█▓▒░ Welcome to the BMI Calculator!! ░▒▓█▇▅▃▂\n`));
console.log(chalk.bold.hex('#FFC0CB')(`=`.repeat(67), `\n`));
const BmiCalculator = (height, weight) => {
    return weight / (height * height);
};
const main = async () => {
    const answer = await inquirer.prompt([
        {
            name: "height",
            message: "Please enter your height in feet (e.g., 5.9)",
            type: "input",
            validate: (input) => {
                const value = parseFloat(input);
                if (isNaN(value) || value <= 0) {
                    console.log(chalk.red("\nPlease enter a valid height"));
                    return false;
                }
                return true;
            },
        },
        {
            name: "weight",
            type: "input",
            message: "Please enter your weight in kg",
            validate: (input) => {
                const value = parseFloat(input);
                if (isNaN(value) || value <= 0) {
                    console.log(chalk.red("\nPlease enter a valid weight"));
                    return false;
                }
                return true;
            },
        },
    ]);
    const heightInFeet = parseFloat(answer.height);
    const weight = parseFloat(answer.weight);
    // convert height from feet to meters
    const heightInMeters = heightInFeet * 0.3048;
    const bmi = BmiCalculator(heightInMeters, weight);
    console.log(chalk.greenBright(`Your BMI is ${bmi.toFixed(2)}`));
    if (bmi < 18.5) {
        console.log(`You're underweight`);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`You have a normal weight`);
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`You're overweight`);
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        console.log(`You're in obesity class I`);
    }
    else if (bmi >= 35 && bmi <= 39.9) {
        console.log(`You're in obesity class II`);
    }
    else {
        console.log(`You're in obesity class III`);
    }
};
main();
