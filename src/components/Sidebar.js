import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
	return (
		<div
			class="sidebar"
			data-color="purple"
			data-background-color="white"
			data-image="../assets/img/sidebar-1.jpg"
		>
			<div class="logo">
				<a
					href="http://www.creative-tim.com"
					class="simple-text logo-normal"
				>
					Creative Tim
				</a>
			</div>
			<div class="sidebar-wrapper">
				<ul class="nav">
					<li
						class={
							props.for === "dashboard"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/dashboard">
							<i class="material-icons">dashboard</i>
							<p>Dashboard</p>
						</Link>
					</li>
					<li
						class={
							props.for === "user"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/user">
							<i class="material-icons">person</i>
							<p>User Profile</p>
						</Link>
					</li>
					<li
						class={
							props.for === "tables"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/tables">
							<i class="material-icons">content_paste</i>
							<p>Table List</p>
						</Link>
					</li>
					<li
						class={
							props.for === "typography"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/typography">
							<i class="material-icons">library_books</i>
							<p>Typography</p>
						</Link>
					</li>
					<li
						class={
							props.for === "icons"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/icons">
							<i class="material-icons">bubble_chart</i>
							<p>Icons</p>
						</Link>
					</li>
					<li
						class={
							props.for === "map" ? "nav-item active" : "nav-item"
						}
					>
						<Link class="nav-link" to="/map">
							<i class="material-icons">location_ons</i>
							<p>Maps</p>
						</Link>
					</li>
					<li
						class={
							props.for === "notifications"
								? "nav-item active"
								: "nav-item"
						}
					>
						<Link class="nav-link" to="/notifications">
							<i class="material-icons">notifications</i>
							<p>Notifications</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
