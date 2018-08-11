import React from "react";
import {Header, Icon} from "semantic-ui-react";

import "../semantic/semantic.css"
import "../styles/default.css";

export default () => (
	<div>
		<Header as="h3" textAlign="center">
			<Header.Content>Biography</Header.Content>
		</Header>

		<div className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="graduation"/>
				<Header.Content>Education</Header.Content>

			</Header>
		</div>

	</div>
);