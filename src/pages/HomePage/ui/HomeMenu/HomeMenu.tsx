import { Button, Col, Row } from "antd";
import styles from "./HomeMenu.module.scss";

function HomeMenu() {
  return (
    <Row justify="center" className={styles.row} gutter={[10, 10]}>
      <Col xs={24} sm={6}>
        <Button type="primary" className={styles.btn}>
          Duradgorlik
        </Button>
      </Col>
      <Col xs={24} sm={6}>
        <Button type="primary" className={styles.btn}>
          Chilangorlik
        </Button>
      </Col>
      <Col xs={24} sm={6}>
        <Button type="primary" className={styles.btn}>
          Elektrotexnika ishlari
        </Button>
      </Col>
      <Col xs={24} sm={6}>
        <Button type="primary" className={styles.btn}>
          Tikuvchilik
        </Button>
      </Col>

      <Col xs={24} sm={8}>
        <Button type="primary" className={styles.btn}>
          Olchash rejalash
        </Button>
      </Col>
      <Col xs={24} sm={8}>
        <Button type="primary" className={styles.btn}>
          Muallif haqida
        </Button>
      </Col>
      <Col xs={24} sm={8}>
        <Button type="primary" className={styles.btn}>
          Boglanish
        </Button>
      </Col>
    </Row>
  );
}

export default HomeMenu;
