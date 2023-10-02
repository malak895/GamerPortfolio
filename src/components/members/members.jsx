import "./members.css";
import img1 from '../props/cyberpunk-art--girl.jpg';
import img2 from '../props/faa15c324a7c.jpg';
import img3 from '../props/wallpapersden.jpg';
const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Community</h1>
      <div className="member member-1">
        <div className="img"><img className="member-img" src={img3} alt='' /></div>
        <div className="member-info">
        
          <h2 className="name"> Battlegrounds </h2>
          <h3 className="position">PUBG</h3>
          <h4 className="about">  
Fugit quidem, similique odit, dolorum error deleniti voluptatem libero ducimus eum cupiditate neque
beatae fugiat iste consequatur itaque hic modi eaque nesciunt!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Play</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"><img className="member-img" src={img1} alt='' /></div>
        <div className="member-info">
          <h1 className="name">Call of Duty</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
         
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Natus provident obcaecati quam quisquam placeat
officia laborum alias pariatur voluptate nostrum.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Play</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"><img className="member-img" src={img2} alt='' /></div>
        <div className="member-info">
          <h1 className="name">Garena Free Fire</h1>
          <h3 className="position">  Another Leader</h3>
          <h4 className="about">
         
Voluptatum asperiores id atque consequuntur
temporibus! Autem delectus quo maxime natus impedit placeat deleniti veniam mollitia.
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

