function showGame(whichgame){
  var source=whichgame.getAttribute("name");
  var game=document.getElementById("gameHolder");
  var clone=game.cloneNode(true);
  clone.setAttribute('src',source);
  game.parentNode.replaceChild(clone,game)
}
