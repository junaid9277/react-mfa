import React, {useState} from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '@mui/material';

const VerifyOTP = ({handleCloseModal}) => {

  const handleChange = (element) => {
    if (isNaN(element.value)) return false;
      console.log(element.value)
      if (element.value.length == 4){
        if (element.value === '1234') {
          // If the OTP is correct, close the modal
          handleCloseModal();
        } else {
          // If the OTP is incorrect, show an error message
          alert('Incorrect OTP');
        }
      }
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Enter OTP</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            key={1}
            type="text"
            name="otp"
            inputProps={{maxLength: 4}}
            onChange={(e) => handleChange(e.target)}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyOTP;
