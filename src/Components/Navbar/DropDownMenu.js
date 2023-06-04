import React, { useState } from 'react';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='text-white'>
      <button onMouseEnter={handleToggle} onMouseLeave={handleClose}>Dashboard</button>
      {isOpen && (
        <ul>
          <li>
            <button onClick={handleClose}>Profile</button>
          </li>
          <li>
            <button onClick={handleClose}>My account</button>
          </li>
          <li>
            <button onClick={handleClose}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
