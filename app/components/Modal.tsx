'use client'
interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
    const handleClose = () => {
      onClose(); // Call the onClose function passed from the parent component to close the modal
    };
    return (
        <dialog id="infoModal" open={isOpen} onClose={onClose} className="absolute modal backdrop-blur" >
            <div className="modal-box mx-auto bg-white">
            <h3 className="font-bold text-black text-lg">Hello!</h3>
            <div className="modal-action">
                {/* Use onClick to handle the close button */}
                <button className="btn" onClick={handleClose}>
                    <p className="text-white font-bold text-xl">Close</p>
                </button>
            </div>
            </div>
        </dialog>
    );
  };
  export default InfoModal;
  