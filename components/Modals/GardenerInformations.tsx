import { Box, Modal } from "@mui/material";
import React from "react";

const GardenerInformations = ({ gardenerInformations }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <button type="button">X</button>
        <p>hello</p>
      </Box>
    </Modal>
  );
};

export default GardenerInformations;
