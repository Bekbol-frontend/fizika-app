import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./BtnToHome.module.scss";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";

function BtnToHome() {
  const navigate = useNavigate();

  return (
    <Button
      icon={<CloseOutlined />}
      type="primary"
      className={styles.btnToHome}
      onClick={() => navigate(appRoutes.home)}
    />
  );
}

export default BtnToHome;
