import React from 'react';
import Button from './Button';
import "../index.css";
const Addvehicle = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="general">
          <Button onClick={showForm}  text={changeTextAndColor ? 'Add Vehicle' : 'Add Vehicle'} />
        </header>
    )
}
export default Addvehicle;
