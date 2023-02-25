const hitomi = document.querySelector(".hitomi")
const nhentai = document.querySelector(".nhentai")
const boton1 = document.getElementById('boton1');

function buscar() {
    if (hitomi.value.length===5 || hitomi.value.length===7) {
        var win = window.open("https://hitomi.la/reader/"+hitomi.value+".html#1", '_blank');
        win.focus();
        
    } else if(nhentai.value.length==5 || nhentai.value.length==6){
        var win = window.open('https://nhentai.to/g/'+nhentai.value, '_blank');
        win.focus();
    }
}
boton1.addEventListener('click', buscar);

//Muestra la url presionando el boton link
const boton2 = document.getElementById('boton2');
function mostrarLink(){
    if (hitomi.value.length===5 || hitomi.value.length===7) {
        //Con document.getElementById("id")."Atributo" podemos cambiar atrubutos del elemento con el ID proporcionado 
        document.getElementById('campoLink').href = "https://hitomi.la/reader/"+hitomi.value+".html#1";
        document.getElementById('campoLink').innerHTML = "https://hitomi.la/reader/"+hitomi.value+".html#1";
        
    } else if(nhentai.value.length==5 || nhentai.value.length==6){
        document.getElementById('campoLink').href = 'https://nhentai.to/g/'+nhentai.value;
        document.getElementById('campoLink').innerHTML = 'https://nhentai.to/g/'+nhentai.value;
    }
}
boton2.addEventListener('click', mostrarLink);


//Habilita y deshabilita campos de texto
const a = document.getElementById('a');
const b = document.getElementById('b'); 
const h = document.getElementById('hitomi');
const nh = document.getElementById('nhentai');   
function event1() {
    h.disabled = false
    nh.disabled = true
}
function event2() {
    h.disabled = true
    nh.disabled = false
}
a.addEventListener('click', event1);
b.addEventListener('click', event2);



