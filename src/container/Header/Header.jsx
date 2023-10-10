import React from "react";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading tittle={"chase the new flavor"} />
			<h1 className="app__header-h1">the key to fine dining</h1>
		</div>
		<div className="app_wrapper_img"></div>
	</div>
);

export default Header;
