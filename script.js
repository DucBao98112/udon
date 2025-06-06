document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const menuItem = document.getElementById("menuItem").value;

  document.getElementById("confirmation").textContent =
    `${name}様、${menuItem} のご注文を承りました。ありがとうございます！`;
});
  function closeAd(className) {
    const ad = document.querySelector('.' + className);
    if (ad) {
      ad.style.display = 'none';
    }
  }
  
  // Mở/đóng hộp đánh giá
  document.getElementById('toggleReview').onclick = function () {
    const box = document.getElementById('reviewBox');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  };

  // Xử lý gửi đánh giá
  document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('username').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();

    if (!name || !comment) return;

    const stars = '★★★★★☆☆☆☆☆'.slice(5 - rating, 10 - rating);

    const newReview = document.createElement('div');
    newReview.className = 'review';
    newReview.innerHTML = `
      <strong>${name}</strong><br>
      <div class="stars">${stars}</div>
      <p>${comment}</p>
    `;

    document.getElementById('review-list').appendChild(newReview);
    this.reset();
  });

