import Modal from '@mui/material/Modal';
import { ReactNode, SetStateAction } from 'react';

interface Props {
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>,
    children: ReactNode
}

const BasicModal: React.FC<Props> = ({open, setOpen, children}) => {  
  const handleClose = () => setOpen(false);

  return (
    <div>      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {children}                  
        </>        
      </Modal>
    </div>
  );
}

export default BasicModal;