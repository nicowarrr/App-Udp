import React, { useState } from 'react';
import axios from 'axios';
import './subida.css';
import logo from '../../../src/logo.jpg';
import { Button, TextField, Container, Box, Typography, AppBar, Toolbar, LinearProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [documentName, setDocumentName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

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
    formData.append('documentName', documentName);

    setUploading(true);
    await axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      }
    });

    setUploading(false);
    setProgress(0);
    alert('Archivo subido correctamente');
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ marginRight: '20px', width: '60px' }} />
          <Typography variant="h6" style={{ color: 'white' }}>Subida de Archivos</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4} p={3} border={1} borderRadius={4} boxShadow={3} style={{ backgroundColor: 'white' }}>
          <Typography variant="h4" gutterBottom style={{ color: 'black', textAlign: 'center' }}>Subir Archivo</Typography>
          <form onSubmit={handleSubmit}>
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
              variant="contained"
              component="label"
              fullWidth
              startIcon={<CloudUploadIcon />}
              style={{ marginBottom: '16px' }}
            >
              Seleccionar Archivo
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                required
              />
            </Button>
            {uploading && <LinearProgress variant="determinate" value={progress} />}
            <Button type="submit" className="button" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
              Subir
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default UploadForm;

