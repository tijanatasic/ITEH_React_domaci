import {useEffect, useState} from "react";
import TableListItem from "../components/TableListItem";
import * as service from "../services/tables.service";

function TablesPage() {
	const [tables, setTables] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setTables);
	}, []);


	const handleDelete = (id) => {
		service.deleteById(id)
			.then(()=> setTables(tables.filter(table => table.id !== id)));
	}

	return <div className="container">
		<ul className="collection">
			{tables.map(table => <TableListItem table={table} onDelete={handleDelete}/>)}
		</ul>
	</div>;
}

export default TablesPage;
