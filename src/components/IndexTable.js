import React from "react";
import "./IndexTable.css";
import practicals from "../data/practicals";

function IndexTable() {
	return (
		<div className="page">
			<h1>Index</h1>
			<table>
				<tr>
					<th>Sr. No.</th>
					<th>Date</th>
					<th>Aim</th>
				</tr>
				{practicals.map((practical) => (
					<tr>
						<td>{practical.number}</td>
						<td>{practical.date}</td>
						<td>{practical.aim}</td>
					</tr>
				))}
			</table>
		</div>
	);
}

export default IndexTable;
