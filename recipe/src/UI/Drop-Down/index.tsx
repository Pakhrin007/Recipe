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
    <div className={`relative font-body ${className}`}>
      {/* Input field with dropdown icon */}
      <div
        className="flex items-center justify-between rounded-[8px] border-[2px] border-black px-[16px] py-[8px] transition-all cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown when clicked
      >
        <span>{selectedOption}</span> {/* Removed the "Select an option" fallback */}
        <ChevDownIcon
          className="text-black transition-transform duration-200 ease-in-out"
          width={16}
          height={16}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
            <ul className="absolute top-full left-0 z-10 w-full rounded-[8px] overflow-hidden bg-gray-100 text-black">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-[16px] py-[8px] cursor-pointer font-body"
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