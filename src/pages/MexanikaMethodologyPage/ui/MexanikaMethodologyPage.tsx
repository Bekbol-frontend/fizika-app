import { Section } from "@/shared/ui/Section";
import { Button, Card, Col, Row, Typography } from "antd";
import styles from "./MexanikaMethodologyPage.module.scss";

import Img from "@/shared/assets/mexanika/maxresdefault.jpg";
import ImgBlock from "@/shared/ui/ImgBlock/ui/ImgBlock";
import {
  EditOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BtnToHome } from "@/shared/ui/BtnToHome";

const { Title } = Typography;

function MexanikaMethodologyPage() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.seciont}>
      <BtnToHome />
      <div className={styles.inner}>
        <Title level={sm ? 1 : 3}>Duradgorlik</Title>
        <Row gutter={[16, 16]}>
          <Col span={sm ? 12 : 24}>
            <ImgBlock imgUrl={Img} />
          </Col>
          <Col span={sm ? 12 : 24}>
            <Row gutter={[10, 10]}>
              <Col span={sm ? 12 : 24}>
                <Card className={styles.card}>
                  <QuestionCircleOutlined className={styles.icon} />
                  <Button type="primary" className={styles.btn}>
                    Test
                  </Button>
                </Card>
              </Col>
              <Col span={sm ? 12 : 24}>
                <Card className={styles.card}>
                  <InfoCircleOutlined className={styles.icon} />
                  <Button type="primary" className={styles.btn}>
                    Teoralik molumot
                  </Button>
                </Card>
              </Col>
              <Col span={24}>
                <Card className={styles.card}>
                  <EditOutlined className={styles.icon} />
                  <Button type="primary" className={styles.btn}>
                    Masala echish
                  </Button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default MexanikaMethodologyPage;
