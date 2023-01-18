import styles from "./DropdownBtn.module.scss";
import uuid from "react-uuid";
import { useState } from "react";

export default function DropdownBtn() {
  const dropdownItems = [
    { text: "Curated" },
    { text: "John Wav" },
    { text: "Tochi Bedford" },
    { text: "Johnson IP" },
    { text: "Trill Xoe" },
    { text: "KD" },
    { text: "Malik Bawa" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Toggle the drop down menu
   */
  const toogleDropDown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        className={styles.buttonContainer}
        onClick={toogleDropDown}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>Curated</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          className={styles.chevron}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      {isOpen ? (
        <div className={styles.dropdownContainer}>
          {dropdownItems.map((items) => {
            return (
              <div className={styles.items} key={uuid()}>
                {items.text} <div className={styles.solidLine}></div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
