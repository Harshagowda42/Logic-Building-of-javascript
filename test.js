// function maxElement() {
//     const arr = [3, 5, 7, 0, 3, 2];

//     let max = arr[0]; // Initialize max with the first element of the array

//     for (let i = 1; i < arr.length; i++) { // Start from the second element
//         if (arr[i] > max) { // Compare current element with max
//             max = arr[i];
//         }
//     }

//     console.log("Max element:", max); // Log the maximum element

// }

// maxElement(); // Call the function  


// function uniqueEelemnts() {
//     const  arr = [1,8,1,2,3,2,4,5,4,5];
//     const  unique = [];
    
//     for(let i= 0; i < arr.length; i++) {
//         if(!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     console.log("unique Elements",unique);
// }

// uniqueEelemnts();


// function convertString() {
//     const s ="11101011110";
//     let  count = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(i === '1') {
//             count = count + 1;
//             else 
//             console.log(String.fromCharCode(64+count));
//         count = 0;
//         }
//     }
//     if(count > 0) {
//         console.log(String.fromCharCode(64 + count ));
//     }
// }


// function convertString() {
//     const n = 43;
//     num = 0;
//     while(n>0);
//     last = n%10;
//     num = num + last;
//     n =n/10;
//     console.log(num);
//     for(let i=2;i < num.lenght;i++) {
//         if(num%i ==0)
//             console.log("not a prime");

//         else 
//         console.log("prime");

//     }



// // }

// function reverseString (input) {
//     const reversed = input.toString().split().reevse.join();
//     return reveresed;

// }
// const n = 1225;
// console.log(reverseString(n));


function reversedString () {
    const reversed = input.toString().split().reverse.join();
    return reversed ;


}
const n = 1225;
console.log(reverseString(n));
