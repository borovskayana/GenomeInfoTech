import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

function SignUpModal({ isModalOpen, handleOk, handleCancel, isLogin }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal-wrapper" onClick={() => navigate("/")}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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
      </div>
    </>
  );
}
export default SignUpModal;
