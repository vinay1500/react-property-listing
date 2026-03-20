import React from 'react';
import { Property } from '../types';

interface Props {
  property: Property;
  onView(p: Property): void;
}

export const PropertyCard: React.FC<Props> = ({ property, onView }) => (
  <div className="card">
    <img src={property.imageUrl} alt={property.name} />
    <div className="card-content">
      <h3>{property.name}</h3>
      <p>{property.type} — {property.location}</p>
      <p>₹{property.price.toLocaleString()}</p>
      <button onClick={() => onView(property)}>View</button>
    </div>
  </div>
);
