import React, { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import SearchIcon from '@mui/icons-material/Search';

const Dropdown = ({
  options,
  isMulti,
  isSearchable,
  onChange
}) => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("hover", handler);
    return () => {
      window.removeEventListener("hover", handler);
    };
  });
 

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className="dropdown-container">
      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className={styles.search}>
              <input onChange={onSearch} value={searchValue} ref={searchRef} type="text" name="search" 
              placeholder="Search..." className={styles.input}/>
              <a href="#0" className={styles.searchbtn}>
                <SearchIcon color="primary"/>     
        </a>
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
