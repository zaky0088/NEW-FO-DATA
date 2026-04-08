let data = [];

function tambahData() {
  let jalur = document.getElementById("jalur").value;
  let odp = document.getElementById("odp").value;
  let core = parseInt(document.getElementById("core").value);
  let pot = parseInt(document.getElementById("pot").value);
  let status = document.getElementById("status").value;

  data.push({ jalur, odp, core, pot, status });

  render();
}

function render() {
  let tabel = document.getElementById("tabelData");
  tabel.innerHTML = "";

  let totalCore = 0;
  let jalurPutus = 0;

  data.forEach((d, i) => {
    totalCore += d.core;
    if (d.status === "Maintenance") jalurPutus++;

    tabel.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${d.jalur}</td>
        <td>${d.odp}</td>
        <td>${d.core}</td>
        <td>${d.pot}</td>
        <td>${d.status}</td>
        <td>
          <button onclick="hapus(${i})">Hapus</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("totalJalur").innerText = data.length;
  document.getElementById("totalCore").innerText = totalCore;
  document.getElementById("jalurPutus").innerText = jalurPutus;
}

function hapus(i) {
  data.splice(i, 1);
  render();
}

function cariData() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(keyword) ? "" : "none";
  });
}
