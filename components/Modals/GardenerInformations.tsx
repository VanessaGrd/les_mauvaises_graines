"use client";

import { Box, Modal } from "@mui/material";
import React from "react";

interface GardenerInformationsProps {
  gardenerInformations?: {
    id: number;
    firstname: string;
    lastname: string;
    caution: boolean;
  };
  handleCloseModal: () => void;
}

const GardenerInformations: React.FC<GardenerInformationsProps> = ({
  gardenerInformations,
  handleCloseModal,
}) => {
  const style = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 368,
    backgroundColor: "#292929",
    borderRadius: "0.625rem",
    fontFamily: "Montserrat",
    boxShadow: 24,
    padding: 4,
    width: {
      xs: "300px",
      sm: "320px",
      md: "430px",
      lg: "600px",
    },
  };

  return (
    <Modal
      open={true}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button type="button" onClick={handleCloseModal}>
          X
        </button>
        <p>
          {gardenerInformations?.firstname} {gardenerInformations?.lastname}
        </p>
      </Box>
    </Modal>
  );
};

export default GardenerInformations;
