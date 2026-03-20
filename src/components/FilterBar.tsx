import React from 'react';
import { useProperty } from '../contexts/PropertyContext';

const types = ['All', 'House', 'Apartment', 'Condo', 'Villa'];

export const FilterBar: React.FC = () => {
  const { filterType, setFilterType, searchQuery, setSearchQuery } = useProperty();
  return (
    <div className="filter-bar">
      <select
        value={filterType}
        onChange={e => setFilterType(e.target.value)}
      >
        {types.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search by name…"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
