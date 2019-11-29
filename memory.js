var cards = ["1.png", "2.png","3.png", "7.png", "3.png",  "1.png", "4.png", "6.png", "5.png", "2.png",  "8.png", "5.png", "6.png", "4.png", "9.png", "7.png", "8.png", "9.png" ]
//console.log(cards);
//var cards=[];
var used=[0] ;
var tab=[];
var tabSorted;
var randomNum;
var valid=false;
for (var i=0;i<=17;i++) tab[i] =(i%9)+1;
shuffle(tab);


for(i=0;i<=17;i++){
	//alert(tab[i].toString());
	cards[i]=tab[i].toString()+".png";
}
//alert(cards);
//another art of shuffling cards
//alert(tab);
//for(i=0;i<=17;i++) { randomNum =  Math.floor(Math.random() * 17);}

	
	/*   
       for(j=0; j<=cards.length; j++) {
	        if (randomNum == used[j] ) { valid =false;}        
        } 
   if (valid) {cards[randomNum] =i.toString()+".png";}
   
 */


var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");
var c12 = document.getElementById("c12");
var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");
var c16 = document.getElementById("c16");
var c17 = document.getElementById("c17");

var visible_nr;
var oneVisible = false;
var turnCounter = 0;
var lock=false;
var pairsleft = 9;

c0.addEventListener("click", function() { revealCard(0); });   //c0.addEventListener("click", function () {alert("hey!"); });
c1.addEventListener("click", function() { revealCard(1); }); 
c2.addEventListener("click", function() { revealCard(2); }); 
c3.addEventListener("click", function() { revealCard(3); }); 
c4.addEventListener("click", function() { revealCard(4); }); 
c5.addEventListener("click", function() { revealCard(5); }); 
c6.addEventListener("click", function() { revealCard(6); }); 
c7.addEventListener("click", function() { revealCard(7); }); 
c8.addEventListener("click", function() { revealCard(8); }); 
c9.addEventListener("click", function() { revealCard(9); }); 
c10.addEventListener("click", function() { revealCard(10); }); 
c11.addEventListener("click", function() { revealCard(11); }); 
c12.addEventListener("click", function() { revealCard(12); }); 
c13.addEventListener("click", function() { revealCard(13); }); 
c14.addEventListener("click", function() { revealCard(14); }); 
c15.addEventListener("click", function() { revealCard(15); }); 
c16.addEventListener("click", function() { revealCard(16); }); 
c17.addEventListener("click", function() { revealCard(17); }); 

   
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);

}
function revealCard(number){
   //alert(number);
   var opacity=$('#c'+number).css('opacity');
   
   if (opacity != 0 && lock ==false) {
	   lock=true;
	   var obraz = "url(img/"+cards[number]+")";
       // alert('opacity = '+opacity);
       $('#c'+number).css('background-image', obraz);
       $('#c'+number).addClass('cardA');
       $('#c'+number).removeClass('card');
       if(oneVisible == false){
	        oneVisible = true;
	         visible_nr=number;
			 lock=false;
        }
        else{
	   
	   if (cards[visible_nr] ==cards[number]) { 
	         //alert('para'); 
	         setTimeout(function() {
	         hide2c(number, visible_nr) }, 800);
	   }
	   else { 
	         //alert('pudło');
	         setTimeout(function() {
	         restore2c(number, visible_nr) }, 1000);
	   }
	   
	   turnCounter++;
	   $('.score').html('<p>Turns counter: '+turnCounter+'</p>');
	   oneVisible = false;
   }
   }
}
function hide2c(nr1, nr2) {
  $('#c'+nr1).css('opacity','0');
  $('#c'+nr2).css('opacity','0');
   pairsleft--;
   if (pairsleft == 0) { 
       var mistakes=turnCounter-9 ;
	   $('.gameBoard').html('<h1 style=".blink"> Congratulations!  <br/> You\'we  won!  </h1><p>Done in  '+turnCounter+' turns </br> with  '+mistakes+' mistakes</br> press F5 to play again</p>');
   }
   
   lock = false;

   }
 function restore2c(nr1, nr2){
   $('#c'+nr1).css('background-image', 'url(img/karta.png)');
   $('#c'+nr1).addClass('card');
   $('#c'+nr1).removeClass('cardA');
   
   $('#c'+nr2).css('background-image', 'url(img/karta.png)');
   $('#c'+nr2).addClass('card');
   $('#c'+nr2).removeClass('cardA');
   lock = false;
 }	 
  
	


