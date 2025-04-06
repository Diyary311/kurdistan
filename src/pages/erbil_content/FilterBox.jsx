import React, { useState } from 'react';

function FilterBox() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-64 rounded-lg border border-white p-4 shadow-lg">
      {/* Title */}
      <fieldset>
        <legend className="mb-2 text-lg font-semibold">
          Establishment Type
        </legend>

        {/* Checkboxes */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-green-600"
              defaultChecked
            />
            <span>Kurdish Food</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span>Milde Estern food</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span>Arabic food</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span>Italina&Europe Food</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span>Coffee & Tea</span>
          </label>

          {showMore && (
            <>
              <hr />
              <legend className="mt-2 text-lg font-semibold">Great For:</legend>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-600"
                />
                <span>Family&children</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-600"
                />
                <span>Large Group</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-600"
                />
                <span>Bussiness meeting</span>
              </label>
            </>
          )}

          {/* Show More Button */}
          <button
            className="mt-2 text-sm font-semibold text-blue-600 transition-all duration-500 hover:bg-transparent hover:tracking-widest hover:text-green-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default FilterBox;
