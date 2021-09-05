







function writeCards(guests, myparty) {
  let message = [];
  for(let i = 0; i < guests.length; i++) {
    message.push(`Thank you, ${guests[i]}, for the wonderful surprise gift!`);
  }
return message;
}


function countDown(getReady) {
  while (getReady >= 0) {
    console.log(getReady);
    getReady--;
  }
}

  
 
