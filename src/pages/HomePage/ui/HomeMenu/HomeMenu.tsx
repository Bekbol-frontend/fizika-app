import { Button, Col, Row } from "antd";
import styles from "./HomeMenu.module.scss";
import { menuItems } from "./menuItems";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { appRoutes } from "@/shared/config/routeConfig";

function HomeMenu() {
  const navigate = useNavigate();

  const changePage = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  return (
    <Row justify="center" className={styles.row} gutter={[10, 10]}>
      {menuItems.map((el) => (
        <Col xs={24} sm={6} key={el.name}>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => changePage(el.page)}
          >
            {el.name}
          </Button>
        </Col>
      ))}

      <Col xs={24} sm={8}>
        <Button
          type="primary"
          className={styles.btn}
          onClick={() => navigate(appRoutes.aboutAuthor)}
        >
          Muallif haqida
        </Button>
      </Col>
      <Col xs={24} sm={8}>
        <Button
          type="primary"
          className={styles.btn}
          onClick={() => navigate(appRoutes.connection)}
        >
          Boğlanish
        </Button>
      </Col>
    </Row>
  );
}

export default HomeMenu;
