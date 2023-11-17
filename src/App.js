import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import image from './hinata-removebg-preview.png';
import Marquee from 'react-fast-marquee';
function App() {
  return (
    <div className="App">
      <div className="Nav">
        My COLLECTION <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#fcfcfd",}} />
      </div>
      <div className="chin">千手一族</div>
      <div className="circle">
        <div className="circle2"></div>
      </div>
      <div className='mar'><Marquee speed={100} autoFill className='mar'><div className='naruto'>NARUTO UZUMAKI</div></Marquee></div>
      <div className="cird">
        <div className="cird2"></div>
      </div>
      <div className='chin2'>うずまき一族</div>
      <img src={image} alt="logo" />
    </div>
  );
}

export default App;
