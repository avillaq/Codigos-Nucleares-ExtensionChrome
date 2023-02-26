document.addEventListener('DOMContentLoaded', init);
function init() {
    /*const hitomi = document.querySelector(".hitomi")
    const nhentai = document.querySelector(".nhentai")
    const boton1 = document.getElementById('boton1');

    function buscar() {
        if (hitomi.value.length === 5 || hitomi.value.length === 7) {
            var win = window.open("https://hitomi.la/reader/" + hitomi.value + ".html#1", '_blank');
            win.focus();

        } else if (nhentai.value.length == 5 || nhentai.value.length == 6) {
            var win = window.open('https://nhentai.to/g/' + nhentai.value, '_blank');
            win.focus();
        }
    }
    boton1.addEventListener('click', buscar);

    //Muestra la url presionando el boton link
    const boton2 = document.getElementById('boton2');
    function mostrarLink() {
        if (hitomi.value.length === 5 || hitomi.value.length === 7) {
            //Con document.getElementById("id")."Atributo" podemos cambiar atrubutos del elemento con el ID proporcionado 
            document.getElementById('campoLink').href = "https://hitomi.la/reader/" + hitomi.value + ".html#1";
            document.getElementById('campoLink').innerHTML = "https://hitomi.la/reader/" + hitomi.value + ".html#1";

        } else if (nhentai.value.length == 5 || nhentai.value.length == 6) {
            document.getElementById('campoLink').href = 'https://nhentai.to/g/' + nhentai.value;
            document.getElementById('campoLink').innerHTML = 'https://nhentai.to/g/' + nhentai.value;
        }
    }
    boton2.addEventListener('click', mostrarLink);*/


    //Habilita y deshabilita campos de texto
    const logoHitomi = document.querySelector("#container-logo-hitomi");
    const logoNhentai = document.querySelector("#container-logo-nhentai");

    const inputHitomi = document.querySelector("#input-hitomi");
    const inputNhentai = document.querySelector("#input-nhentai");

    logoHitomi.addEventListener('click', function (){
        slide("#container-hitomi","#container-nhentai");
        inputHitomi.disabled = false;
        inputNhentai.disabled = true;
    });
    logoNhentai.addEventListener('click', function (){
        slide("#container-nhentai","#container-hitomi");
        inputHitomi.disabled = true;
        inputNhentai.disabled = false;
    });


    function slide(container_1,container_2){
        const container1 = document.querySelector(container_1);
        const container2 = document.querySelector(container_2);

        if(container1.style.height==="" || container1.style.height==="0px"){
            container1.style.height = 30 +"px";
            container2.style.height = 0 +"px";
        }else{
            container1.style.height = 0 +"px";
        }
    }


}