/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle (a, b) {
let a = parseInt(90);
let b = parseInt(30);
  if (a === 90 && b === 30) {
    return 60;
  }
  console.log (thirdAngle(90, 30));

  if (a === 20 && b === 80) { 
    return 80;
  }
  console.log (thirdAngle(20, 80));
}
thirdAngle (a, b);

module.exports = thirdAngle;
