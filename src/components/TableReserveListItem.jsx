import {useState} from "react";
import * as service from "../services/tables.service";

function TableReserveListItem(props) {
	const [table, setTable] = useState(props.table);
	const handleRent = () => {
		const rentedTable = {...table, reserved: !table.reserved};
		service.update(rentedTable)
			.then(setTable);
	};

	return (
		<li className={"collection-item red lighten-2 white-text" + (table.reserved ? " reserved" : "")}>
			#{table.id} &nbsp;
			<span style={table.reserved ? {textDecoration: "line-through"} : {}}>
				Person Count: {table.personCount}
			</span>
			{table.reserved ? " Reserved" : ""}
			{table.reserved ?
				<button onClick={handleRent} className="btn white black-text right">
					Cancel
				</button>
				:
				<button onClick={handleRent} className="btn white black-text right">
					Reserve
				</button>
			}
		</li>);
}

export default TableReserveListItem;
