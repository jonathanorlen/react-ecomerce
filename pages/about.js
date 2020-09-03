import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const About = () => {
     const isCLientRender = () => ![typeof window, typeof document].includes('undefined');
     console.log(">>", isCLientRender())
     return (
          <div>
               <h1>
                    Halo
               </h1>
               <Link href="/">
                    <a>Kembali ke home page</a>
               </Link>
               <Avatar alt="aout" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4c/4c3a6ff4cc92d3999439602ebcde0a30693d7eaa.jpg" />
               <Chip avatar={<Avatar alt="aout" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4c/4c3a6ff4cc92d3999439602ebcde0a30693d7eaa.jpg" />} label="ini adalah chip" />
          </div>
     )
};


export default About;