// Mengambil elemen form dan pesan sukses
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Fungsi untuk menampilkan error
function showError(inputElement, errorElementId) {
    const errorText = document.getElementById(errorElementId);
    
    // 1. Munculkan teks error
    errorText.classList.remove('hidden');
    
    // 2. Ubah border input menjadi merah 
    inputElement.classList.add('border-red-500');
    inputElement.classList.remove('border-gray-200'); // Hapus border default jika perlu
}

// Fungsi untuk membersihkan error (Reset ke tampilan awal)
function clearErrors() {
    // Sembunyikan pesan sukses
    successMessage.classList.add('hidden');

    // Sembunyikan semua teks error
    const errorTexts = document.querySelectorAll('.text-red-500');
    errorTexts.forEach(text => text.classList.add('hidden'));

    // Hapus border merah dari semua input dan kembalikan ke default
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('border-red-500');
    });
}

// Event Listener saat Submit
contactForm.addEventListener('submit', function(event) {
    // A. Mencegah Reload
    event.preventDefault();

    // Reset error sebelum validasi ulang
    clearErrors();

    // Ambil elemen input
    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const pesanInput = document.getElementById('pesan');

    let isValid = true;

    // B. Logika Validasi
    // 1. Cek Nama
    if (namaInput.value.trim() === "") {
        showError(namaInput, 'error-nama');
        isValid = false;
    }

    // 2. Cek Email
    if (emailInput.value.trim() === "") {
        showError(emailInput, 'error-email');
        isValid = false;
    }

    // 3. Cek Pesan
    if (pesanInput.value.trim() === "") {
        showError(pesanInput, 'error-pesan');
        isValid = false;
    }

    // C. Jika Berhasil
    if (isValid) {
        // Tampilkan pesan sukses (Hijau)
        successMessage.classList.remove('hidden');
        
        // Kosongkan form
        contactForm.reset();

        console.log("Form berhasil dikirim!");
    }
});