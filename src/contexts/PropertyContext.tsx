import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from 'react';
  import { Property } from '../types';
  
  interface ProviderProps {
    children: ReactNode;
  }
  
  interface PropertyContextType {
    properties: Property[];
    filtered: Property[];
    filterType: string;
    searchQuery: string;
    darkMode: boolean;
    setFilterType(type: string): void;
    setSearchQuery(q: string): void;
    addProperty(p: Omit<Property, 'id'>): void;
    toggleDarkMode(): void;
  }
  
  const PropertyContext = createContext<PropertyContextType>(null!);
  export const useProperty = () => useContext(PropertyContext);
  

  
  export const PropertyProvider: React.FC<ProviderProps> = ({ children }) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filtered, setFiltered] = useState<Property[]>([]);
    const [filterType, setFilterType] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [darkMode, setDarkMode] = useState<boolean>(false);
  
    // Fetch data on mount
    useEffect(() => {
      fetch('/mock-api/properties.json')
        .then(res => res.json())
        .then((data: Property[]) => {
          setProperties(data);
          setFiltered(data);
        });
    }, []);
  
    // Re‑filter on changes
    useEffect(() => {
      let list = [...properties];
      if (filterType !== 'All') {
        list = list.filter(p => p.type === filterType);
      }
      if (searchQuery) {
        list = list.filter(p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFiltered(list);
    }, [properties, filterType, searchQuery]);
  
    const addProperty = (p: Omit<Property, 'id'>) => {
      const newProp: Property = { ...p, id: Date.now().toString() };
      setProperties(prev => [newProp, ...prev]);
    };
  
    const toggleDarkMode = () => setDarkMode(dm => !dm);
  
    return (
      <PropertyContext.Provider
        value={{
          properties,
          filtered,
          filterType,
          searchQuery,
          darkMode,
          setFilterType,
          setSearchQuery,
          addProperty,
          toggleDarkMode,
        }}
      >
        {children}
      </PropertyContext.Provider>
    );
  };
  