const smallerValue = 1;
const biggerValue = 100;
const pageSmallerValue =  document.getElementById('smaller-value');
const pageBiggerValue =  document.getElementById('bigger-value');
const secretNumber = sortRandomNum();

pageSmallerValue.innerHTML=smallerValue;
pageBiggerValue.innerHTML=biggerValue;

function sortRandomNum() {
    return parseInt(Math.random() * biggerValue + 1);
}

console.log(secretNumber);
