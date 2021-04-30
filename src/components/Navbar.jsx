import {Link, NavLink} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/tables" className="brand-logo">Table Reservation</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><NavLink exact to="/tables/new" activeClassName={"active"}>New table</NavLink></li>
				<li><NavLink exact to="/tables" activeClassName={"active"}>Tables</NavLink></li>
				<li><NavLink exact to="/reserve" activeClassName={"active"}>Reserve</NavLink></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;
