import { NavLink } from "react-router-dom";
import "./NavMenu.scss";
import { links } from "../../utils/config";

function NavMenu() {
  return (
    <nav className="navigation">
      <ul className="navigation__list_links">
        {links.map((item) => {
          return (
            <li className="navigation__container-link navigation__view-lists-links" key={item.path}>
              <NavLink className="navigation__link" activeClassName="navigation__link_active" to={item.path}>
                {item.name}
              </NavLink>
              <div className="navigation__select-container navigation__view-lists-links_active">
                {Array.isArray(item.select) &&
                  item.select.map((el) => {
                    return (
                      <NavLink className="navigation__select-link" to={el.pathSelect} key={el.pathSelect}>
                        {el.name}
                      </NavLink>
                    );
                  })}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default NavMenu;
