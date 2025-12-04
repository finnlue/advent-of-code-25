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

        let invalid_id = find_pattern(string_current);
        if(invalid_id != 0) invalid.push(parseInt(invalid_id)); 
    }

    return invalid;
}

function find_pattern(id_string) {
    for(let len = 1; (id_string.length / len) >= 2; len++) {
        if(!Number.isInteger(id_string.length / len)) continue;

        let test_substring = id_string.slice(0, len);
        let reconstruced_string = test_substring.repeat(id_string.length / len);

        if(reconstruced_string == id_string) return id_string;
    }
    return 0;
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