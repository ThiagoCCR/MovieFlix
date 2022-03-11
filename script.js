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
        document.getElementById('imagem').style.backgroundImage="url('https://m.media-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg')"
        imageText.innerHTML = "";
        sinopse.innerHTML = `Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger. <br>
        <br>
        Data de lançamento: 23 de novembro de 2001 (Brasil)<br>
        <br>
        Diretor: Chris Columbus<br>
        <br>
        Séries de filmes: Harry Potter<br>
        <br>
        Lançamento em DVD: 11 de maio de 2002 (Reino Unido)<br>
        <br>
        Roteiro: Steve Kloves<br>
        <br>
        Idioma: Inglês`
}
    else if (document.getElementById("options").value === "madrugadaDosMortos"){
        document.getElementById('imagem').style.backgroundImage="url('https://s3.amazonaws.com/criterion-production/films/5d825de608ea6993b42be3c972bab02f/O4mn7lXmAaCzdLtUmSqBHAKHJBQW3P_large.jpg')";
        imageText.innerHTML = "";
        sinopse.innerHTML = `Ben e Barbara devem lutar para sobreviver quando os mortos levantam de seus túmulos para se alimentarem dos vivos. Eles encontram refúgio em uma fazenda, mas terão de fugir antes que os zumbis os alcancem. <br>
        <br>
        Data de lançamento: 31 de outubro de 1968 (Brasil)<br>
        <br>
        Diretor: George A. Romero<br>
        <br>
        Continuação: Despertar dos Mortos<br>
        <br>
        Orçamento: 114.000 USD<br>
        <br>
        Produção: Russell Streiner; Karl Hardman`
}
    else {
        document.getElementById('imagem').style.backgroundImage="url('https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg')";
        imageText.innerHTML = "";
        sinopse.innerHTML = `Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.<br>
        <br>
        Data de lançamento: 1 de janeiro de 2002 (Brasil)
        <br>
        Diretor: Peter Jackson
        <br>
        Continuação: O Senhor dos Anéis: As Duas Torres
        <br>
        Orçamento: US$ 90 milhões
        <br>
        Adaptação de: O Senhor dos Anéis, A Sociedade do Anel
        `
}
}
