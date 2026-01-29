const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf-8").split("\n");
input = input.filter(line => line.trim() !== "");

function find_highest(row, startPos, endPos) {
    let current_highest = -1;
    let new_pos = -1;

    for (let i = startPos; i < endPos; i++) {
        let val = parseInt(row[i]);
        if (val > current_highest) {
            current_highest = val;
            new_pos = i;
        }
        
        if (current_highest == 9) break; 
    }

    return [new_pos + 1, current_highest];
}

function main() {
    let total_output = 0;

    for (let i = 0; i < input.length; i++) {
        let row = input[i].trim();
        
        let first_search = find_highest(row, 0, row.length - 1);
        let first_digit = first_search[1];
        let next_start_pos = first_search[0];

        let second_search = find_highest(row, next_start_pos, row.length);
        let second_digit = second_search[1];

        total_output += (first_digit * 10) + second_digit;
    }

    console.log(total_output);
}

main();