import { FC, useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";
import useOutsideClick from "./hooks/useClickOutside";
import ChevronDownSvg from "../../../assets/icons/ChevronDownSvg";

interface DropdownItem {
  id: string;
  name: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  options: DropdownItem[];
  hasImage?: boolean;
  className?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Select: FC<DropdownProps> = ({
  id,
  className,
  options,
  selectedId,
  onSelect,
  title = "Select",
}) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? options?.find((item) => item.id === selectedId) : undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  useEffect(() => {
    if (selectedId && options) {
      const newSelectedItem = options.find((item) => item.id === selectedId);
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
      }
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, options]);

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    if (onSelect) {
      onSelect(item.id);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.select} ${className || ""}`}
      >
        <span>{selectedItem?.name || title}</span>
        <span>
          <ChevronDownSvg width="14" height="14" />
        </span>
      </button>
      {isOpen && (
        <div aria-label="Dropdown menu" className={styles.dropdownWrap}>
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className={styles.dropdownList}
          >
            {options?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={`${styles.dropdownListItem} ${
                  selectedItem?.id === item.id ? styles.active : ""
                }`}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
