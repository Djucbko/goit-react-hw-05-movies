import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../Loader/Loader";

import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	return (
		<div className={css.Container}>
			<header className={css.Header}>
				<nav>
					<NavLink className={css.Link} to="/">
						Home
					</NavLink>
					<NavLink className={css.Link} to="/movies">
						Movies
					</NavLink>
				</nav>
			</header>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
};
export default SharedLayout;
