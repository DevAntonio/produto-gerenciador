// script.js
document.getElementById("categoria").addEventListener("change", function() {
    // Esconde todos os conteúdos
    const conteudos = document.querySelectorAll(".conteudo");
    conteudos.forEach(conteudo => conteudo.style.display = "none");
  
    // Exibe o conteúdo selecionado
    const categoriaSelecionada = this.value;
    const conteudoSelecionado = document.getElementById(categoriaSelecionada);
    conteudoSelecionado.style.display = "block";
  });
  
  // Exibe o conteúdo da categoria selecionada inicialmente
  window.onload = function() {
    const categoriaSelecionada = document.getElementById("categoria").value;
    const conteudoSelecionado = document.getElementById(categoriaSelecionada);
    conteudoSelecionado.style.display = "block";
  };
  