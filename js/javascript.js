var index = 0;
var min=0;
var charAt=0;
var stringArr = [
    'Web Developer',
    'Software Engineer',
    'Casual Gamer',
    'Wizard Apprentice', 
    'JavaScript Fan', 
    'Game of Throne Fan',
    'Coffee Drinker'
];

setTimeout(function() {
    timer = setInterval(typed.bind(null,stringArr), 100);
    }, 1000);

function typed(stringArr){
    
    try{
        var base = stringArr[index];
        var product = stringArr[index+1];
        var max = (base.length >= product.length ? base.length : product.length);
        
        if(max>=min){
            if(base.charAt(charAt)!=''){
                base=setCharAt(base,charAt,product.charAt(charAt));
                document.getElementById("typed2").innerHTML = base;
                stringArr[index]=base;
            }else{
                base=base+product.charAt(charAt);
                document.getElementById("typed2").innerHTML = base;
                stringArr[index]=base;
            }
        }
        
        if(product.charAt(charAt)!=''){
            charAt++;
            min--;
        }
        
        min++;
        
        if(stringArr[index]==stringArr[index+1]){
            clearInterval(timer);
            index++;
            charAt = 0;
            min = 0;
            setTimeout(function() {
                timer = setInterval(typed.bind(null,stringArr), 100);
            }, 1000);
        }
    }catch(e){
        clearInterval(timer);
    }
}

function setCharAt(str,index,change) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + change + str.substr(index+1);
}
