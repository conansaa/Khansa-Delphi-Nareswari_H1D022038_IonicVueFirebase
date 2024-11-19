# Vue Firebase

## Screenshot 
1. **Tampilan Awal**
- ![Lampiran Login](login.png)
2. **Pilih Email**
- ![Lampiran Email](pilihemail.png)
3. **Masuk**
- ![Lampiran Masuk](masuk.png)
4. **Home**
- ![Lampiran Home](home.png)
5. **Profile**
- ![Lampiran Profile](profile.png)

## Penjelasan
1. **Konfigurasi Firebase**
- Proyek dihubungkan dengan Firebase melalui file firebase.ts di dalam folder utils. File ini berisi konfigurasi Firebase dengan kunci API, domain otentikasi, ID proyek, dll.
- Untuk autentikasi, digunakan GoogleAuthProvider dari Firebase untuk mengautentikasi pengguna melalui akun Google.
2. **Proses Autentikasi Login**
- Fungsi loginWithGoogle menginisialisasi GoogleAuth dengan clientId serta meminta akses ke profil dan email pengguna.
- Pengguna kemudian masuk menggunakan Google, dan idToken yang diperoleh dari login Google digunakan untuk membuat kredensial dengan GoogleAuthProvider.credential(idToken).
- Kredensial ini digunakan untuk masuk ke Firebase Authentication menggunakan signInWithCredential(). Setelah autentikasi berhasil, objek pengguna (result.user) diperoleh dan disimpan dalam state (user.value).
3. **Menampilkan Data Profil Pengguna**
- Informasi pengguna seperti displayName (nama tampilan) dan email diambil dari objek user yang disimpan. Foto profil (photoURL) juga dapat diakses dari properti user.
- Halaman profil menampilkan data ini menggunakan ion-input yang diisi dengan data pengguna, dan elemen gambar (ion-avatar) menampilkan foto profil pengguna.
4. **Navigasi dan Pengamanan Rute**
- Sebelum mengakses rute tertentu seperti /home dan /profile, status autentikasi pengguna diperiksa. Jika pengguna belum login, mereka diarahkan ke halaman login.
- Jika pengguna sudah login dan mencoba mengakses halaman login, mereka akan diarahkan ke halaman beranda (/home).