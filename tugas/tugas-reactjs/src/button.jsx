import { useState, forwardRef } from "react";

const FlashButton = forwardRef(
  ({ children, onClick, className = "", ...rest }, ref) => {
    const [flash, setFlash] = useState(false);

    const handleClick = (e) => {
      setFlash(true);
      onClick?.(e);
      setTimeout(() => setFlash(false), 450);
    };

    return (
      <button
        ref={ref}
        type="button"
        {...rest}  /* spread dulu */
        className={`btn ${flash ? "flash-red" : ""} ${className}`.trim()} /* merge */
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

export default FlashButton;


