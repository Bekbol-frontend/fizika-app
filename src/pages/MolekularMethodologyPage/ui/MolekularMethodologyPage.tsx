import { BtnToBack } from "@/shared/ui/BtnToBack";
import { Section } from "@/shared/ui/Section";
import styles from "./MolekularMethodologyPage.module.scss";
import { Button, Card, Col, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import ImgBlock from "@/shared/ui/ImgBlock/ui/ImgBlock";
import {
  EditOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Img from "@/shared/assets/molekular/molekular.jpg";
import { useCallback, useState } from "react";
import { QuestionModal } from "@/shared/ui/QuestionModal";
import { questionMolekularItems } from "../questionItems";
import TeoraModal from "./TeoraModal/TeoraModal";
import MatterModal from "./MatterModal/MatterModal";

const { Title } = Typography;

function MolekularMethodologyPage() {
  const [testModal, setTestModal] = useState(false);
  const [teoraModal, setTeoraModal] = useState(false);
  const [matterModal, setMatterModal] = useState(false);

  const { sm } = useResponsive();

  const onShowTestModal = useCallback(() => {
    setTestModal(true);
  }, []);

  const onCloseTestModal = useCallback(() => {
    setTestModal(false);
  }, []);

  const onShowTeoraModal = useCallback(() => {
    setTeoraModal(true);
  }, []);

  const onCloseTeoraModal = useCallback(() => {
    setTeoraModal(false);
  }, []);

  const onShowMatterModal = useCallback(() => {
    setMatterModal(true);
  }, []);

  const onCloseMatterModal = useCallback(() => {
    setMatterModal(false);
  }, []);

  return (
    <>
      <Section className={styles.section}>
        <BtnToBack />
        <div className={styles.inner}>
          <Title level={sm ? 1 : 3}>Masala yechish metodikasi</Title>
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
                    <Button
                      type="primary"
                      className={styles.btn}
                      onClick={onShowTeoraModal}
                    >
                      Nazariy ma’lumot
                    </Button>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card className={styles.card}>
                    <EditOutlined className={styles.icon} />
                    <Button
                      type="primary"
                      className={styles.btn}
                      onClick={onShowMatterModal}
                    >
                      Masala yechish
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
        questions={questionMolekularItems}
      />

      <TeoraModal isModalOpen={teoraModal} handleCancel={onCloseTeoraModal} />
      <MatterModal
        isModalOpen={matterModal}
        handleCancel={onCloseMatterModal}
      />
    </>
  );
}

export default MolekularMethodologyPage;
