import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import image from './hinata-removebg-preview.png';
import Marquee from 'react-fast-marquee';
function App() {
  return (
    <div className="App">
      <div className="Nav">
        My COLLECTION{' '}
        <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: '#fcfcfd' }} />
      </div>
      <div className="chin">千手一族</div>
      <div className="circle">
        <div className="circle2"></div>
      </div>
      <div className="mar">
        <Marquee speed={100} autoFill className="mar">
          <div className="naruto">NARUTO UZUMAKI </div>
        </Marquee>
      </div>
      <div className="cird">
        <div className="cird2"></div>
      </div>
      <div className="chin2">うずまき一族</div>
      <img src={image} alt="logo" />
      <div>
        <p className='text1'>
          "Naruto" follows the journey of Naruto Uzumaki, a spirited ninja with
          dreams of becoming the Hokage. Endowed with the Nine-Tailed Fox
          spirit, he faces prejudice and loneliness. Alongside his friends,
          Sasuke and Sakura, Naruto undergoes rigorous training and confronts
          formidable foes. The series weaves a tapestry of friendship,
          self-discovery, and the pursuit of one's dreams against a backdrop of
          intricate ninja warfare. Sasuke's quest for power and Naruto's
          determination to save him form a gripping narrative core.
        </p>
        <div className='text2'>
          "Naruto" blends action, emotion, and philosophy, delivering a profound
          narrative. Naruto's journey, from an ostracized orphan to a symbol of
          hope, resonates with universal themes of resilience and redemption.
        </div>
        <div className='box'><div className='box-text'>Hello!!</div></div>
      </div>
    </div>
  );
}

export default App;
