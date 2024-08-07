const express = require("express");
const app = express();
const multer = require('multer');
const mysql = require("mysql2");
const cors = require("cors");
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
// Configuración de almacenamiento para Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
const upload = multer({ storage: storage });
  

  
//app.use(cors());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nico022001",
    database: "AppUdp"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post("/create", (req, res) => {
    console.log("Request: ", req.body);
    const { rol, Mail, Contraseña, Nombre } = req.body;
    
    db.query('INSERT INTO Usuarios (nombre, mail, password, rol) VALUES (?, ?, ?, ?)', [Nombre, Mail, Contraseña, rol], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ error: "Error registering user" });
        } else {
            res.send("Empleado registrado con exito!!");
        }
    });
});

app.post("/login", (req, res) => {
  console.log("Request: ", req.body);
  const { Mail, Contraseña } = req.body;
  const query = "SELECT nombre, rol FROM Usuarios WHERE mail = ? AND password = ?";

  db.query(query, [Mail, Contraseña], (err, results) => {
      if (err) {
          console.error('Error during login query:', err);
          return res.status(500).send({ error: "Internal server error" });
      }
      if (results.length > 0) {
          const user = results[0];
          res.send({ success: true, message: "Login successful", role: user.rol, nombre: user.nombre });
      } else {
          res.send({ success: false, message: "Invalid credentials" });
      }
  });
});



// Ruta para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
    console.log("Request: ", req.body,"+",req.file);
    const { filename } = req.file;
    const { documentName } = req.body;
  
    const query = 'INSERT INTO materials (name, filename) VALUES (?, ?)';
    db.query(query, [documentName, filename], (err, result) => {
      if (err) throw err;
      res.send({ message: 'Archivo subido y guardado en la base de datos' });
    });
  });
  
  // Ruta para obtener archivos
app.get('/materials', (req, res) => {
    const query = 'SELECT * FROM materials';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

app.delete('/materials/:id', (req, res) => {
    const { id } = req.params;
    const querySelect = 'SELECT filename FROM materials WHERE id = ?';
    const queryDelete = 'DELETE FROM materials WHERE id = ?';
  
    db.query(querySelect, [id], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        const filename = results[0].filename;
        const filepath = path.join(__dirname, 'uploads', filename);
  
        fs.unlink(filepath, err => {
          if (err) throw err;
  
          db.query(queryDelete, [id], (err, result) => {
            if (err) throw err;
            res.send({ message: 'Archivo eliminado' });
          });
        });
      } else {
        res.status(404).send({ message: 'Archivo no encontrado' });
      }
    });
  });

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});
