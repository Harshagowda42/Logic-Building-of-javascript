function reversedString(input) {
    const reversed = input.toString().split('').reverse().join('');
    return reversed;
}
const n = 12234;
console.log(reversedString(n)); // Output: "5221"
