function realizarDivisao(numero1, numero2) {
  if (numero2 === 0) {
      throw new Error("Não é possível dividir por zero.");
  }
  return numero1 / numero2;
}

function calcularDivisao() {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

  try {
      const resultado = realizarDivisao(numero1, numero2);
      // Exibir o resultado
      document.getElementById("resultado").innerText = `O resultado da divisão é: ${resultado}`;
      // Limpar a mensagem de erro se houver
      document.getElementById("mensagemErro").innerText = "";
  } catch (erro) {
      // Exibir a mensagem de erro
      document.getElementById("mensagemErro").innerText = `Erro: ${erro.message}`;
  } finally {
      // Exibir a mensagem de finalização
      document.getElementById("mensagemFinalizada").innerText = "Operação finalizada.";
  }
}
