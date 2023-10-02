import "./members.css";
import img1 from '../props/bio4-share-global.png';
import img2 from '../props/faa15c324a7c.jpg';
import img3 from '../props/wallpapersden.jpg';
const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Community</h1>
      <div className="member member-1">
        <div className="img"><img className="member-img" src={img3} alt='' /></div>
        <div className="member-info">
        
          <h2 className="name"> gta 5</h2>
          <h3 className="position">Leader</h3>
          <h4 className="about">  
          Live the high life in Los Santos. Immerse yourself in the criminal underworld and experience the thrill of heists, fast cars, and endless adventures in Grand Theft Auto V.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Play</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"><img className="member-img" src={img1} alt='' /></div>
        <div className="member-info">
          <h1 className="name">Resident evil 4</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
         
          Survival horror at its best. Face your fears and fight for your life in the terrifying world of Resident Evil 4.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Play</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"><img className="member-img" src={img2} alt='' /></div>
        <div className="member-info">
        <h2 className="name"> need for speed</h2>
          <h3 className="position">Car</h3>
          <h4 className="about">  
          Take the wheel of the most powerful cars and customize them to your liking. Dominate the city streets in Need for Speed: where speed becomes an art.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Play</span>
          
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;

