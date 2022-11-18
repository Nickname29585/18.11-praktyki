liczby1=[1,2,3,4,5,6,7,8,9,10];
liczby2=[11,12,13,14,15,16,17,18,19,20];

liczby3=[...liczby1,...liczby2];

let szczczalka=(liczby1,liczby2)=>{
    return[...liczby1,...liczby2]
};
console.log(szczczalka(liczby1,liczby2));

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];
//zad1
let szczalka = (arr1, arr2) => [...arr1, ...arr2];


console.log("zad1: " + szczalka(arr1, arr2))

//zad2
let szczalka2 = (arr1) => [arr1.reverse()[0]];


console.log("zad2: " + szczalka2(arr2))

//zad3

const filterArray = numbers.filter(numbers => numbers >=3);


console.log("zad3: " + filterArray)


//zad4
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);


console.log("zad4: " + sumWithInitial);


//zad5
const map = numbers.map(x => x * x + 3);


console.log("zad5: " + map);