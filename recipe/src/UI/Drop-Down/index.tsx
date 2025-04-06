import { useState, useEffect } from "react";
import ChevDownIcon from "../../assets/icons/ChecDownIcon";

interface DropdownProps {
  options: string[]; // Array of options to display in the dropdown
  className?: string;
}

const Dropdown = ({ options, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility
  const [selectedOption, setSelectedOption] = useState(""); // Stores the selected option

  // Set the first option as the default selected value when the component mounts
  useEffect(() => {
    if (options && options.length > 0) {
      setSelectedOption(options[0]); // Set the first option (index 0) as the default
    }
  }, [options]); // Run this effect when the options array changes

  // Handle option selection
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className={`relative ${className}`}>
      {/* Input field with dropdown icon */}
      <div
        className="flex items-center justify-between p-12 rounded-8 border dark:border-input-border-dark dark:bg-input-bg-dark transition-all cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown when clicked
      >
        <span>{selectedOption}</span> {/* Removed the "Select an option" fallback */}
        <ChevDownIcon
          className="dark:text-icon-inactive-dark transition-transform duration-200 ease-in-out"
          width={16}
          height={16}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 z-10 w-full dark:border-input-border-dark dark:bg-input-bg-dark rounded-8 overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-12 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;