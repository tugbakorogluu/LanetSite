document.getElementById("searchIcon").addEventListener("click", function () {
  const stops = [
    "DURAK : ZAFER DURAĞI | DURAK NO : 1123",
    "DURAK : KÜLTÜR DURAĞI | DURAK NO : 1123",
    "DURAK : ZAFER DURAĞI | DURAK NO : 47",
    "DURAK : KONEVİ DURAĞI | DURAK NO : 133",
    "DURAK : MEVLANA DURAĞI | DURAK NO : 120",
    "DURAK : ÇINAR DURAĞI | DURAK NO : 1101",
    "DURAK : GÜL DURAĞI | DURAK NO : 1102",
    "DURAK : YILDIZ DURAĞI | DURAK NO : 1127",
    "DURAK : MENEKŞE DURAĞI | DURAK NO : 1160",
    "DURAK : MİLLET | DURAK NO : 2223",
    "DURAK : HAVZAN DURAĞI | DURAK NO : 1103",
  ];

  const durakSelect = document.getElementById("durakSelect");
  durakSelect.innerHTML = ""; // Eski seçenekleri temizler

  stops.forEach((stop) => {
    const option = document.createElement("option");
    option.textContent = stop;
    option.value = stop;
    durakSelect.appendChild(option);
  });

  durakSelect.style.display = "block"; // Select menüsünü görünür yapar
});

document.getElementById("durakSelect").addEventListener("change", function () {
  const selectedStop = this.value;
  const stopNameElement = document.getElementById("stopName");

  // Seçilen durak ismini siyah kutuda günceller
  stopNameElement.innerHTML = selectedStop;
});
