
import React from 'react';
function PetflixHeader() {
  return (
    <div className="petflix-header">
      <div className='menu-itens'>
      <img
        className="petflix-logo"
        src="./public/siteLogo.png" 
        alt="Petflix Logo"
      />
<div className='button-row'>
      <button className="petflix-sign-in">Movies</button>
      </div>
      </div>
    </div>
  );
}

export default PetflixHeader;