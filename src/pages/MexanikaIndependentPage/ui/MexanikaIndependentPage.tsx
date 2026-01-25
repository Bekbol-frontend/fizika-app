import { BtnToBack } from "@/shared/ui/BtnToBack";
import { Section } from "@/shared/ui/Section";
import styles from "./MexanikaIndependentPage.module.scss";
import { Button, Card, Col, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import ImgBlock from "@/shared/ui/ImgBlock/ui/ImgBlock";

import Img from "@/shared/assets/mexanika/maxresdefault.jpg";
import {
  EditOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

function MexanikaIndependentPage() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.seciont}>
      <BtnToBack />
      <div className={styles.inner}>
        <Title level={sm ? 1 : 3}>Mustaqil echish uchin masalalar</Title>
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
                    Nostandart masala
                  </Button>
                </Card>
              </Col>
              <Col span={sm ? 12 : 24}>
                <Card className={styles.card}>
                  <InfoCircleOutlined className={styles.icon} />
                  <Button type="primary" className={styles.btn}>
                    Experimental masalalar
                  </Button>
                </Card>
              </Col>
              <Col span={24}>
                <Card className={styles.card}>
                  <EditOutlined className={styles.icon} />
                  <Button type="primary" className={styles.btn}>
                    Masala
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

export default MexanikaIndependentPage;
