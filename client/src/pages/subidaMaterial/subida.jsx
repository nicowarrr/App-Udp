import React, { useState } from 'react';
import axios from 'axios';
import './subida.css';
import logo from '../../../src/logo.jpg';
import { Button, TextField } from '@mui/material';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [documentName, setDocumentName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDocumentNameChange = (e) => {
    setDocumentName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentName1', documentName);
    formData.append('documentName2', documentName);

    await axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    alert('Archivo subido correctamente');
  };

  return (
    <div className="App">
      <div className="Datos">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Iniciar Sesión</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="datos">
            <TextField
              label="Nombre del Documento"
              variant="outlined"
              value={documentName}
              onChange={handleDocumentNameChange}
              required
              fullWidth
              margin="normal"
            />
            <Button
              variant="outlined"
              component="label"
              fullWidth
              margin="normal"
              className='button'
            >
              Seleccionar Archivo
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                required
              />
            </Button>
            <Button type="submit" className='button' variant="outlined" color="primary" fullWidth>
              Subir
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadForm;

