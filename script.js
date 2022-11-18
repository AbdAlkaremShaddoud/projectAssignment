( function () {

var names = {John , Ammar , Ali , Jad , jan , rose , maya , Jack}
for ( var i =0 ; i<names.length; i++){
var firstLetter = names[i].charAt(0).tolowerCase();
if ( firstLetter == 'J' || firstLetter == 'j'){
 goodbyespeaker.speak()
}
 
 else {
 hellospeaker.speak(names[i]);
 }

}

})();   