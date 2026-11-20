function exibirResolucaoTela() {
    var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    var resolucaoTexto = largura + " x " + altura;
  
    document.getElementById("resolucao-texto").textContent = resolucaoTexto;
  }
  
  // Chamar a função quando a página carregar
  window.onload = exibirResolucaoTela;
  
  // Chamar a função quando a janela for redimensionada
  window.onresize = exibirResolucaoTela