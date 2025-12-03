const fs = require("fs");

const input = fs.readFileSync("input.txt", encoding = "utf-8").split("\n");

function move_dial() {
    let count_zeroes = 0;
    let dial = 50;

    for (let i = 0; i < input.length; i++) {
        let rotation = input[i];
        if (!rotation) continue;

        let raw_shift = parseInt(rotation.substring(1));
        let direction = rotation[0];

        let full_turns = Math.floor(raw_shift / 100);
        count_zeroes += full_turns;

        let leftover_shift = raw_shift % 100;

        if (direction == "L") {
            if (dial !== 0 && leftover_shift >= dial) {
                count_zeroes += 1;
            }

            dial = (dial - raw_shift) % 100;
            if (dial < 0) dial += 100;
            
        } else if (direction == "R") {
            if (dial + leftover_shift >= 100) {
                count_zeroes += 1;
            }

            dial = (dial + raw_shift) % 100;
        }
    }

    console.log(count_zeroes);
}

move_dial();