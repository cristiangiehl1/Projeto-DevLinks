function toggleMode() {    
    // if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    // } else {
    //    html.classList.add('light')
    // }
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    // substituir a tag img
    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adiciona a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Cristian Giehl sorrindo, \
                        de suéter cinza \
                        sem barba e fundo escuro')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Cristian Giehl sério, \
                        usando óculos e camisa social \
                        com suéter cinza, barba e fundo branco');
    }
}