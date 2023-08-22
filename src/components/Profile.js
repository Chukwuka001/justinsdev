 import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BiLogoCss3, BiLogoTailwindCss, BiLogoPhp, BiLogoReact } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb'
import { SiJavascript, SiBootstrap } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import justin from '../assets/img/justin.jpg';

export function Profile() {
  return (
      <center><Card style={{ width: '20rem', padding:'10px', margin:'25px' }} className='card-alllibaries'>
      <Card.Img style={{ border: '0px', borderRadius: '50%'}} variant="top" src={justin} alt='justin' className='imgjustin'/>
      <Card.Body>
        <Card.Title>Language and Libaries used</Card.Title>
        <Card.Text>
      <div>
      <SiJavascript size={30} style={{ color: 'yellow', background: 'black'}}/>
      <BiLogoReact size={30} style={{ color: 'blue'}}/>
      <TbBrandNextjs size={30} style={{ color: 'white', background: 'black'}}/>
      <BiLogoCss3 size={30} style={{ color: '#0098ff'}}/>
      <BiLogoTailwindCss size={30} style={{ color: '#243c5a'}}/>
      <SiBootstrap size={30} style={{ color: 'rebeccapurple'}}/>
      <IoLogoNodejs size={30} style={{ color: '#6cc24a'}}/>
      <BiLogoPhp size={30} style={{ color: '#777BB3'}}/>
      </div>
        </Card.Text>
      </Card.Body>
      </Card></center>
  );
}

