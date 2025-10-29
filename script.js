let angkaRahasia = Math.floor(Math.random() * 10) + 1;
console.log("Angka rahasia:", angkaRahasia); // buat ngecek di console

const input = document.getElementById("tebakan");
const pesan = document.getElementById("pesan");
const cekBtn = document.getElementById("cekBtn");
const ulangBtn = document.getElementById("ulangBtn");

cekBtn.addEventListener("click", function() {
  const tebakan = parseInt(input.value);

  if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    pesan.textContent = "Masukkan angka 1 - 10 ya bro😅";
    pesan.style.color = "orange";
    return;
  }

  if (tebakan === angkaRahasia) {
    pesan.textContent = "🎉 Selamat bro! Kamu benar 😅 ";
    pesan.style.color = "green";
  } else if (tebakan < angkaRahasia) {
    pesan.textContent = "Terlalu kecil 😅";
    pesan.style.color = "red";
  } else {
    pesan.textContent = "Terlalu besar 😅";
    pesan.style.color = "red";
  }
});

ulangBtn.addEventListener("click", function() {
  angkaRahasia = Math.floor(Math.random() * 10) + 1;
  pesan.textContent = "";
  input.value = "";
  console.log("Angka baru:", angkaRahasia);
});