import { Modal } from "antd";

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function MatterModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Masala yechish"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      test
    </Modal>
  );
}

export default MatterModal;
