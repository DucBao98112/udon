document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const menuItem = document.getElementById("menuItem").value;

  document.getElementById("confirmation").textContent =
    `${name}様、${menuItem} のご注文を承りました。ありがとうございます！`;
});
