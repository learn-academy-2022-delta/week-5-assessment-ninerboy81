// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ("Secret Code Word", () => {
    it ("should return a coded message", () => {
        expect(secretCodeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        expect(secretCodeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        expect(secretCodeWord(secretCodeWord3)).toEqual("3cc3ntr1c");
    }
    )
}
)

// pseudo code:
// 1. create a new array
// 2. loop through the array
// 3. if the array element includes the letter, push it to the new array
// 4. use if statement to check if the new array has 5 elements
// 5. if it does, return true
// 6. if it doesn't, return false
// 7. return the new array



// b) Create the function that makes the test pass.

const secretCodeWord = (str) => {
    let codedMessage = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            codedMessage += "4";
        } else if (str[i] === "e") {
            codedMessage += "3";
        } else if (str[i] === "i") {
            codedMessage += "1";
        } else if (str[i] === "o") {
            codedMessage += "0";
        } else {
            codedMessage += str[i];
        }
    }
    return codedMessage;
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe ("Fruit Array", () => {
    it ("should return an array of words containing a letter", () => {
        expect(fruitArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(fruitArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    }
    )
}
)

// pseudo code:
// 1. create newFruitArray
// 2. pass in the array and the letter
// 3. loop through the array
// 4. if the array element includes the letter, push it to the new array
// 5. return the new array



// b) Create the function that makes the test pass.


const newFruitArray = (arr, letter) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(letter)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe ("Full House", () => {
    it ("should return true if the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true);
        expect(fullHouse(hand2)).toEqual(false);
        expect(fullHouse(hand3)).toEqual(false);
    }
    )
}
)


// pseudo code:
// 1. create newArray called fullHouse
// 2. use let newArray = [] to create a new array
// 3. loop through the array
// 4. if the array element is equal to the first element, push it to the new array
// 5. return the new array
// 6. if the new array has 2 elements, return true
// 7. if the new array has 1 element, return false
// 8. return the new array


// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[0]) {
            newArray.push(arr[i]);
        }
    }
    if (newArray.length === 2) {
        return true;
    } else {
        return false;
    }
}

