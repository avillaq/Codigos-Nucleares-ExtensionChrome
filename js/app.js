document.addEventListener('DOMContentLoaded', init);
function init() {

    /** inputs */
    const inputHitomi = document.querySelector("#input-hitomi");
    const inputNhentai = document.querySelector("#input-nhentai");

    /**Abre una una pestaña en el navegador*/
    const btnSearch = document.querySelector("#btnSearch");
    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
        if (condition("hitomi")) {
            let win = window.open("https://hitomi.la/reader/" + inputHitomi.value + ".html#1", '_blank');
            win.focus();

        } else if (condition("nhentai")) {
            let win = window.open('https://nhentai.to/g/' + inputNhentai.value, '_blank');
            win.focus();
        }
    });
    
    //Copia al portapapeles la url presionando el Copy Link
    const btnCopy = document.querySelector("#btnCopy");
    btnCopy.addEventListener('click', function(e){
        e.preventDefault();
        if (condition("hitomi")) {
            navigator.clipboard.writeText("https://hitomi.la/reader/" + inputHitomi.value + ".html#1");
        } else if (condition("nhentai")) {
            navigator.clipboard.writeText('https://nhentai.to/g/' + inputNhentai.value);
        }
    });

    /**Muestra el enlace a la pagina */
    const btnLink = document.querySelector("#btnLink");
    const link = document.querySelector("#link");
    btnLink.addEventListener('click', function(e){
        e.preventDefault();
        if (condition("hitomi")) {
            link.href = "https://hitomi.la/reader/" + inputHitomi.value + ".html#1";
            link.innerHTML = "https://hitomi.la/reader/" + inputHitomi.value + ".html#1";

        } else if (condition("nhentai")) {
            link.href = 'https://nhentai.to/g/' + inputNhentai.value;
            link.innerHTML = 'https://nhentai.to/g/' + inputNhentai.value;
        }
    });

    /* Logos */
    const logoHitomi = document.querySelector("#container-logo-hitomi");
    const logoNhentai = document.querySelector("#container-logo-nhentai");

    /**Eventos para los logos */
    logoHitomi.addEventListener('click', function (){
        slide("#container-hitomi","#container-nhentai");
        disable_add_remove(inputHitomi, inputNhentai);
    });
    /**Eventos para los logos */
    logoNhentai.addEventListener('click', function (){
        slide("#container-nhentai","#container-hitomi");
        disable_add_remove(inputNhentai, inputHitomi);
    });

    /* Slidedown  y slideup*/ 
    function slide(container_1,container_2){
        const container1 = document.querySelector(container_1);
        const container2 = document.querySelector(container_2);

        if(container1.style.height==="" || container1.style.height==="0px"){
            container1.style.height = 30 +"px";
            container2.style.height = 0 +"px" ;
        }else{
            container1.style.height = 0 +"px";
        }
    }

    /**Desabilitar inputs y añadir la clase slided */
    function disable_add_remove(input1, input2){
        input1.disabled = false;
        input2.disabled = true;
        input1.classList.add("slided");
        input2.classList.remove("slided");
    }

    /* Condiciones para que los botones funciones*/
    function condition(name){
        switch (name) {
            case "hitomi":
                return (inputHitomi.value.length===5 || inputHitomi.value.length===7) && inputHitomi.classList.contains("slided");
            case "nhentai":
                return (inputNhentai.value.length === 5 || inputNhentai.value.length === 6) && inputNhentai.classList.contains("slided");    
        }
    }
}