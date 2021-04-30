import {Link} from "react-router-dom";


function TableListItem({table, onDelete}) {

	const handleDelete = () => {
		onDelete(table.id);
	}

	return (
		<li className="collection-item red lighten-2 white-text">
			Person count: {table.personCount} &nbsp;
			Reserved: {!!table.reserved ? "Yes" : "No"}
			<Link to={`/tables/${table.id}`} className="secondary-content white-text btn btn-flat right"><i className="material-icons">edit</i></Link>
			<button onClick={handleDelete} className="btn btn-flat secondary-content white-text right"><i className="material-icons">delete</i></button>
		</li>);
}

export default TableListItem;
