import { Button } from "antd";
import { useNavigate } from "react-router-dom";


function LogOut() {
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("signUp")
        navigate("/");
    }

    const personalCabinet=()=>{ 

        navigate("/cabinet");
    }
    return (
        <>
            <Button type="primary" onClick={logout}>Log Out</Button>
            <Button type="primary" onClick={personalCabinet}>Cabinet</Button>
          
        </>
    )
}
export default LogOut;