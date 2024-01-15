"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from ".";

interface Props {
  selectedType: string | null ;
  setSelectedType: Dispatch<SetStateAction<string | null >>;
}

const types = [
  { value: "qr", label: "Cobros con QR" },
  { value: "card", label: "Cobros con tarjeta" },
  { value: "cash", label: "Cobros con efectivo" },
];

export const Dropdown = ({ selectedType, setSelectedType }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (value: string) => {
    const updatedCheckboxes = selectedCheckboxes.includes(value)
      ? selectedCheckboxes.filter((checkbox) => checkbox !== value)
      : [...selectedCheckboxes, value];
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const applyFilters = () => {
    const selectedValuesString = selectedCheckboxes.join(",");
    setSelectedType(selectedValuesString);
  };

  const clearFilters = () => {
    setSelectedType('');
    setSelectedCheckboxes([]);
  };

  return (
    <div className="relative inline-block text-left py-4">
      <div>
        <button
          onClick={toggleButton}
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md py-2 text-base font-semibold text-white shadow-sm h-12 px-6"
          style={{ backgroundColor: "#3483FA" }}
          id="dropdown-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Filtros
          <svg
            className="-mr-1 h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute right-0 z-10 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-4 pb-4"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {types.map((type) => (
              <div key={type.value} className="flex items-center h-16">
                <input
                  type="checkbox"
                  className="focus:ring-gray-500 h-4 w-4"
                  id={type.value}
                  value={type.value}
                  checked={selectedCheckboxes.includes(type.value)}
                  onChange={() => handleCheckboxChange(type.value)}
                />
                <label htmlFor={type.value} className="ml-6 text-gray-700">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <Button
              title="Aplicar"
              style={{ marginRight: "10px" }}
              action={applyFilters}
            />
            <Button
              title="Limpiar"
              typeButton="tertiary"
              action={clearFilters}
            />
          </div>
        </div>
      )}
    </div>
  );
};
