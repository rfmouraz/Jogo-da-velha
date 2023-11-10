var player = "Tupac";

function checkjogo(id) {
    
    var opt = verificarSrc(id);
    
    if(opt == "transp.png"){

        document.getElementById(id).src = "img/" + player + ".png";

        if(wincheck()){
            alert("Fim do jogo!\n" + player + " venceu!");
            return false;
        }

        if(player == "Tupac"){
            player = "Biggie";
        }
        else{
             player = "Tupac";
        }
        
    }
}

function verificarSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function wincheck(){
if((verificarSrc('c1') == verificarSrc('c2')) && (verificarSrc('c1')== verificarSrc('c3')) && verificarSrc('c1') != "transp.png"){
    return true;
}

else if((verificarSrc('c1') == verificarSrc('c5')) && (verificarSrc('c1')== verificarSrc('c9')) && verificarSrc('c1') != "transp.png"){
        return true;
    }
    
else if((verificarSrc('c3') == verificarSrc('c5')) && (verificarSrc('c3')== verificarSrc('c7')) && verificarSrc('c3') != "transp.png"){
            return true;
    }
        
else if ((verificarSrc('c4') == verificarSrc('c5')) && (verificarSrc('c4')== verificarSrc('c6')) && verificarSrc('c4') != "transp.png"){
            return true;
    }
            
else if((verificarSrc('c7') == verificarSrc('c8')) && (verificarSrc('c7')== verificarSrc('c9')) && verificarSrc('c7') != "transp.png"){
            return true;
    }

if((verificarSrc('c1') == verificarSrc('c4')) && (verificarSrc('c1')== verificarSrc('c7')) && verificarSrc('c1') != "transp.png"){
        return true;
    }

if((verificarSrc('c2') == verificarSrc('c5')) && (verificarSrc('c2')== verificarSrc('c8')) && verificarSrc('c2') != "transp.png"){
        return true;
    }

if((verificarSrc('c3') == verificarSrc('c6')) && (verificarSrc('c3')== verificarSrc('c9')) && verificarSrc('c3') != "transp.png"){
        return true;
    }
            
}




