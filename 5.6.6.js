const arr = [1, 2, 3, 4, 5, 'a', 'b'];
const x = typeof arr[0];
for (let i = 0; i <= arr.length -1 ; i++) {
  if (x === typeof arr[i]) {	
      if (i === arr.length -1 ) {
      console.log(true);
      break;
      } 
      continue;

  } else {
    console.log(false);
    break
    }
}