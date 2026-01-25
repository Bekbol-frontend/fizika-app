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
import { BtnToBack } from "@/shared/ui/BtnToBack";
import { useCallback, useState } from "react";
import { QuestionModal } from "@/shared/ui/QuestionModal";
import { questionItems } from "../questionItems";

const { Title } = Typography;

function MexanikaMethodologyPage() {
  const [testModal, setTestModal] = useState(false);

  const onShowTestModal = useCallback(() => {
    setTestModal(true);
  }, []);

  const onCloseTestModal = useCallback(() => {
    setTestModal(false);
  }, []);

  const { sm } = useResponsive();

  return (
    <>
      <Section className={styles.seciont}>
        <BtnToBack />
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
                    <Button
                      type="primary"
                      className={styles.btn}
                      onClick={onShowTestModal}
                    >
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

      <QuestionModal
        isModalOpen={testModal}
        handleCancel={onCloseTestModal}
        questions={questionItems}
      />
    </>
  );
}

export default MexanikaMethodologyPage;
