import { Link, animateScroll as scroll } from 'react-scroll';
export const Nav = () => (
  <nav className="header__navigation">
    <ul>
      <li>
        <Link
          className="compact-menu__item"
          activeClass="active"
          spy={true}
          to="top"
          smooth={true}
        >
          Top
        </Link>
      </li>
      <li>
        <Link
          className="compact-menu__item"
          activeClass="active"
          spy={true}
          to="work"
          smooth={true}
        >
          Featured works
        </Link>
      </li>
      <li>
        <Link
          className="compact-menu__item"
          activeClass="active"
          spy={true}
          to="about"
          smooth={true}
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          className="compact-menu__item"
          activeClass="active"
          spy={true}
          to="contact"
          smooth={true}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);
