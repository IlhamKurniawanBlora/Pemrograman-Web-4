document.getElementById('ktpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Mengambil nilai dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const alamat = document.getElementById('alamat').value;
    const status = document.getElementById('status').value;

    // Mendapatkan semua checkbox yang dipilih
    const minat = [];
    document.querySelectorAll('input[name="minat[]"]:checked').forEach(function(checkbox) {
        minat.push(checkbox.value);
    });

    const nomorKTP = document.getElementById('nomorKTP').value;

    // Membuat div baru untuk setiap data yang disubmit
    const displayDiv = document.getElementById('displayData');
    const newDataDiv = document.createElement('div');
    newDataDiv.classList.add('data-display'); // Tambahkan kelas CSS untuk styling
    newDataDiv.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Minat:</strong> ${minat.join(', ')}</p>
        <p><strong>Nomor KTP:</strong> ${nomorKTP}</p>
        <hr>
    `;

    // Menambahkan div baru ke dalam div utama
    displayDiv.appendChild(newDataDiv);

    // Reset form setelah submit
    document.getElementById('ktpForm').reset();
});