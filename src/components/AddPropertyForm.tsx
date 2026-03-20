import React, { useState } from 'react';
import { useProperty } from '../contexts/PropertyContext';
import { Property } from '../types';

export const AddPropertyForm: React.FC = () => {
  const { addProperty } = useProperty();
  const [form, setForm] = useState<Omit<Property, 'id'>>({
    name: '',
    type: 'House',
    price: 0,
    location: '',
    description: '',
    imageUrl: '',
    latitude: 0,
    longitude: 0,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProperty(form);
    setForm({
      name: '',
      type: 'House',
      price: 0,
      location: '',
      description: '',
      imageUrl: '',
      latitude: 0,
      longitude: 0,
    });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-2">
      <input
        placeholder="Name"
        className="form-field-padding"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        required
      />
      <input
        placeholder="Location"
        className="form-field-padding"
        value={form.location}
        onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
        required
      />
      <input
        placeholder="Image URL"
        className="form-field-padding"
        value={form.imageUrl}
        onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
        required
      /><br></br>
      <select
        value={form.type}
        className="form-field-padding"
        onChange={e =>
          setForm(f => ({ ...f, type: e.target.value as Property['type'] }))
        }
      >
        <option>House</option>
        <option>Apartment</option>
        <option>Condo</option>
        <option>Villa</option>
      </select><br></br>
      <input
        type="number"
        placeholder="Price"
        className="form-field-padding"
        value={form.price}
        onChange={e => setForm(f => ({ ...f, price: +e.target.value }))}
        required
      />
      <textarea
        placeholder="Description"
        className="form-field-padding"
        value={form.description}
        onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
        required
      />
      <input
        type="number"
        placeholder="Latitude"
        className="form-field-padding"
        value={form.latitude}
        onChange={e =>
          setForm(f => ({ ...f, latitude: parseFloat(e.target.value) }))
        }
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        className="form-field-padding"
        value={form.longitude}
        onChange={e =>
          setForm(f => ({ ...f, longitude: parseFloat(e.target.value) }))
        }
        required
      /><br></br>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};
