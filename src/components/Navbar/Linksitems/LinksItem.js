import '../Linksitems/linksitems.css'
import { BsArrowRightShort } from 'react-icons/bs'

const LinksItem = () => {

  return (
    <div className='navlinks_wrapper'>
      <ul className='navlinks'>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className='btn'>
          <a href="#about">Resume
            <BsArrowRightShort className='arrow' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinksItem