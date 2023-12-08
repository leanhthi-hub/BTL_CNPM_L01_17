import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Stack from '@mui/material/Stack';
import { blue, red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button
         sx={{position: 'absolute', top:'0', right: '0'}}
         onClick={handleClose}
         >
            <CloseIcon sx={{color: red[700]}}/>
          </Button>
        <Stack direction="row" spacing={2}>
          <ReportProblemIcon sx={{color: blue[700]}}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tài liệu không hợp lệ
          </Typography>
        </Stack>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Tài liệu không đúng định dạng, cần tải lại tài liệu theo hướng dẫn
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}