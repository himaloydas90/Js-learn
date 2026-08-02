// //1.common elements in three arrays using filter and includes

//    arr1:[1,2,3,4,5];
//    arr2:[2,3,5,6,7];
//    arr3:[3,5,8,9];

//    function commonElements(arr1, arr2, arr3) {
//        let result = [];
//        result = arr1.filter(item => arr2.includes(item) && arr3.includes(item));
//        return result;
//    }
//    console.log(commonElements(
//        [1, 2, 3, 4, 5],
//        [2, 3, 5, 6, 7],
//        [3, 5, 8, 9]
//    ));

// //    common elements in three arrays using set and filter

//   function commonElements(arr1, arr2, arr3) {
//       let set2 = new Set(arr2);
//       let set3 = new Set(arr3);
//       let result = [];
//       result = arr1.filter(item => set2.has(item) && set3.has(item));
//       return result;
//   }
//   console.log(commonElements(
//       [1, 2, 3, 4, 5],
//       [2, 3, 5, 6, 7],
//       [3, 5, 8, 9]
//   ));


// //  Without using filter and includes

//  function commonElements(arr1, arr2, arr3) {
//      let result = [];
//      let index = 0;
//      for (let i = 0; i < arr1.length; i++) {
//          let foundInSecond = false;
//          let foundInThird = false;
//          for (let j = 0; j < arr2.length; j++) {
//              if (arr1[i] === arr2[j]) {
//                  foundInSecond = true;
//                  break;
//              }
//          }
//          for (let k = 0; k < arr3.length; k++) {
//              if (arr1[i] === arr3[k]) {
//                  foundInThird = true;
//                  break;
//              }
//          }
//          if (foundInSecond && foundInThird) {
//              result[index] = arr1[i];
//              index++;
//          }
//      }

//      return result;
//  }
//  console.log(commonElements(
//      [1, 2, 3, 4, 5],
//      [2, 3, 5, 6, 7],
//      [3, 5, 8, 9]
//  ));

// //  Find the first non-repeating character without using built-in methods

//  function firstNonRepeatingCharacter(str) {
//      for (i=0; i<str.length; i++){
//          let isUnique = true;
//          for (j=0; j<str.length; j++){
//              if (i!==j && str[i]===str [j]){
//                  isUnique = false;
//                  break;
//              }

//          }
//          if (isUnique) {
//              return str[i];
//          }

//      }
//      return "no unique character found";
//  }
//   console.log(firstNonRepeatingCharacter("aabbefccddee"));  Output: "no unique character found"

//  function firstNonRepeatingCharacter(str) {
//      let charCount = {}; 
//      for (let i=0;i<str.length;i++){
//          let char=str[i];
//          // if (charCount[chr]){
//          //     charCount[chr]++;
//          // } else {
//          //     charCount[chr]=1;
//          // }
//          charCount[char] = (charCount[char] || 0) + 1;
//      }
//      for(let i=0;i<str.length;i++){
//          if (charCount[str[i]] === 1){
//              return str[i];
//          }
//      }
//      return "no unique character found";
//  }
//  console.log(firstNonRepeatingCharacter("aabbefccddee"));  

// //  using Map to find the first non-repeating character
//  function firstUniqueChar(str) {
//      let charMap = new Map();
//      for (let char of str) {
//          charMap.set(char, (charMap.get(char) || 0) + 1);
//      }
//      for (let [char, count] of charMap) {
//          if (count === 1) {
//              return char;
//          }
//      }
//      return "No unique character found";
//  }
//  console.log(firstUniqueChar("aabbefccddee")); // output: "f"

// // using Map to find the first non-repeating character
// function firstUniqueChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char; 
//         }
//     }
//     return "No unique character found";
// }

// console.log(firstUniqueChar("aabbefccddee"));

//  Find the maximum occurring character in a string without using built-in methods

// function maxOccurringCharacter(str) {
//     let maxCount = 0;
//     let maxChar = '';
//     for (let i = 0; i < str.length; i++) {
//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             maxChar = str[i];
//         }   

//     }
//     return maxChar;
// }
// console.log(maxOccurringCharacter("javascript")); // output: "a"

//  Find the maximum occurring character in a string  using built-in methods
// function maxOccurringCharacter(str) {
//     let charCount = {};
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     let maxCount = 0;
//     let maxChar = '';
//     for (let char in charCount) {
//         if (charCount[char] > maxCount) {
//             maxCount = charCount[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// console.log(maxOccurringCharacter("javascriptbbbb")); // output: "a"
function maxOccurringCharacter(str) {
    // ১. স্ট্রিংকে অ্যারে বানিয়ে সাজিয়ে ফেলা
    let chars = str.split('').sort();
    
    let maxChar = '';
    let maxCount = 0;
    let currentCount = 1;

    // ২. পাশাপাশি থাকা একই অক্ষরগুলো গণনা করা
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxChar = chars[i];
        }
    }

    return maxChar;
}

console.log(maxOccurringCharacter("javascriptbb dddddbb")); // আউটপুট: "b"

