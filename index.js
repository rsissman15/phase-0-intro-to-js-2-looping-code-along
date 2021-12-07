// Code your solutions in this file
const cards=[];

function writeCards(name,event) {
    for (let i = 0; i < name.length; i++) {
      cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
      debugger;
    }
    return cards;
  }
function countDown(i){
    while(i>=0){
    console.log(i--);
    }
    return i
}
