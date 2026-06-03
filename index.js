import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk mengizinkan akses dari aplikasi Frontend (CORS)
app.use(cors());
app.use(express.json());

// Base Route - Mengembalikan response Hello World dan Metadata Kelompok
app.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World! API Sistem Pendaftaran Mahasiswa Baru Berbasis Web (Kelompok 3) berhasil terhubung.",
    meta: {
      project: "Sistem Pendaftaran Mahasiswa Baru Berbasis Web",
      kelompok: 3,
      tim: {
        ui_ux: "Fanzhi Sukma",
        frontend: "Fahri Ahmad Subhakti",
        backend: "Tajul Fazarie"
      }
    }
  });
});

// Endpoint spesifik untuk testing API
app.get('/api/hello', (req, res) => {
  res.status(200).json({
    message: "Hello World dari API Backend Kelompok 3!"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server Backend berjalan dengan lancar di http://localhost:${PORT}`);
});
