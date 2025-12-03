const fs = require("fs");

const input = fs.readFileSync("input.txt", encoding = "utf-8").split("\n");

function move_dial() {
    let count_zeroes = 0;
    let dial = 50;

    for(let i = 0; i < input.length; i++) {
        if(!input[i]) continue;

        let rotation = input[i];
        let shift = parseInt(rotation.substring(1)) % 100;

        let direction = rotation[0];

        if(direction == "L") {
            dial = (dial - shift + 100) % 100;
            
        } else if(direction == "R") {
            dial = (dial + shift + 100) % 100;
        }

        if(dial == 0) {
            count_zeroes++;
        }

    }
    
    return console.log(count_zeroes);
}


move_dial();