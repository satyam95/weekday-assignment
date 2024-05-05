import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

export const options: string[] = [
    "Frontend",
    "Backend",
    "Fullstack",
    "IOS",
    "Flutter",
    "React Native",
    "Android",
    "Tech Lead",
    "Dev Ops",
    "Data Engineer",
    "Data Science",
    "Computer Vision",
    "Nlp",
    "Deep Learning",
    "Test / Qa",
    "Web3",
    "Sre",
    "Data Infrastructure",
    "Designer",
    "Design Manager",
    "Graphic Designer",
    "Producct Designer",
    "Product Designer",
    "Operations Manager",
    "Founder's Office/ Cheif of Staff",
    "Sales Development Representative",
    "Account Executive",
    "Account Manager",
    "Digital Marketing Manager",
    "Growth Hacker",
    "Marketing",
    "Product Marketing Manager",
    "Hardware",
    "Mechanical",
    "Systems",
    "Business Analyst",
    "Data Analyst",
    "Project Manager",
    "Management",
    "Legal",
    "Hr",
    "Finance",
  ];

const JobFilter = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItemsSet, setSelectedItemsSet] = useState(new Set());

  const menuRef = useRef(null);

  const handleOutsideClick = (e: { target: any }) => {
    if (
      menuRef?.current &&
      !(menuRef.current as HTMLElement).contains(e.target)
    ) {
      setOpen(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    const fetchRoles = () => {
      if (searchTerm.trim() === "") {
        setSuggestions(options);
        return;
      }

      const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredOptions);
    };
    fetchRoles();
  }, [searchTerm]);

  const handleSelectItem = (suggestion: string) => {
    setSelectedItems([...selectedItems, suggestion]);
    setSelectedItemsSet(new Set([...selectedItems, suggestion]));
    setSuggestions(options);
    setSearchTerm("");
    setOpen(false);
  };

  const handleInputClick = () => {
    setOpen(!open);
    setSearchTerm("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleRemoveItem = (item: string) => {
    const updateItems = selectedItems.filter((value) => value !== item);
    setSelectedItems(updateItems);

    const updateItemsSet = new Set(selectedItemsSet);
    updateItemsSet.delete(item);
    setSelectedItemsSet(updateItemsSet);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      (e.target as HTMLInputElement).value === "" &&
      selectedItems.length > 0
    ) {
      const lastUser = selectedItems[selectedItems.length - 1];
      handleRemoveItem(lastUser);
      setSuggestions([]);
    }
  };

  return (
    <div className="user-search-container" onClick={handleInputClick}>
      <div className="user-search-input" ref={menuRef}>
        {selectedItems.length !== 0 ? (
          <div className="selection">
            {selectedItems.map((item, index) => (
              <div className="item-main" key={index}>
                <div className="item-text">{item}</div>
                <div
                  className="item-close"
                  onClick={() => handleRemoveItem(item)}
                >
                  <ClearIcon className="icon-close" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        {selectedItems.length === 0 && (
          <div className="placeholder">Roles</div>
        )}
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input-field"
          />
        </div>
        <div className="input-btn-container">
          <span className="input-btn"></span>
          <div className="keydown-icon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {open && (
          <ul className="suggestion-list">
            {suggestions.map((suggestion, index) =>
              !selectedItemsSet.has(suggestion) ? (
                <li key={index} onClick={() => handleSelectItem(suggestion)}>
                  {suggestion}
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobFilter;
