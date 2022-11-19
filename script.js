
// HOW TO MAP A RANGE OF NUMBERS TO ANOTHER RANGE OF NUMBERS ???::::

// This is our magical function to do so:
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  // this is how it works mathematicaly under the hood!!!
}

const num = 5;
console.log(scale(num, 0, 10, -50, 50)); // 0
// ( (5-0) * ( 50-(-50) ) ) / (10-0) + (-50) will result "0"
console.log("###################################################")

// HOW WE CAN USE THIS??? :

/*
  Let's say we have a range of numbers such as percentage values and we want to
have a range starting from 0 and going up to 100. We've defined a function for
that, and reflected that values from 0 to 100 when our page loads like it's
loading the page with the actual percentage numbers.

also;

we have a blur effect and we want this blur effect to disappear with the same
range of numbers starting from 100% blur to 0% blur.

this is a wonderful opportunity for us to use this scale function here.

what we should do is:

when the percentage is 0, we want the blur effect to be 100%;
when the percentage is 1, we want the blur effect to be 99%;
... and so on.

"""""""""
  let load = 0;
  load++; until 100.

  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
"""""""""""

the explanation of the code above is:
"""loadText.style.opacity = scale(load, 0, 100, 1, 0)"""
here, as the load value goes up from 0 to 100; we map it with an interval range
starting from 0 to 100; and plus, map it with a range between 1 to 0.

so the opacity of our text here will begin by "1", then will be "0.99",
then "0.98" an so on; and end with a value of 0.00. So the opacity value will
reduce by 100 range of intervals from 1 to 0, as the load value goes up from 0 to 100.

on the second example.

  """"bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`"""
as the load value goes up from 0 to 100, the blur value will go down from 30px
to 0 px.

so as we see; we don't necessarily have to match the interval distances of two ranges.
load index will go up from 0 to 100, but blur value will go down from 30 to 0.
So the distance between 30 to 0 will be divided by 100(as we go up from 0 to 100);
and the two different ranges will act at the same time.

*/


let perCentText = document.querySelector("span");
let textDiv = document.querySelector(".loading-text");
let backgroundImg = document.querySelector(".bg");
let perCentIndex = 0;
let displayIndexNums = setInterval(perCentAugmenter, 30);

function perCentAugmenter() {
  perCentIndex++;

  if (perCentIndex > 99) {
    clearInterval(displayIndexNums);
  };
  perCentText.textContent = perCentIndex;
  textDiv.style.opacity = scale(perCentIndex, 0, 100, 1, 0);
  backgroundImg.style.filter = `blur(${scale(perCentIndex, 0, 100, 30, 0)}px)`
  console.log("PERCENT:" + perCentIndex + " ----- OPACITY OF THE TEXT DIV:" + textDiv.style.opacity + " ----- BLUR OF THE BACKGROUND:" + backgroundImg.style.filter);
}

// CHECK THE CONSOLE ON THE GOOGLE DEV TOOLS TO VISUALIZE THE CHANGES !!!!!

/*
As we see on the code above;
as the perCentIndex goes up, by the same amount of steps and time,
the blur effect goes down; and the opacity of the percentage text div goes down.
*/
