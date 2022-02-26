import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
import { useSelector } from 'react-redux';

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const [changeUserPassword] = useChangeUserPasswordMutation()
  const token = getToken('token')
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        const res = await changeUserPassword({ actualData, token })
        if (res.data.status === "success") {
          document.getElementById("password-change-form").reset();
          setError({ status: true, msg: "Password Changed Successful", type: "success" });
        }
        if (res.data.status === "failed") {
          setError({ status: true, msg: res.data.message, type: "error" });
        }
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" })
    }
  };

  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  console.log("Change Password", myData)

  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
      <h1>Change Password</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
        <TextField margin="normal" required fullWidth name="password" label="New Password" type="password" id="password" />
        <TextField margin="normal" required fullWidth name="password_confirmation" label="Confirm New Password" type="password" id="password_confirmation" />
        <Box textAlign='center'>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Update </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </Box>
  </>;
};

export default ChangePassword;
