const arr = [10, 15, 22, 34, 45, 60];
let newArray = 0;

for (let i = 0; i < arr.length; i++) {
  const elemento = arr[i];

  if (elemento % 3 === 0) {
    
    const metade = elemento / 2;

    newArray += metade;
  }
}
console.log(newArray);
