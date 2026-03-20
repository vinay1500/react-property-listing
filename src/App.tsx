import React, { useState } from 'react';
import { PropertyProvider, useProperty } from './contexts/PropertyContext';
import { FilterBar } from './components/FilterBar';
import { PropertyCard } from './components/PropertyCard';
import { AddPropertyForm } from './components/AddPropertyForm';
import { DetailsPanel } from './components/DetailsModal';
import './index.css'; // ensure our styles are loaded

const Dashboard: React.FC = () => {
  const { filtered, darkMode, toggleDarkMode } = useProperty();
  const [selected, setSelected] = useState<typeof filtered[0] | null>(null);

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <div className="container">
        <header className="header">
          <h1>Mini Property Listing Dashboard</h1>
          <button className="btn" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <div className="filter-section">
          <h2>Property Listings</h2>
          <FilterBar />
        </div>

        <div className="card-grid">
          {filtered.map(p => (
            <PropertyCard key={p.id} property={p} onView={setSelected} />
          ))}
        </div>

        <div className="bottom-section">
          <section className="form-section">
            <h3>Add Property</h3>
            <AddPropertyForm />
          </section>

          <section className="view-details">
            <h3>View Details</h3>
            <DetailsPanel property={selected} />
          </section>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <PropertyProvider>
    <Dashboard />
  </PropertyProvider>
);

export default App;
