
main();
function main(){
init();
  function init(){
    var playername = "ARRAS.IO"
    document.getElementById("PlayerNameInput").value = playername;
    var isInjected = false;
    if(!isInjected){
    alert("ARRAS INJECTED");
     isInjected = true;
    }
    function adblock(){
document.getElementById("arras-io_336x280").remove();
}
adblock();
  }
}
