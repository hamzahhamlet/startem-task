import React, { Component } from "react";
import { connect } from "react-redux";
import {
	dashboardCreateProduct,
	dashboardUpdateProduct,
	dashboardDeleteProduct,
} from "../store/actions/index";
import { v4 as uuidv4 } from "uuid";
// Components
import Sidebar from "../components/Sidebar";
import UpdateModal from "../components/UpdateModal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchBar from "../components/SearchBar";

class Tables extends Component {
	state = {
		isAddOpen: false,
		isUpdateOpen: false,
		search: "",
		add: {
			name: "",
			brand: "",
			quantity: "",
			price: "",
		},
		update: {
			id: "",
			name: "",
			brand: "",
			quantity: "",
			price: "",
		},
	};

	toggleAddProduct = () => {
		this.setState({ isAddOpen: !this.state.isAddOpen });
	};

	toggleUpdateModal = () => {
		this.setState({ isUpdateOpen: !this.state.isUpdateOpen });
	};

	inputChangeHandler = (action, e) => {
		this.setState({
			...this.state,
			[action]: {
				...this.state[action],
				[e.target.name]: e.target.value,
			},
		});
	};

	onCreateHandler = () => {
		const { name, brand, quantity, price } = this.state.add;

		if (name && brand && quantity && price) {
			const intQuantity = Number.parseFloat(quantity);
			const intPrice = Number.parseFloat(price);

			if (intQuantity > 0 && intPrice > 0) {
				this.setState({
					...this.state,
					isAddOpen: false,
					add: {
						name: "",
						brand: "",
						quantity: "",
						price: "",
					},
				});
				this.props.dashboardCreateProduct({
					id: uuidv4(),
					name,
					brand,
					quantity,
					price,
				});
				alert("New product added successfully.");
			} else {
				alert(
					"Quantity and Price fields should have a value greater then 0"
				);
			}
		} else {
			alert("Invalid data for fields.");
		}
	};

	updateClickHandler = (id) => {
		const product = this.props.products.find((record) => record.id === id);

		if (product) {
			this.setState({
				...this.state,
				isUpdateOpen: true,
				update: {
					id: product.id,
					name: product.name,
					brand: product.brand,
					quantity: product.quantity,
					price: product.price,
				},
			});
		} else {
			alert("Unable to find product.");
		}
	};

	onUpdateHandler = () => {
		const { id, name, brand, quantity, price } = this.state.update;

		if (id && name && brand && quantity && price) {
			const intQuantity = Number.parseFloat(quantity);
			const intPrice = Number.parseFloat(price);

			if (intQuantity > 0 && intPrice > 0) {
				this.setState({
					...this.state,
					isUpdateOpen: false,
					update: {
						id: "",
						name: "",
						brand: "",
						quantity: "",
						price: "",
					},
				});
				this.props.dashboardUpdateProduct({
					id,
					name,
					brand,
					quantity,
					price,
				});
				alert("Product updated successfully.");
			} else {
				alert(
					"Quantity and Price fields should have a value greater then 0"
				);
			}
		} else {
			alert("Invalid data for fields.");
		}
	};

	renderAddProductRow = () => (
		<TableRow>
			<TableCell component="th" scope="row">
				<TextField
					id="outlined-basic"
					variant="outlined"
					type="text"
					label="Name"
					name="name"
					value={this.state.add.name}
					onChange={(e) => {
						e.persist();
						this.inputChangeHandler("add", e);
					}}
				/>
			</TableCell>
			<TableCell align="center">
				<TextField
					id="outlined-basic"
					variant="outlined"
					type="text"
					label="Brand"
					name="brand"
					value={this.state.add.brand}
					onChange={(e) => {
						e.persist();
						this.inputChangeHandler("add", e);
					}}
				/>
			</TableCell>
			<TableCell align="center">
				<TextField
					id="outlined-basic"
					variant="outlined"
					label="Quantity"
					type="number"
					name="quantity"
					value={this.state.add.quantity}
					onChange={(e) => {
						e.persist();
						this.inputChangeHandler("add", e);
					}}
				/>
			</TableCell>
			<TableCell align="center">
				<TextField
					id="outlined-basic"
					variant="outlined"
					label="Price"
					type="number"
					name="price"
					value={this.state.add.price}
					onChange={(e) => {
						e.persist();
						this.inputChangeHandler("add", e);
					}}
				/>
			</TableCell>
			<TableCell align="center">
				<Button
					variant="contained"
					color="primary"
					onClick={this.onCreateHandler}
				>
					Create
				</Button>
			</TableCell>
		</TableRow>
	);

