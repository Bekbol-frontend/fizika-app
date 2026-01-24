import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./BtnToBack.module.scss";
import { useNavigate } from "react-router-dom";

function BtnToHome() {
  const navigate = useNavigate();

  return (
    <Button
      icon={<CloseOutlined />}
      type="primary"
      className={styles.btnToBack}
      onClick={() => navigate(-1)}
    />
  );
}

export default BtnToHome;
