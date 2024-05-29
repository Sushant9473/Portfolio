import Typing from './TypingEffect';
import './Intro.css';
import Image from './3054596.jpg';

function Intro() {
  return (
    <div className="intro">
        <div className='first-div'>
      <h1 className="hi">Hi There!</h1>
      <h2 className="hi">I'M Sushant</h2>
        <Typing
            text={["I am a Software Developer","I am a Web Developer","I am a Full Stack Developer"]}
            typingSpeed={100}
            deletingSpeed={50}
        />
        </div>
        <div>
            <img src={Image} alt="Sushant" className="image" />
        </div>
        
    </div>
  );
}

export default Intro;