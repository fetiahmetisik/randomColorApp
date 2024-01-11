function renkDegis()
{
  var hex_kodu = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

  var hex = '';
  
  for(var i = 0; i<6; i++){
    var random_index = Math.floor(Math.random() * hex_kodu.length);
    hex += hex_kodu[random_index];
  }

  document.getElementById("hex-code").innerHTML = hex;
  document.body.style.backgroundColor = '#' + hex;
}