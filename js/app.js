document.addEventListener('DOMContentLoaded', init);
function init() {

    /** inputs */
    const inputHitomi = document.querySelector("#input-hitomi");
    const inputNhentai = document.querySelector("#input-nhentai");

    const btnSearch = document.querySelector("#btnSearch");
    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
        if (inputHitomi.value.length === 5 || inputHitomi.value.length === 7) {
            let win = window.open("https://hitomi.la/reader/" + inputHitomi.value + ".html#1", '_blank');
            win.focus();

        } else if (inputNhentai.value.length == 5 || inputNhentai.value.length == 6) {
            let win = window.open('https://nhentai.to/g/' + inputNhentai.value, '_blank');
            win.focus();
        }
    });

    
    //Copia al portapapeles la url presionando el Copy Link
    const btnCopy = document.querySelector("#btnCopy");
    btnCopy.addEventListener('click', function(e){
        e.preventDefault();
        if (inputHitomi.value.length === 5 || inputHitomi.value.length === 7) {
            navigator.clipboard.writeText("https://hitomi.la/reader/" + inputHitomi.value + ".html#1");
        } else if (inputNhentai.value.length == 5 || inputNhentai.value.length == 6) {
            navigator.clipboard.writeText('https://nhentai.to/g/' + inputNhentai.value);
        }
    });


    /* Logos */
    const logoHitomi = document.querySelector("#container-logo-hitomi");
    const logoNhentai = document.querySelector("#container-logo-nhentai");

    /**Eventos para los logos */
    logoHitomi.addEventListener('click', function (){
        slide("#container-hitomi","#container-nhentai");
        inputHitomi.disabled = false;
        inputNhentai.disabled = true;
    });
    /**Eventos para los logos */
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