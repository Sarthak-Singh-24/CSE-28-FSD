for (let i = 1; i <= 5; i++) {
  console.log("Iteration number: " + i);
}


let count = 1;

while (count <= 5) {
  console.log("Count is: " + count);
  count++;
}


let energy = 0;

do {
  console.log("Working..."); 
  // This runs even though energy is 0
} while (energy > 0);