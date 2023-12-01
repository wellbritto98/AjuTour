function submitForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var destination = document.getElementById("destination").value;
  var departureDate = document.getElementById("departureDate").value;
  var returnDate = document.getElementById("returnDate").value;
  var numTravelers = document.getElementById("numTravelers").value;

  localStorage.setItem("Nome Completo", fullName);
  localStorage.setItem("E-mail", email);
  localStorage.setItem("Telefone", phone);
  localStorage.setItem("Destino", destination);
  localStorage.setItem("Data de partida", departureDate);
  localStorage.setItem("Data de retorno", returnDate);
  localStorage.setItem("Número de viajantes", numTravelers);

  alert("Cadastro realizado com sucesso!");
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("departureDate").value = "";
  document.getElementById("returnDate").value = "";
  document.getElementById("numTravelers").value = "";

}

