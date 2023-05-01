let amountText;
function init() {
  amountText = document.getElementById("amount");
  fetch("https://rojo-api.tiendacrypto.com/v1/cai")
    .then((response) => response.json())
    .then((response) => {
      const amount = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(
        response.amount * 0.05
      );
      amountText.innerHTML = amount;
    });
}

document.addEventListener("DOMContentLoaded", init());
