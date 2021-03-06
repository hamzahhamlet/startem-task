import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

class Icons extends Component {
	state = {};

	render() {
		return (
			<div class="wrapper">
				<Sidebar for="icons" />
				<div class="main-panel">
					<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
						<div class="container-fluid">
							<div class="navbar-wrapper">
								<a class="navbar-brand" href="javascript:;">
									Icons
								</a>
							</div>
							<button
								class="navbar-toggler"
								type="button"
								data-toggle="collapse"
								aria-controls="navigation-index"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span class="sr-only">Toggle navigation</span>
								<span class="navbar-toggler-icon icon-bar"></span>
								<span class="navbar-toggler-icon icon-bar"></span>
								<span class="navbar-toggler-icon icon-bar"></span>
							</button>
							<div class="collapse navbar-collapse justify-content-end">
								<form class="navbar-form">
									<div class="input-group no-border">
										<input
											type="text"
											value=""
											class="form-control"
											placeholder="Search..."
										/>
										<button
											type="submit"
											class="btn btn-white btn-round btn-just-icon"
										>
											<i class="material-icons">search</i>
											<div class="ripple-container"></div>
										</button>
									</div>
								</form>
								<ul class="navbar-nav">
									<li class="nav-item">
										<a class="nav-link" href="javascript:;">
											<i class="material-icons">
												dashboard
											</i>
											<p class="d-lg-none d-md-block">
												Stats
											</p>
										</a>
									</li>
									<li class="nav-item dropdown">
										<a
											class="nav-link"
											href="http://example.com"
											id="navbarDropdownMenuLink"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i class="material-icons">
												notifications
											</i>
											<span class="notification">5</span>
											<p class="d-lg-none d-md-block">
												Some Actions
											</p>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right"
											aria-labelledby="navbarDropdownMenuLink"
										>
											<a class="dropdown-item" href="#">
												Mike John responded to your
												email
											</a>
											<a class="dropdown-item" href="#">
												You have 5 new tasks
											</a>
											<a class="dropdown-item" href="#">
												You're now friend with Andrew
											</a>
											<a class="dropdown-item" href="#">
												Another Notification
											</a>
											<a class="dropdown-item" href="#">
												Another One
											</a>
										</div>
									</li>
									<li class="nav-item dropdown">
										<a
											class="nav-link"
											href="javascript:;"
											id="navbarDropdownProfile"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i class="material-icons">person</i>
											<p class="d-lg-none d-md-block">
												Account
											</p>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right"
											aria-labelledby="navbarDropdownProfile"
										>
											<a class="dropdown-item" href="#">
												Profile
											</a>
											<a class="dropdown-item" href="#">
												Settings
											</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item" href="#">
												Log out
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<div class="content">
						<div class="container-fluid">
							<div class="container-fluid">
								<div class="card card-plain">
									<div class="card-header card-header-primary">
										<h4 class="card-title">
											Material Design Icons
										</h4>
										<p class="card-category">
											Handcrafted by our friends from
											<a
												target="_blank"
												href="https://design.google.com/icons/"
											>
												Google
											</a>
										</p>
									</div>
									<div class="row">
										<div class="col-md-12">
											<div class="card-body">
												<div class="iframe-container d-none d-lg-block">
													<iframe src="https://design.google.com/icons/">
														<p>
															Your browser does
															not support iframes.
														</p>
													</iframe>
												</div>
												<div class="col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto">
													<h5>
														The icons are visible on
														Desktop mode inside an
														iframe. Since the iframe
														is not working on Mobile
														and Tablets please visit
														the icons on their
														original page on Google.
														Check the
														<a
															href="https://design.google.com/icons/"
															target="_blank"
														>
															Material Icons
														</a>
													</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer class="footer">
						<div class="container-fluid">
							<nav class="float-left">
								<ul>
									<li>
										<a href="https://www.creative-tim.com">
											Creative Tim
										</a>
									</li>
									<li>
										<a href="https://creative-tim.com/presentation">
											About Us
										</a>
									</li>
									<li>
										<a href="http://blog.creative-tim.com">
											Blog
										</a>
									</li>
									<li>
										<a href="https://www.creative-tim.com/license">
											Licenses
										</a>
									</li>
								</ul>
							</nav>
							<div class="copyright float-right">
								&copy;
								<script>
									document.write(new Date().getFullYear());
								</script>
								, made with
								<i class="material-icons">favorite</i> by
								<a
									href="https://www.creative-tim.com"
									target="_blank"
								>
									Creative Tim
								</a>
								for a better web.
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Icons;
