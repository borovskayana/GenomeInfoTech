import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

function SignUpModal({ isModalOpen, handleOk, handleCancel, isLogin }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal-wrapper" onClick={() => navigate("/")}>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <SignUpForm isLogin={isLogin} />
        </Modal>
      </div>
    </>
  );
}
export default SignUpModal;
