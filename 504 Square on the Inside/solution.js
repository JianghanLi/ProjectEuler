var m = 100;
var euclid = function(x, y) {
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x ? x : y;
};
var hcf = [];
for (var j = 1; j <= m; j++){
  hcf[j] = [];
  for (var k = 1; k <= m; k++) {
    hcf[j][k] = euclid(j,k);
  }
}
var count = 0;
var square = [];
for ( var i = 0; i*i < 2*m*m; i++ ){
  square[i*i] = true;
}
for (var a = 1; a <= m; a++){
  for (var b = a; b <= m; b++){
    for (var c = a; c <= m; c++){
      for(var d = b; d <= m; d++){
        var interior = (a*b + b*c + c*d +d*a)/2 - (hcf[a][b] + hcf[b][c] + hcf[c][d] + hcf[d][a])/2 + 1;
        if(square[interior]){
          var orbit = 8;
          if (a === b){ orbit /= 2;}
          if (a === c){ orbit /= 2;}
          if (b === d){ orbit /= 2;}
          count += orbit;
        }
      }
    }
  }
}
console.log(count);