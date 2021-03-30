import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			width: 400,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	}));

	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Search By Brand..."
				inputProps={{
					name: "search",
					value: props.input,
					onChange: props.onChange,
				}}
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
				onClick={props.onClick}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar; 