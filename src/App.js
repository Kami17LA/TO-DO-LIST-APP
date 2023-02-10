/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';

function App() {
  return (
    <div className="toDoApp">
      <div className='freeCodeCamp-container-logo'>
        <img 
          src={freeCodeCampLogo}
          className='freeCodeCamp-logo' 
        />
      </div>
    </div>
  );
}

export default App;
