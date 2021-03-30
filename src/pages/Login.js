import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { authLogin } from "../store/actions";

// Components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
	loginCard: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	root: {
		width: 500,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "20px 0px",
		textAlign: "center",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: "1.5rem",
		textTransform: "uppercase",
	},
	pos: {
		marginBottom: 12,
	},
});

const Login = (props) => {
	const classes = useStyles();
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const inputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onLoginHandler = () => {
		const { email, password } = inputs;

		if (email && password) {
			const user = props.users.find((user) => user.email === email);

			if (user) {
				if (password === user.password) {
					props.authLogin({ email });
					props.history.push("/dashboard");
				} else {
					alert(`Incorrect Password`);
				}
			} else {
				alert(`Unable to find user with email: ${email}`);
			}
		} else {
			alert("Both fields are required");
		}
	};

	return (
		<div className={classes.loginCard}>
			<Card className={classes.root}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textPrimary"
						gutterBottom
					>
						Login
					</Typography>
					<div className="">
						<div className="my-3">
							<TextField
								autoFocus
								fullWidth
								margin="dense"
								label="Email"
								type="email"
								name="email"
								value={inputs.email}
								onChange={inputChange}
							/>
						</div>
						<div className="my-3">
							<TextField
								fullWidth
								margin="dense"
								label="Password"
								type="password"
								name="password"
								value={inputs.password}
								onChange={inputChange}
							/>
						</div>
					</div>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						color="primary"
						onClick={onLoginHandler}
					>
						Login
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		users: state.auth.users,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		authLogin: (user) => dispatch(authLogin(user)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
