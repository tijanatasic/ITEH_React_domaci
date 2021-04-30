import {useEffect, useState} from "react";
import TableReserveListItem from "../components/TableReserveListItem";
import * as service from "../services/tables.service";

function TablesPage() {
	const [tables, setTables] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setTables);
	}, []);

	return <div className="container">
		<ul className="collection">
			{tables.map(table => <TableReserveListItem table={table}/>)}
		</ul>
	</div>;
}

export default TablesPage;
