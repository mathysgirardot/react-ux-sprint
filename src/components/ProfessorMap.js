import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import des images des professeurs
import antony from '../assets/profils/antony.png';
import julien from '../assets/profils/julien.png';
import orson from '../assets/profils/orson.png';
import joel from '../assets/profils/joel.png';
import antoine from '../assets/profils/antoine.png';
import jn from '../assets/profils/jean-nicolas.png';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const professors = [
  {
    id: 1,
    name: 'Antony',
    location: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    image: antony,
  },
  {
    id: 2,
    name: 'Julien',
    location: 'Lille',
    lat: 50.6292,
    lng: 3.0573,
    image: julien,
  },
  {
    id: 3,
    name: 'Orson',
    location: 'Marseille',
    lat: 43.2965,
    lng: 5.3698,
    image: orson,
  },
  {
    id: 4,
    name: 'Joël Fauvelet de Charbonière de Bourienne',
    location: 'Château de Versailles',
    lat: 48.8049, 
    lng: 2.1204, 
    image: joel,
  },
  {
    id: 5,
    name: 'Antoine',
    location: 'Toulouse',
    lat: 43.6047,
    lng: 1.4442,
    image: antoine,
  },
  {
    id: 6,
    name: 'Jean-nicolas',
    location: 'Lyon',
    lat: 45.7640,
    lng: 4.8357,
    image: jn,
  },
];

function ProfessorMap() {
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <MapContainer style={containerStyle} center={[48.8566, 2.3522]} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {professors.map((professor) => (
        <Marker
          key={professor.id}
          position={[professor.lat, professor.lng]}
          icon={customIcon}
        >
          <Popup>
            <strong>{professor.name}</strong>
            <br />
            {professor.location}
            <br />
            <img src={professor.image} alt={professor.name} width="100" />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ProfessorMap;
