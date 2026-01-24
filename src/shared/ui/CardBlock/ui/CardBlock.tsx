import Img1 from "@/shared/assets/masala-echish.png";
import Img2 from "@/shared/assets/mustaqil-echish.png";
import styles from "./CardBlock.module.scss";
import { Section } from "../../Section";

import { Button, Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

interface IProps {
  mainTitle: string;
  titleOne: string;
  titleTwo: string;
}

function CardBlock(props: IProps) {
  const { mainTitle, titleOne, titleTwo } = props;

  return (
    <Section className={styles.section}>
      <div className={styles.inner}>
        <Title>{mainTitle}</Title>

        <Row gutter={16}>
          <Col span={12}>
            <Card
              variant="borderless"
              cover={<img draggable={false} alt={titleOne} src={Img1} />}
            >
              <Title level={4}>{titleOne}</Title>
              <Button>Batafsil</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              variant="borderless"
              cover={<img draggable={false} alt={titleTwo} src={Img2} />}
            >
              <Title level={4}>{titleTwo}</Title>
              <Button>Batafsil</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default CardBlock;
