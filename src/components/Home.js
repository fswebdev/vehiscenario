import React from 'react';
import Button from './Button';
import "../index.css";
const Home = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="general">
          <Button onClick={showForm}  text = {changeTextAndColor='Home'}/>
        </header>
    )
}
export default Home;
