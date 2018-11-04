/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var map = [];
var platformCoords = [];

for (let i = 0; i < 10; i++) {
  const line = readline();
  map[i] = line;
}
const robotCount = parseInt(readline());
for (let i = 0; i < robotCount; i++) {
  var inputs = readline().split(' ');
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  const direction = inputs[2];
}

/**
 * Map platform for collect coords
 */
map.forEach(function(value, indexY) {
  for (var indexX = 0; indexX < value.length; indexX++) {
    if (value[indexX] === ".") {
      platformCoords.push({
        "x": indexX,
        "y": indexY
      });
    }
  }
});



/**
 * Verification platform or not
 */
function verifPlatform(x, y) {
  let verif = false;

  platformCoords.forEach(function(value, index) {
    if (value.x === x && value.y === y) {
      verif = true;
    }
  });

  return verif;
}

print('0 0 U 1 1 R 2 2 D 3 3 L');
