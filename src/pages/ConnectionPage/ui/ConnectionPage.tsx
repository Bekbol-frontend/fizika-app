import { Section } from "@/shared/ui/Section";
import styles from "./ConnectionPage.module.scss";
import { Card, Col, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BtnToBack } from "@/shared/ui/BtnToBack";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title } = Typography;

function ConnectionPage() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.section}>
      <BtnToBack />
      <div className={styles.content}>
        <Title level={sm ? 1 : 3} className={styles.title}>
          Bog'lanish
        </Title>

        <Card>
          <Row gutter={[20, 20]}>
            <Col span={sm ? 12 : 24} className={styles.colImg}>
              <ul>
                <li>
                  <Title level={5}>
                    <MessageOutlined /> nirilla75@bk.ru
                  </Title>
                </li>
                <li>
                  <Title level={5}>
                    <PhoneOutlined /> +998(91) 303-23-03
                  </Title>
                </li>
              </ul>
            </Col>
            <Col span={sm ? 12 : 24}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11771.594502026881!2d59.5732783!3d42.4724447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9bd314d3be83%3A0xf74ee7438f61b30f!2zMjYgLSDQnNC40LrRgNC-LdGA0LDQudC-0L0sINCd0YPQutGD0YEsINCg0LXRgdC_0YPQsdC70LjQutCwINCa0LDRgNCw0LrQsNC70L_QsNC60YHRgtCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1770742393753!5m2!1sru!2s"
                width="100%"
                height="400px"
                style={{
                  borderRadius: "4px",
                  border: "none",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Card>
      </div>
    </Section>
  );
}

export default ConnectionPage;
