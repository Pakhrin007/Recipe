import { useState, useEffect } from "react";
import ChevDownIcon from "../../assets/icons/ChecDownIcon";

interface DropdownProps {
  options: string[];
  onChange?: (value: string) => void; // Make onChange optional
  className?: string;
}

const Dropdown = ({ options, className, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (options && options.length > 0 && selectedOption === "") {
      setSelectedOption(options[0]);
      if (onChange) {
        onChange(options[0]); // Only call if onChange exists
      }
    }
  }, [options, onChange]); // Include onChange in dependencies

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option); // Only call if onChange exists
    }
  };

  return (
    <div className={`relative font-body ${className}`}>
      <div
        className="flex items-center justify-between rounded-[8px] px-[16px] py-[8px] transition-all cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption || "Select an option"}</span>
        <ChevDownIcon
          className="text-black transition-transform duration-200 ease-in-out"
          width={16}
          height={16}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

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