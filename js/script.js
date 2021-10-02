var btns = document.querySelectorAll('.listaDeDestaque-slider-item');

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeDestaque-slider-item--ativo')
    })

    this.classList.add('listaDeDestaque-slider-item--ativo')
  })
})

