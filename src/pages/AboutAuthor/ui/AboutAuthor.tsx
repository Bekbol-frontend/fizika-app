import { Section } from "@/shared/ui/Section";
import styles from "./AboutAuthor.module.scss";
import { Card, Col, Divider, Row, Typography } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import AuthorImageNurjan from "@/shared/assets/about/nurjan.jpg";
import AuthorImageMexri from "@/shared/assets/about/mexri.jpg";
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
                <img
                  src={AuthorImageNurjan}
                  alt="author"
                  className={styles.img}
                />
              </Card>
            </Col>
            <Col span={sm ? 18 : 24}>
              <Card>
                <Title level={sm ? 3 : 5}>
                  Matjanov Nurjan Sultamuratovich
                </Title>
                <Paragraph>
                  1974-yil 21-martda Qoraqalpog'iston Respublikasi Nukus
                  shahrida tug'ilgan. Hozirgi vaqtda Nukus davlat pedagogika
                  instituti “Fizika o’qitish metodikasi” kafedrasining
                  professori. 2022-yili 7-dekabrda Toshkent davlapedagogika
                  universiteti huzuridagi ilmiy darajalar beruvchi
                  DSc.03⁄03.01.2020.Ped.26.01 raqamli ilmiy kengashda
                  «Pedagogika oliy tálim tizimida óqitilayotgan kvant
                  nazariyasining metodologik va didaktik asoslari» mavzusida
                  13.00.02-Tálim va tarbiya metodikasi (fizika) ixtisosligi
                  bóyicha dissertatsiya ishini muvaffaqiyatli himoya qilgan va
                  2023-yil 31-yanvar kungi OAK ning 332⁄1-sonli bayonnomasi
                  bilan tasdiqlangan. Pedagogika fanlari doktori (DSc) ilmiy
                  darajasini olgan.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[20, 20]}>
            <Col span={sm ? 6 : 24} className={styles.colImg}>
              <Card>
                <img
                  src={AuthorImageMexri}
                  alt="author"
                  className={styles.img}
                />
              </Card>
            </Col>
            <Col span={sm ? 18 : 24}>
              <Card>
                <Title level={sm ? 3 : 5}>
                  Bekmuratova Mexrijamal Yelubaevna
                </Title>
                <Paragraph>
                  1998-yil 29-mayda Qoraqalpog'iston Respublikasi Nukus shahrida
                  tug'ilgan. Hozirgi vaqtda Nukus davlat pedagogika instituti
                  130002- Ta’lim-tarbiya nazariyasi va metodikasi (fizika)
                  ixtisosligining 3-bosqich doktoranti. 2005-2014 yillarda
                  24-sonli umum ta’lim maktabini a’lo darajali shaxodatnomaga
                  tamomlagan. 2014-2017 yillarda kasb-hunar kolledjini a’lo
                  darajali diolom bilan tamomlagan. 2017-2021 yillarda Nukus
                  davlat pedagogika institutini tamomlab 2021-2023 yillarda
                  Berdax nomidagi Qoraqolpaǵiston Milliy Universiteti
                  magistratura bosqichini a’lo baholar bilan tamomlagan.
                  M.Bekmuratova tomonidan 20 dan oshiq ilmiy ishlar e'lon
                  qilingan bo'lib, ulardan darslik, 1ta o'quv metodik qo'llanma,
                  3ta chet el maqola , ilmiy maqolalar va tezislari chop
                  etilgan.
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
