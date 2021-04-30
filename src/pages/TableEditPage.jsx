import M from "materialize-css/dist/js/materialize.min";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as service from "../services/tables.service";


function TablesPage() {
	const {id} = useParams();
	const history = useHistory();
	const [table, setTable] = useState({});

	useEffect(() => {
		service.getById(id)
			.then(setTable)
			.catch(() => {
				if (id !== "new"){
					history.replace("/tables/new");
				}
				setTable({})
			});
	}, []);

	useEffect(() => {
		M.updateTextFields();
	}, [table]);

	const handleInput = ({currentTarget: input}) => {
		setTable({...table, [input.name]: input.value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (table.id) {
			service.update(table)
				.then(_table => {
					setTable(_table);
					alert("Updated");
				});
		} else {
			service.save(table)
				.then(_table => {
					setTable(_table);
					alert("Saved");
					history.replace("/tables");
				});
		}
	};

	const handleDelete = () => {
		service.deleteById(table.id)
			.then(()=> history.replace("/tables"));
	}

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12 m4 l2">
					<input value={table.personCount}
					       onChange={handleInput}
					       name="personCount"
					       placeholder="Person count"
					       id="personCount"
					       type="number"/>
					<label htmlFor="personCount">Person Count</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
}

export default TablesPage;
