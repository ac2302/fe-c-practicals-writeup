import React from "react";
import "./Practicals.css";
import practicals from "../data/practicals";

function Practicals() {
	return (
		<div className="practicals">
			{practicals.map((practical) => (
				<div className="page practical-container">
					<h1 className="experiment-heading">EXPERIMENT {practical.number}</h1>
					<h2>Aim:</h2>
					<p>{practical.aim}</p>

					<h2>Theory:</h2>
					<p>{practical.theory}</p>

					{/* code is conditional */}
					{practical.code && (
						<>
							<h2>Code:</h2>
							<pre>
								<code>{practical.code}</code>
							</pre>
						</>
					)}

					<h2>Conclusion:</h2>
					<p>{practical.conclusion}</p>
				</div>
			))}
		</div>
	);
}

export default Practicals;