	renderProductRows = () => {
		const { search } = this.state;
		const rows = [...this.props.products];

		return rows.map((row) => {
			return row.name.includes(search) ? (
				<TableRow key={row.id}>
					<TableCell component="th" scope="row">
						{row.name}
					</TableCell>
					<TableCell align="center">{row.brand}</TableCell>
					<TableCell align="center">{row.quantity}</TableCell>
					<TableCell align="center">${row.price}</TableCell>
					<TableCell align="right">
						<Button
							className="mr-4"
							variant="contained"
							color="primary"
							onClick={() => this.updateClickHandler(row.id)}
						>
							Update
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.dashboardDeleteProduct(row.id)
							}
						>
							Delete
						</Button>
					</TableCell>
				</TableRow>
			) : null;
		});
	};

	render() {
		const { isAddOpen } = this.state;

		const headerStyle = {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		};

		return (
			<div class="wrapper">
				<Sidebar for="tables" />
				<div class="main-panel">
					<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
						<div class="container-fluid">
							<div class="navbar-wrapper">
								<a class="navbar-brand" href="javascript:;">
									Table List
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
							<div class="row">
								<div class="col-md-12">
									<div class="card">
										<div
											class="card-header card-header-primary"
											style={headerStyle}
										>
											<h4 class="card-title">Products</h4>
											<div style={headerStyle}>
												<span className="mr-3">
													<SearchBar
														input={
															this.state.search
														}
														onChange={(e) =>
															this.setState({
																[e.target.name]:
																	e.target
																		.value,
															})
														}
													/>
												</span>
												{!isAddOpen ? (
													<Button
														variant="contained"
														color="primary"
														onClick={
															this
																.toggleAddProduct
														}
													>
														Add
													</Button>
												) : (
													<Button
														variant="contained"
														color="primary"
														onClick={
															this
																.toggleAddProduct
														}
													>
														Close
													</Button>
												)}
											</div>
										</div>
										<div className="card-body">
											<div className="table-responsive">
												<TableContainer
													component={Paper}
												>
													<Table aria-label="simple table">
														<TableHead>
															<TableRow>
																<TableCell>
																	Name
																</TableCell>
																<TableCell align="center">
																	Brand
																</TableCell>
																<TableCell align="center">
																	Quantity
																</TableCell>
																<TableCell align="center">
																	Price
																</TableCell>
																<TableCell align="right">
																	<span className="mr-5">
																		Actions
																	</span>
																</TableCell>
															</TableRow>
														</TableHead>
														<TableBody>
															{isAddOpen
																? this.renderAddProductRow()
																: null}
															{this.renderProductRows()}
														</TableBody>
													</Table>
												</TableContainer>
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
				<UpdateModal
					show={this.state.isUpdateOpen}
					toggleModal={this.toggleUpdateModal}
					inputs={this.state.update}
					inputChangeHandler={this.inputChangeHandler}
					onConfirm={this.onUpdateHandler}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.dashboard.products,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dashboardCreateProduct: (product) =>
			dispatch(dashboardCreateProduct(product)),
		dashboardUpdateProduct: (product) =>
			dispatch(dashboardUpdateProduct(product)),
		dashboardDeleteProduct: (id) => dispatch(dashboardDeleteProduct(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
