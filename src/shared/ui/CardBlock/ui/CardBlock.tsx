import Img1 from "@/shared/assets/masala-echish.png";
import Img2 from "@/shared/assets/mustaqil-echish.png";
import styles from "./CardBlock.module.scss";
import { Section } from "../../Section";

import { Button, Card, Col, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { appRoutes } from "@/shared/config/routeConfig";

const { Title } = Typography;

interface IProps {
  mainTitle: string;
  titleOne: string;
  titleTwo: string;

  pageOne: string;
  pageTwo: string;
}

function CardBlock(props: IProps) {
  const { mainTitle, titleOne, titleTwo, pageOne, pageTwo } = props;

  const { sm } = useResponsive();
  const navigate = useNavigate();

  return (
    <Section className={styles.section}>
      <Button
        icon={<CloseOutlined />}
        type="primary"
        className={styles.btnClose}
        onClick={() => navigate(appRoutes.home)}
      />
      <div className={styles.inner}>
        <Title level={sm ? 1 : 3}>{mainTitle}</Title>

        <Row gutter={[16, 16]}>
          <Col span={sm ? 12 : 24}>
            <Card
              variant="borderless"
              cover={<img draggable={false} alt={titleOne} src={Img1} />}
            >
              <Title level={sm ? 4 : 5}>{titleOne}</Title>
              <Button
                onClick={() => navigate(pageOne)}
                type="primary"
                className={styles.cardBtn}
              >
                Kirish
              </Button>
            </Card>
          </Col>
          <Col span={sm ? 12 : 24}>
            <Card
              variant="borderless"
              cover={<img draggable={false} alt={titleTwo} src={Img2} />}
            >
              <Title level={sm ? 4 : 5}>{titleTwo}</Title>
              <Button
                onClick={() => navigate(pageTwo)}
                type="primary"
                className={styles.cardBtn}
              >
                Kirish
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default CardBlock;
