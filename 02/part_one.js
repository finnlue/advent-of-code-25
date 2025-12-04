const fs = require("fs");

let input = fs.readFileSync("input.txt", encoding = "utf-8").split(",")
input = input.map((item) => item.replace("\n", ""));
 
let all_invalid = []; 

function split_into_range() {
    let all_ranges = [];

    for(let i = 0; i < input.length; i++) {
        let min = 0;
        let max = 0;

        min = input[i].substring(0, input[i].indexOf("-"));
        max = input[i].substring(input[i].indexOf("-") + 1);
        
        all_ranges.push([parseInt(min), parseInt(max)]);
    } 
    return all_ranges;
}

function check_invalid(range) {
    let invalid = [];

    for(let current = range[0]; current <= range[1]; current++) {
        let string_current = current.toString();     

        if(string_current.length % 2 == 0) {
            let string_front = string_current.slice(0, string_current.length / 2);
            let string_back = string_current.slice(string_current.length / 2);

            if(string_back.includes(string_front)) {
                invalid.push(current);
            }
        }
    }

    return invalid;
}
function main() {
    let range = split_into_range();

    for(let i = 0; i < range.length; i++) {
        all_invalid.push(check_invalid(range[i]));
    }

    let result = 0;

    for(let i = 0; i < all_invalid.length; i++) {
        for(let j = 0; j < all_invalid[i].length; j++) {
            result += all_invalid[i][j]
        }
    }

    console.log(result);
    return;
}

main();