// src/components/ProfessorMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// eslint-disable-next-line no-unused-vars
import { icon, Icon } from 'leaflet'; // Pour personnaliser l'icône des marqueurs
import 'leaflet/dist/leaflet.css';

// Liste des professeurs avec leurs informations
const professors = [
  {
    id: 1,
    name: 'Joël Fauvelet de Charbonière de Bourienne',
    location: 'Château de Versailles',
    lat: 48.804864,
    lng: 2.120355,
  },
  {
    id: 2,
    name: 'Corto Dufour',
    location: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: 3,
    name: 'Laurent Plageant',
    location: 'Paris 16 ème',
    lat: 48.8566,
    lng: 2.295,
  },
];

// Taille de la carte
const containerStyle = {
  width: '100%',
  height: '400px',
};

function ProfessorMap() {
  const customIcon = new Icon({
    iconUrl: 'https://example.com/marker-icon.png', // Optionnel: ajoute une icône personnalisée
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer style={containerStyle} center={[48.8566, 2.3522]} zoom={12}>
      {/* OpenStreetMap TileLayer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {professors.map((professor) => (
        <Marker
          key={professor.id}
          position={{ lat: professor.lat, lng: professor.lng }}
          icon={customIcon} // Ajouter une icône personnalisée
        >
          <Popup>
            <strong>{professor.name}</strong>
            <br />
            {professor.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ProfessorMap;