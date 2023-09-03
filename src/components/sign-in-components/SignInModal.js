import SignInForm from "./SignInForm";
import { useNavigate} from "react-router-dom";
import { Modal, Typography, Space } from "antd";
const { Title } = Typography;
function SignInModal({ isModalOpen, handleOk, handleCancel }) {
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
          
          <Space direction="vertical" size="large" className="space-sign">
            <Title level={2} className="title-sign">
              Sign In
            </Title>

            <SignInForm />
            </Space>
         

        </Modal>


      </div>
      

    </>
  );
}
export default SignInModal;
