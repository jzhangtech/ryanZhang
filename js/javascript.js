
/*
el=document.getElementById("abc");

function generateWords(){
	var random=Math.random();
	console.log("test");
	el.innerHTML=random;

	window.setTimeout(generateWords(), 2000);
	
}


generateWords()*/

var timer = setInterval(generateWords, 100);
test=0;
test2=0;
var timer2;

function generateWords() {

	var phrase="Developer";
				
	var subphrase = phrase.substring(0, test);

	if(test>phrase.length){
		clearInterval(timer);
		
		timer2 = setInterval(generateWords2, 100);

	}
    document.getElementById("typed2").innerHTML=subphrase;
    test++;
   
}


function generateWords2() {

	var testarray=["Developer","Gamer","Wizard Apprentice","Dragon Slayer"]


	var array=["Geveloper","Gaveloper","Gameloper","Gameloper","Gamer","Gamer per",
	"Gamer  r","Gamer"]
	


	console.log("array = " + (array.length-1));
	console.log("test2 = " + test2);
    document.getElementById("typed2").innerHTML=array[test2];
    test2++;
    if(test2>=(array.length)){
		clearInterval(timer2);
		console.log("finish");
		test2=0;
		console.log("test2 = " + test2);
		
		setTimeout(function() { timer2 = setInterval(generateWords3, 100); }, 2000);
		
		
		
		//setInterval(generateWords, 100);
	}
   
	
}


function generateWords3() {

	var testarray=["Developer","Gamer","Wizard Apprentice","Dragon Slayer"]


	var array=["Wamer","Wimer","Wizer","Wizarr","Wizard","Wizard A",
	"Wizard Ap","Wizard App","Wizard Appr","Wizard Appren","Wizard Apprent","Wizard Apprenti","Wizard Apprentic","Wizard Apprentice"]
	


	console.log("array = " + (array.length-1));
	console.log("test2 = " + test2);
    document.getElementById("typed2").innerHTML=array[test2];
    test2++;
    if(test2>=(array.length)){
		clearInterval(timer2);
		console.log("finish");
		test2=0;
		console.log("test2 = " + test2);

		setTimeout(function() { timer2 = setInterval(generateWords2, 100); }, 2000);
		
		
		
		//setInterval(generateWords, 100);
	}
   
	
}






$(function(){
      $("#typed1").typed({
        strings: ["Hey, How you doing today?","My name is Ryan..."],
        typeSpeed: 0
      });
  });