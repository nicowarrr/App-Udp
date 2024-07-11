import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MaterialList.css'
function MaterialList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    const response = await axios.get('http://localhost:3001/materials');
    setMaterials(response.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este archivo?')) {
      await axios.delete(`http://localhost:3001/materials/${id}`);
      fetchMaterials();
    }
  };

  return (
    <div className="material-list">
      {materials.map(material => (
        <div className="material-card" key={material.id}>
          <p>{material.name}</p>
          <img src={`http://localhost:3001/${material.filename}`} alt={material.name} style={{ width: '100px' }} />
          <div>
             <a href={`http://localhost:3001/${material.filename}`} download>
              <button>Descargar</button>
            </a>
            <button onClick={() => handleDelete(material.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MaterialList;

