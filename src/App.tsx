import { Backdrop } from './components/Backdrop'
import { Modal } from './components/Modal'
import { useState } from 'react';
import { Controls } from './components/Controls';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Controls onOpen={() => setIsModalOpen(true)} />
      <Backdrop 
        isOpen={isModalOpen}
        onClick={handleClose}
      />
      <Modal 
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        Welcome to your modal!
      </Modal>
    </>
  )
}

export default App
