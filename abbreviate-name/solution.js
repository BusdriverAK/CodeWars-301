function abbrevName(name){
  var nn = name.split(' ').map((n)=>n[0]).join('.');
  return nn.toUpperCase();
}