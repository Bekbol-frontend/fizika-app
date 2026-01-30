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
                    <PhoneOutlined /> +99893 614 39 89
                  </Title>
                </li>
              </ul>
            </Col>
            <Col span={sm ? 12 : 24}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.074786984384!2d59.61677447687524!3d42.468698071183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a44421fd7c7%3A0x803802377eeb8fab!2z0J3Rg9C60YPRgdGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YI!5e0!3m2!1sru!2s!4v1769795940670!5m2!1sru!2s"
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
