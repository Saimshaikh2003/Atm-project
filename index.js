#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000;
let myPin = 1122;
let pinAnswer = await inquirer_1.default.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
///1122
if (pinAnswer.pin === myPin) {
    console.log("correct  the pin code!!!");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]);
        ///=+, =, =-
        if (amountAns.amount > myBalance) {
            console.log("0");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + -myBalance);
    }
}
else {
    console.log("incorrect the pin number");
}
