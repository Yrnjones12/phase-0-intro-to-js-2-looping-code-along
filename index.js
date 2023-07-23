const names = ["Ada","Brendan","Ali"];
const event = ["birthday"];
function writeCards(names , event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countDown(num) {
    if (num === 0) {
      console.log(num);
    } else {
      console.log(num);
      countDown(num - 1);
    }
  }

