import './home.css';
import img from '../props/img2.png';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <h1 className='About' >About Me</h1> <br />
        <p>
        I'm Nader, a dedicated nurse and avid gamer. 
        My portfolio showcases my commitment to healthcare and my passion for gaming.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
