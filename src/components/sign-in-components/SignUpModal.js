import SignUpForm from "./SignUpForm";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "antd";

function SignUpModal({ isModalOpen, handleOk, handleCancel, isLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        className="modal-wrapper"
        onClick={() => navigate(location.pathname)}
      >
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={600}
        >
          <SignUpForm isLogin={isLogin} />
        </Modal>
      </div>
    </>
  );
}
export default SignUpModal;
