var list = [];
function intakeNum(numbers) {
  list.push(numbers);
  return list;
}

(intakeNum(2));
(intakeNum(4));
(intakeNum(99));
(intakeNum(3));

console.log(list)

function sort(list) {
  list.sort(function(a,b){
    return a - b
  })
}

