import React, { useState } from 'react';

const allTypes = [
  'All',
  'Italian',
  'European',
  'Arabic',
  'Kurdish',
  'Turkish',
  'Coffee'
];

function FilterBox({ onFilterChange }) {
  const [selectedType, setSelectedType] = useState('All');

  const handleChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    // send empty string for “All” so parent knows no filter
    onFilterChange(type === 'All' ? '' : type);
  };

  return (
    <div className="w-64 rounded-lg border border-white p-4 shadow-lg">
      <fieldset>
        <legend className="mb-2 text-lg font-semibold">
          Establishment Type
        </legend>
        <div className="space-y-2">
          {allTypes.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="radio"
                name="restaurant-type"
                value={type}
                checked={selectedType === type}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default FilterBox;
