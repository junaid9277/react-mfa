import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSaveClick = () => {
    console.log(currentPassword, newPassword, confirmPassword);
    // Additional logic for validating and updating the password
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Change Password
      </Typography>
      <Box sx={{ width: '100%', p: 3 }}>
        <TextField
          label="Current Password"
          fullWidth
          margin="normal"
          type="password"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <TextField
          label="New Password"
          fullWidth
          margin="normal"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <TextField
          label="Confirm New Password"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <Box sx={{ p: 3 }}>
          <Button variant="contained" onClick={handleSaveClick}>
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ChangePassword;
