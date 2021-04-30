import {Route, Switch} from "react-router";
import TablesEditPage from "../pages/TableEditPage";
import TablesPage from "../pages/TablesPage";
import RentPage from "../pages/ReservePage";


function Routes(props) {
	return (
		<Switch>
			<Route path="/tables/:id">
				<TablesEditPage/>
			</Route>
			<Route exact path="/reserve">
				<RentPage/>
			</Route>
			<Route exact path="/tables">
				<TablesPage/>
			</Route>
			<Route>
				<TablesPage/>
			</Route>
		</Switch>
	);
};

export default Routes;
