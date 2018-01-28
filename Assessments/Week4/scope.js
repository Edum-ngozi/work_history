/**
  In this assessment, you will be testing your knowledge of functions scopes.
*/

// What will the below functions console log?
function run1() {
    let a = 10;
    if(a > 5) {
        a = 7;
    }
    console.log(a);
}
run1()
// Answer =

function run2() {
    if(true) {
        const a = 5;
    }
    console.log(a);
}
run2()
// Answer =

function run3() {
  const a = 2;
  a = 3;
  console.log(a);
}
run3()
// Answer =

// What will the below functions console log? And in what order?
// ex: First => 10, Second => 4

const a = 6;
function run4() {
    const a = 7;
    console.log(a);
}
run4();
console.log(a);​
// Answer =

const a = 6;
function run5() {
    const a = 7;
    function run6() {
        const a = 8;
        console.log(a);  // First
    }
    run6();
    console.log(a);  // Second
}
run5();
console.log(a);​  // Third

// Answer =
