import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
function LoginPage() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = () => {
    handleClose();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div
      style={{
        backgroundImage: open
          ? `url('https://as1.ftcdn.net/v2/jpg/00/42/30/94/1000_F_42309483_OllBIUXnjeLYxkG7jNTdeLQuGtCa04MF.jpg')`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust the height as needed
      }}
    >
      <center>
        <Button variant="contained" onClick={handleOpen} data-testid="login">
          Login
        </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontWeight: "bold", fontSize: "30px" }}>
          <center>LOGIN</center>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            data-testid="username"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            data-testid="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLoginClick} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default LoginPage;
