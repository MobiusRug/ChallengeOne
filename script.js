var input = document.querySelector("#input");
var output = document.querySelector('.container2')
var audio = document.getElementById("audio");
var buttonCopia = document.querySelector('#copia');



function pause(){
    audio.pause();
}


function criptografa(){
    var texto = input.value;
    var mapObj = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat",
    };
    var textoCriptografado = texto.replace(/a|e|i|o|u/gi, function(match){
        return mapObj[match];
    } )  
    //try add if document.getElementById is not null
    const image = document.getElementById('matrix');
    if(image !== null){
        audio.play();
        setTimeout(pause, 4000);
        image.addEventListener('transitionend', function() {
        image.style.display = 'none';
        //output.innerHTML = textoCriptografado;
        output.textContent = textoCriptografado;
        buttonCopia.style.visibility = "visible";

    });

    }else{
        output.textContent = textoCriptografado;
    }
    image.classList.add('hidden');
    output.classList.add('limitSize');
}

function descriptografa(){
    var texto = input.value
    var mapObj = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };
    var textoDescriptografado = texto.replace(/ai|enter|imes|ober|ufat/gi, function(match){
        return mapObj[match];
    } )  
    const image = document.getElementById('matrix');
    if(image !== null){
        audio.play();
        setTimeout(pause, 4000);
        image.addEventListener('transitionend', function() {
        image.style.display = 'none';
        //output.innerHTML = textoCriptografado;
        output.textContent = textoDescriptografado;
        buttonCopia.style.visibility = "visible";

    });

    }else{
        output.textContent = textoDescriptografado;
    }
    image.classList.add('hidden');
    output.classList.add('limitSize');
}

function copia(){
    const texto = document.querySelector('.container2');
    const tempTexArea = document.createElement('textarea');
    tempTexArea.value = texto.textContent;
    document.body.appendChild(tempTexArea);
    tempTexArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTexArea);
    alert("Texto baixado da Matrix!");
}

var buttonCrip = document.querySelector('#criptografar');
buttonCrip.addEventListener('click', criptografa);

var buttonDescrip = document.querySelector('#descriptografar');
buttonDescrip.addEventListener('click', descriptografa);

buttonCopia.addEventListener('click', copia);

window.onload = function() {
    input.value = '';
}