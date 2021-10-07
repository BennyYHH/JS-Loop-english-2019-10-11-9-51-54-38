for(var i = 1; i < 10; i++){
  var line = "";
  for (var j = 1; j<=i; j++){
    line += i + "*" + j + "=" + (i * j) + " ";
  }
  console.log(line);
}