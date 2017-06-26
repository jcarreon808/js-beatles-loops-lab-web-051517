function theBeatlesPlay(musicians, instruments){
  const arr =[];
  for(var i=0; i<musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  let newArray=[];
  for (var i=0; i<facts.length; i++){
    newArray.push(facts[i]+'!!!');
  }
  return newArray;
}

function iLoveTheBeatles(n){

  var newArray=[];
  while (n<15){
    newArray.push('I love the Beatles!');
    n++
  }
  if (n > 15){
    return ['I love the Beatles!'];
  }
  return newArray;
}
