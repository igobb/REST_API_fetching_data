import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import './Modal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ isOpened, onClose, children }) {
  if (!isOpened) return null;

  return (
    <div>
      <Modal
        open={isOpened}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
