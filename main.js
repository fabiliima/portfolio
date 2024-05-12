function sendMessage() {
  alert(
    "Obrigada por entrar em contato, assim que possível retorno sua mensagem!"
  );
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
