#! /usr/bin/env node

import  inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1122;

let pinAnswer = await inquirer.prompt([{
     name: "pin",
    message: "enter your pin",
    type:"number"
}]);
///1122

if (pinAnswer.pin === myPin) {
    console.log("correct  the pin code!!!")

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw" , "check balance"]
            }
        ]
    );
    console.log(operationAns);
    if (operationAns.operation === "withdraw"){
        let amountAns  = await inquirer.prompt([{
            name: "amount",
            message: "enter your amount",
            type: "number"
        }]);
        ///=+, =, =-
        if ( amountAns.amount > myBalance){
        console.log("0")
        }
        
    }
    
    else if(operationAns.operation === "check balance"){
        console.log("your balance is: " +- myBalance)
    }

    
}
    


else{
    console.log("incorrect the pin number")
}
