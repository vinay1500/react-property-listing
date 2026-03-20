import React from 'react';
import { Property } from '../types';

interface Props {
  property: Property | null;
}

export const DetailsPanel: React.FC<Props> = ({ property }) => {
  if (!property) {
    return <p>Select a property to view its details.</p>;
  }
  const { latitude, longitude } = property;
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;


  return (
    <>
      <img src={property.imageUrl} alt={property.name} />
      <h3>{property.name}</h3>
      <p>{property.type} — {property.location}</p>
      <p>₹{property.price.toLocaleString()}</p>
      <p style={{ marginTop: '0.5rem' }}>{property.description}</p>
      <div style={{ marginTop: '1rem' }}>
        <iframe
          title="property-map"
          src={mapSrc}
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '4px' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
};
