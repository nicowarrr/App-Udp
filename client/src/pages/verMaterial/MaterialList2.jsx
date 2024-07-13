import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import logo from "../../../src/logo.jpg";
import { useLocation, Link } from 'react-router-dom';

function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const { state } = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchMaterials();
    if (state && state.userName) {
      setUserName(state.userName);
    }
  }, [state]);

  const fetchMaterials = async () => {
    const response = await axios.get('http://localhost:3001/materials');
    setMaterials(response.data);
  };

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `http://localhost:3001/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ marginRight: '20px', width: '60px' }} />
          <Typography variant="h6" style={{ color: 'white' }}>Materiales</Typography>
          <Typography variant="h6" style={{ color: 'white', marginLeft: 'auto' }}>{userName}</Typography>
        </Toolbar>
      </AppBar>
      <Link to="/subida" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary">Subir Archivo</Button>
      </Link>
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom style={{ color: 'black' }}>Lista de Materiales</Typography>
          <div className="material-list">
            {materials.map(material => (
              <Box className="material-card" key={material.id} p={2} mb={2} border={1} borderRadius={4} boxShadow={3} style={{ backgroundColor: 'white' }}>
                <Typography variant="body1" style={{ color: 'black' }}>{material.name}</Typography>
                <img src={`http://localhost:3001/foto.png`} alt={material.name} style={{ width: '100px' }} />
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<DownloadIcon />} 
                    onClick={() => handleDownload(material.filename)}
                  >
                    Descargar
                  </Button>
                </Box>
              </Box>
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
}

export default MaterialList;



