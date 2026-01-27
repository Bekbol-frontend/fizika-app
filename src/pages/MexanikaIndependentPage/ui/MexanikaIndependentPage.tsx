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
import NostandartModal from "./NostandartModal/NostandartModal";
import { useCallback, useState } from "react";
import ExpirementalModal from "./ExpirementalModal/ExpirementalModal";
import MaterModal from "./MaterModal/MaterModal";

const { Title } = Typography;

function MexanikaIndependentPage() {
  const [noStandartModal, setNoStandartModal] = useState(false);
  const [expirementalModal, setExpirementalModal] = useState(false);
  const [materModal, setMaterModal] = useState(false);
  const { sm } = useResponsive();

  const onShowNoStandarModal = useCallback(() => {
    setNoStandartModal(true);
  }, []);

  const onCloseNoStandarModal = useCallback(() => {
    setNoStandartModal(false);
  }, []);

  const onShowExpirementalModal = useCallback(() => {
    setExpirementalModal(true);
  }, []);

  const onCloseExpirementalModal = useCallback(() => {
    setExpirementalModal(false);
  }, []);

  const onShowMaterModal = useCallback(() => {
    setMaterModal(true);
  }, []);

  const onCloseMaterModal = useCallback(() => {
    setMaterModal(false);
  }, []);

  return (
    <>
      <Section className={styles.seciont}>
        <BtnToBack />
        <div className={styles.inner}>
          <Title level={sm ? 1 : 3}>Mustaqil echish uchun masalalar</Title>
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
                      onClick={onShowNoStandarModal}
                    >
                      Nostandart masala
                    </Button>
                  </Card>
                </Col>
                <Col span={sm ? 12 : 24}>
                  <Card className={styles.card}>
                    <InfoCircleOutlined className={styles.icon} />
                    <Button
                      type="primary"
                      className={styles.btn}
                      onClick={onShowExpirementalModal}
                    >
                      Experimental masalalar
                    </Button>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card className={styles.card}>
                    <EditOutlined className={styles.icon} />
                    <Button
                      type="primary"
                      className={styles.btn}
                      onClick={onShowMaterModal}
                    >
                      Masala
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Section>

      <NostandartModal
        isModalOpen={noStandartModal}
        handleCancel={onCloseNoStandarModal}
      />
      <ExpirementalModal
        isModalOpen={expirementalModal}
        handleCancel={onCloseExpirementalModal}
      />

      <MaterModal isModalOpen={materModal} handleCancel={onCloseMaterModal} />
    </>
  );
}

export default MexanikaIndependentPage;
