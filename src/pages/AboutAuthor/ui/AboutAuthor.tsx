import { Section } from "@/shared/ui/Section";
import styles from "./AboutAuthor.module.scss";
import { Card, Col, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import AuthorImage from "@/shared/assets/about/34.png";
import { BtnToBack } from "@/shared/ui/BtnToBack";

const { Title, Paragraph } = Typography;

function AboutAuthor() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.section}>
      <BtnToBack />
      <div className={styles.content}>
        <Title level={sm ? 1 : 3} className={styles.title}>
          Muallif haqida
        </Title>

        <Card>
          <Row gutter={[20, 20]}>
            <Col span={sm ? 6 : 24} className={styles.colImg}>
              <Card>
                <img src={AuthorImage} alt="author" className={styles.img} />
              </Card>
            </Col>
            <Col span={sm ? 18 : 24}>
              <Card>
                <Title level={sm ? 3 : 5}>
                  Orınbetov Nurılla Turdımuratovich
                </Title>
                <Paragraph>
                  1975 yil 9-sentyabrda Qoraqalpog'iston Respublikasi Taxta
                  -ko'pir tumanida tug'ilgan. Hozirgi vaqtda Nukus davlat
                  pedagogika instituti “Texnologik ta'lim” kafedrasining
                  dotsenti. Qoraqalpog'iston Respublikasi “Xalq ta'limi
                  a'lochisi” ko'krak nishonini muallifi.
                </Paragraph>
                <Paragraph>
                  N. Orınbetov tomonidan 70 dan ochiq ilmiy ishlar e'lon
                  qilingan bo'lib, ulardan 3 darslik, 1 ta o'quv qo'llanma, 1 ta
                  elektron darslik, 1 monografiya, 6 ta uslubiy qo'llanma va
                  ilmiy maqola, tezislari chop etilgan.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </Section>
  );
}

export default AboutAuthor;
