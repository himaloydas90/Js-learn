//1. //  common elements in three arrays using filter and includes

//   arr1:[1,2,3,4,5];
//   arr2:[2,3,5,6,7];
//   arr3:[3,5,8,9];

//   function commonElements(arr1, arr2, arr3) {
//       let result = [];
//       result = arr1.filter(item => arr2.includes(item) && arr3.includes(item));
//       return result;
//   }
//   console.log(commonElements(
//       [1, 2, 3, 4, 5],
//       [2, 3, 5, 6, 7],
//       [3, 5, 8, 9]
//   ));

// //  common elements in three arrays using set and filter

//  function commonElements(arr1, arr2, arr3) {
//      let set2 = new Set(arr2);
//      let set3 = new Set(arr3);
//      let result = [];
//      result = arr1.filter(item => set2.has(item) && set3.has(item));
//      return result;
//  }
//  console.log(commonElements(
//      [1, 2, 3, 4, 5],
//      [2, 3, 5, 6, 7],
//      [3, 5, 8, 9]
//  ));


// Without using filter and includes

  function commonElements(arr1, arr2, arr3) {
      let result = [];
      let index=0;
      for(let i=0;i <arr1.length;i++){
         let foundInSecond=false;
         let foundInThird=false;
         for(let j=0;j<arr2.length;j++){
             if(arr1[i]===arr2[j]){
                 foundInSecond=true;
                 break;
             }
         }
         for(let k=0;k<arr3.length;k++){
             if(arr1[i]===arr3[k]){
                 foundInThird=true;
                 break;
             }
         }
         if(foundInSecond && foundInThird){
             result[index]=arr1[i];
             index++;
         }   
      }
    
         return result;
 }
 console.log(commonElements(
     [1, 2, 3, 4, 5],
     [2, 3, 5, 6, 7],
     [3, 5, 8, 9]
 ));


 
