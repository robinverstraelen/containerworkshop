var cohortNames = ['Olivier', 'David', 'Luca', 'Pierre-Arnaud', 'Alvaro', 'Carmen', 'Jorge', 'Cluadiu', 'Ada'];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}  
function generate(){
    var response = [];
    var randomised = shuffle(cohortNames);
    var i,j,temparray,chunk = 3;
    for (i=0,j=randomised.length; i<j; i+=chunk) {
        temparray = randomised.slice(i,i+chunk);
        response.push(temparray);
    }
    return response;
}
module.exports = generate;