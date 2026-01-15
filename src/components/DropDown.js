import React, { useState, useRef, useEffect } from "react";
const SimpleDropdown = ({ options = [], value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative w-48">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-3 py-2 bg-white border rounded
                   flex justify-between items-center
                   hover:bg-gray-50"
      >
        <span>{selected?.label ?? "Select"}</span>
        <span className="text-gray-400">▾</span>
      </button>

      {open && (
        <div className="absolute z-10 w-full bg-white border rounded shadow">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2
                         hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;
