import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const UpdateModal = (props) => {
	return (
		<Dialog
			open={props.show}
			onClose={props.toggleModal}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Update Product</DialogTitle>
			<DialogContent>
				<div className="my-3">
					<TextField
						autoFocus
						fullWidth
						margin="dense"
						label="Name"
						type="text"
						name="name"
						value={props.inputs.name}
						onChange={(e) => {
							e.persist();
							props.inputChangeHandler("update", e);
						}}
					/>
				</div>
				<div className="my-3">
					<TextField
						fullWidth
						margin="dense"
						label="Brand"
						type="text"
						name="brand"
						value={props.inputs.brand}
						onChange={(e) => {
							e.persist();
							props.inputChangeHandler("update", e);
						}}
					/>
				</div>
				<div className="my-3">
					<TextField
						fullWidth
						margin="dense"
						label="Quantity"
						type="number"
						name="quantity"
						value={props.inputs.quantity}
						onChange={(e) => {
							e.persist();
							props.inputChangeHandler("update", e);
						}}
					/>
				</div>
				<div className="my-3">
					<TextField
						fullWidth
						margin="dense"
						label="Price"
						type="number"
						name="price"
						value={props.inputs.price}
						onChange={(e) => {
							e.persist();
							props.inputChangeHandler("update", e);
						}}
					/>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.toggleModal} color="primary">
					Cancel
				</Button>
				<Button onClick={props.onConfirm} color="primary">
					Update
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UpdateModal;
