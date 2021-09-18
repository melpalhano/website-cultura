let navbar = document.querySelector('.navbar'); //Retorna o primeiro elemento dentro do documento
    document.querySelector('#pontos-turisticos-sm').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

