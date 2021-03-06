import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

class Notifications extends Component {
	state = {};

	render() {
		return (
			<div class="wrapper">
				<Sidebar for="notifications" />
				<div class="main-panel">
					<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
						<div class="container-fluid">
							<div class="navbar-wrapper">
								<a class="navbar-brand" href="javascript:;">
									Notifications
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
							<div class="card">
								<div class="card-header card-header-primary">
									<h3 class="card-title">Notifications</h3>
									<p class="card-category">
										Handcrafted by our friend
										<a
											target="_blank"
											href="https://github.com/mouse0270"
										>
											Robert McIntosh
										</a>
										. Please checkout the
										<a
											href="http://bootstrap-notify.remabledesigns.com/"
											target="_blank"
										>
											full documentation.
										</a>
									</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-6">
											<h4 class="card-title">
												Notifications Style
											</h4>
											<div class="alert alert-info">
												<span>
													This is a plain notification
												</span>
											</div>
											<div class="alert alert-info">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													This is a notification with
													close button.
												</span>
											</div>
											<div
												class="alert alert-info alert-with-icon"
												data-notify="container"
											>
												<i
													class="material-icons"
													data-notify="icon"
												>
													add_alert
												</i>
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span data-notify="message">
													This is a notification with
													close button and icon.
												</span>
											</div>
											<div
												class="alert alert-info alert-with-icon"
												data-notify="container"
											>
												<i
													class="material-icons"
													data-notify="icon"
												>
													add_alert
												</i>
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span data-notify="message">
													This is a notification with
													close button and icon and
													have many lines. You can see
													that the icon and the close
													button are always vertically
													aligned. This is a beautiful
													notification. So you don't
													have to worry about the
													style.
												</span>
											</div>
										</div>
										<div class="col-md-6">
											<h4 class="card-title">
												Notification states
											</h4>
											<div class="alert alert-info">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													<b> Info - </b> This is a
													regular notification made
													with ".alert-info"
												</span>
											</div>
											<div class="alert alert-success">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													<b> Success - </b> This is a
													regular notification made
													with ".alert-success"
												</span>
											</div>
											<div class="alert alert-warning">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													<b> Warning - </b> This is a
													regular notification made
													with ".alert-warning"
												</span>
											</div>
											<div class="alert alert-danger">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													<b> Danger - </b> This is a
													regular notification made
													with ".alert-danger"
												</span>
											</div>
											<div class="alert alert-primary">
												<button
													type="button"
													class="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<i class="material-icons">
														close
													</i>
												</button>
												<span>
													<b> Primary - </b> This is a
													regular notification made
													with ".alert-primary"
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="places-buttons">
										<div class="row">
											<div class="col-md-6 ml-auto mr-auto text-center">
												<h4 class="card-title">
													Notifications Places
													<p class="category">
														Click to view
														notifications
													</p>
												</h4>
											</div>
										</div>
										<div class="row">
											<div class="col-lg-8 col-md-10 ml-auto mr-auto">
												<div class="row">
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('top','left')"
														>
															Top Left
														</button>
													</div>
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('top','center')"
														>
															Top Center
														</button>
													</div>
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('top','right')"
														>
															Top Right
														</button>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-lg-8 col-md-10 ml-auto mr-auto">
												<div class="row">
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('bottom','left')"
														>
															Bottom Left
														</button>
													</div>
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('bottom','center')"
														>
															Bottom Center
														</button>
													</div>
													<div class="col-md-4">
														<button
															class="btn btn-primary btn-block"
															onclick="md.showNotification('bottom','right')"
														>
															Bottom Right
														</button>
													</div>
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

export default Notifications;
