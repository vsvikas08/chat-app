import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

function UserInputDialog(props) {
    const [open, setOpen] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setFlag1(true);
            return;
        }
        if (!name) {
            setFlag2(true);
            return;
        }
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        setOpen(false);
    };
    return (
        <>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">User Details</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Email"
                        fullWidth
                        sx={{ marginBottom: "12px", marginTop: "8px" }}
                        onChange={(e) => setEmail(e.target.value)}
                        error={flag1}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        error={flag2}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}
                        sx={{ marginRight: "14px", marginBottom: "8px" }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default UserInputDialog;
