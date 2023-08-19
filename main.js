// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8] //true
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9] //true
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6] //true 
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5] //true 
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6] // true 

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5] //false
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3] //false
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4] //false
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5] //false
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4] //false

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] //true 
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //true

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// validateCred
const validateCred = arr => {
    //console.log(arr)
    let sum = 0;
    let multiplySum = 0;
    let i = 0;
    arr.reverse(); // 1. reverse the array
    //console.log(arr)
    if (i < arr.length) {
        //console.log(arr.length)
    for (let number of arr) {
    if (i % 2 !== 0) { 
        multiplySum = arr[i] * 2 // 2. double every other number 
        //console.log(multiplySum)
     }else { 
        sum += arr[i];
        i++
        continue
    }
    if (multiplySum > 9) { // 3. subtract 9 from numbers over 9
       sum += multiplySum - 9 ;
       //console.log (sum)
    } else {
        sum += multiplySum;
    }
    i++
    } //console.log(sum) 
    if (sum % 10 === 0){//4. if sum can be divided by 10 = true else false 
        return true;
    } else {
        return false;
    }
}
}

let invalidOnes = []; // for saving of the invalid arrays 
//findIvalidCards
const findInvalidCards = arr => { // creating function to loop trough the batch arrays
    
    for (let i = 0; i < arr.length; i++) { // loop trough the arrays 
      if (validateCred(arr[i]) === false) {// call the validateCread and use it to find out if No is valid or not 
        invalidOnes.push(arr[i]); // push invalid numbers into our invalidOnes 
      }
    }
    invalidOnes = invalidOnes.map(nestedArr => nestedArr.reverse());
    return invalidOnes // return the invalid numbers, reverse the numbers as they where returned the wrong way around.
}

//Identification of Companies
const idInvalidCardCompanies = arr => { // define function to Identify Companies with invalid Creditcard numbers
    companies = []; // value that save the array with the invalid companies 
    for (let card of arr) { // looping trough the array of invalid numbers
      if (card[0] === 3) { // if it starts with a 3 the following happens 
        if (companies.includes('Amex')) {
          continue;
        } else { // if not it will add companie name to the 'companies' array 
          companies.push('Amex');
        }
      } else if (card[0] === 4) {
        if (companies.includes('Visa')) {
          continue;
        } else {
          companies.push('Visa');
        }
      } else if (card[0] === 5) {
        if (companies.includes('Mastercard')) {
          continue;
        } else {
          companies.push('Mastercard');
        }
      } else if (card[0] === 6) {
        if (companies.includes('Discover')) {
          continue;
        } else {
          companies.push('Discover');
        }
      } else {
        return "Company not found"; // if non of the numbers are in there it will return the string.
      }
    }
    return companies; // retrun a finished array 
  }
findInvalidCards(batch) // IMPORTANT! needs to run before idInvalidCardCimpanies otherwise idInvalidCardCompanies does not work 
//console.log(validateCred(mystery5))
//console.log()
console.log(idInvalidCardCompanies(invalidOnes));