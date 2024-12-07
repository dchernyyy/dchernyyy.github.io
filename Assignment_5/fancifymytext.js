//alert("Hello World 1");
//setTimeout (load, 0);

///*
window.onload = function() {
    //const btn = document.querySelector('button');
    //btn.addEventListener("click", (bc))
    const textArea = document.getElementById('textArea');
    const btn = document.querySelector('button');
    //btn.addEventListener('click', bc);
    const radios = document.getElementsByName('style');
    for (const radio of radios){
        radio.addEventListener('click', sc);
    }
    const moo = document.getElementById("moo");
    moo.addEventListener('click', mc);
    //radio1.addEventListener('onclick', s1);
}
// */

let big = false;


function bc(){
    const textArea = document.getElementById('textArea');
    if(!big){
        textArea.style.fontSize = "24pt";
    }else{
        textArea.style.fontSize = "1em";
    }
    big=!big;
}

function sc(){
    const radio1 = document.getElementById('style1');
    const textArea = document.getElementById('textArea');
    if(radio1.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }else{
        textArea.style.fontWeight = "normal";
    }
}

function mc(){
    const textArea = document.getElementById('textArea');
    let sentences = textArea.value.split(".");
    let allSentences = sentences.join("-Moo.");
    textArea.value = allSentences;
}