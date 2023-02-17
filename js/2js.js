// 1
console.log("1");
const hello1 = function(){
    console.log("Привіт ,JavaScript");
    
    
}
hello1();
// 2
console.log("2");
const hello2 = function(name){
    console.log(`Привіт ,${name}`);
    
    
}
hello2("Василь");
// 3
console.log("3");

const mul = function(n,m){
    console.log("n+m=",n+m);
    console.log("n-m=",n-m);
    console.log("n*m=",n*m);
}
mul(2,3);
// 4
console.log("4");

const myNewArrowFunction=(...massif) => console.log(massif);
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");
// 5
console.log("5");

const myAverageScore = function(marks){
    let total = 0
    console.log(marks)
    for(const mark of marks){

        total = total + mark;


}
console.log(total)
const score = total / marks.length ;
console.log(score)
    if (score <= 100 && score>90 ){
        return "A";
    }else if (score <= 90 && score>80 ){
        return "B";
    }else if (score <= 80 && score>70 ){
        return "C";
    }else if (score <= 70 ){
        return "D";
    }else{
        console.log("you are lying")
    }
};
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
