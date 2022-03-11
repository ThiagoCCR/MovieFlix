function changeBackground(){

    if (document.getElementById("options").value === "harryPotter"){
        document.body.style.backgroundImage = "url('https://gkpb.com.br/wp-content/uploads/2021/12/gkpb-cinemark-reexibe-harry-potter.jpg')";
        // main.style.fontFamily = "font-family: 'Harry Potter', sans-serif;";
    }
    else if (document.getElementById("options").value === "madrugadaDosMortos"){
        document.body.style.backgroundImage = "url('https://cinemacomrapadura.com.br/imagens/2018/11/20181107-anoitedosmortosvivos.sequenciadooriginal.jpg')";
        // main.style.fontFamily = "font-family: 'Harry Potter', sans-serif;";
    }
    else {
        document.body.style.backgroundImage = "url('https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg')";
        // main.style.fontFamily = "font-family: 'Harry Potter', sans-serif;";
    }
}

function getMovie(){
    
    if (document.getElementById("options").value === "harryPotter"){
        document.imagem.style.backgroundImage = "url('https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg')";
        //mudar sinopse
}
    else if (document.getElementById("options").value === "madrugadaDosMortos"){
        document.body.style.backgroundImage = "url('https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg')";
        //mudar sinopse
}
    else {
        document.body.style.backgroundImage = "url('https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg')";
        //mudar sinopse
}
}
