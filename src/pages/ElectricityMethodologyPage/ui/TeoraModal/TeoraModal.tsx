import { Divider, Modal, Typography } from "antd";
import styles from "./TeoraModal.module.scss";
import TeoraImg from "@/shared/assets/elektr/teora/Снимок экрана 2026-01-28 в 09.18.28.png";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function TeoraModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Jihozlar"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <div className={styles.content}>
        <Title level={5}>"Alyuminiy quvurdagi magnit poygasi"</Title>
        <div className={styles.imgBlock}>
          <img src={TeoraImg} alt="teora" className={styles.content} />
        </div>
        <Title level={5}>🧲 Masala: Magnit nima uchun sekin tushadi?</Title>

        <Paragraph>
          <Text strong>Jihozlar:</Text> Ikkita bir xil uzunlikdagi quvur (biri
          plastik, ikkinchisi alyuminiy yoki mis), ikkita kuchli neodim magniti.
        </Paragraph>
        <Paragraph>
          <Text strong>Vazifa:</Text> Magnitlarni bir vaqtda quvurlarning ichiga
          tashlab yuboring. Qaysi quvurdan magnit birinchi bo‘lib tushib ketadi
          va nima uchun?
        </Paragraph>

        <Divider />

        <Title level={5}>🧐 Yechish jarayoni (Maydalab tushuntirish):</Title>
        <Paragraph>
          Ko‘pchilik alyuminiy magnitni o'ziga tortmasligini biladi, shuning
          uchun ikkala quvurda ham natija bir xil bo‘ladi deb o‘ylaydi. Lekin bu
          xato.
        </Paragraph>

        <Paragraph strong>1-qadam: Plastik quvurdagi harakat</Paragraph>
        <Paragraph>
          Plastik — dielektrik (tok o‘tkazmaydi). Magnit tushayotganda plastikda
          hech qanday elektr o‘zgarishi sodir bo‘lmaydi. Magnit faqat og‘irlik
          kuchi ($g$) ta’sirida erkin tushadi.
        </Paragraph>

        <Paragraph strong>
          2-qadam: Alyuminiy quvurdagi harakat (Nostandart holat)
        </Paragraph>

        <Paragraph>
          Alyuminiy magnitga yopishmaydi, lekin u —{" "}
          <Text strong>o‘tkazgich.</Text>
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Magnit quvur ichidan pastga harakatlanar ekan, u o‘zi bilan birga
              o‘zgaruvchan magnit maydonni olib yuradi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bu o‘zgaruvchan maydon alyuminiy quvurning devorlarida aylanma
              elektr toklari — **Fuko toklari (uyurma toklar)**ni hosil qiladi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>3-qadam: Lenz qonunining ishga tushishi</Title>

        <Paragraph>
          Fizikadagi eng mantiqiy qonunlardan biri bo‘lgan{" "}
          <Text strong>Lenz qonuni</Text> shunday deydi:{" "}
          <Text italic>
            "Induksion tok o‘zini vujudga keltirgan sababga qarshi yo‘nalgan
            magnit maydon yaratadi."
          </Text>
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Ya’ni, quvurda hosil bo‘lgan toklar shunday magnit maydon
              yaratadiki, u tushayotgan magnitni yuqoriga "itaradi" (uni
              tormozlaydi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Magnit va quvur o‘rtasida hech qanday mexanik ishqalanish yo‘q,
              lekin <Text strong>magnit tormozlanish</Text> sodir bo‘ladi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>✅ Yakuniy natija:</Title>
        <Paragraph>
          Plastik quvurdan magnit bir necha soniyada tushib ketadi. Alyuminiy
          quvurda esa u xuddi "havoda muallaq suzayotgandek" yoki "asal ichida
          tushayotgandek" juda sekin harakatlanadi.
        </Paragraph>

        <Divider />

        <Title level={5}>
          💡 Bu masalani qanday qilib mantiqiy savolga aylantirish mumkin?
        </Title>
        <Paragraph>
          O‘quvchilarga savol bering:{" "}
          <Text italic>
            "Agar biz alyuminiy quvurni bo‘ylamasiga kesib (tirqish hosil qilib)
            qo‘ysak, magnit yana shunday sekin tushadimi?"
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>Mantiqiy javob:</Text> Yo‘q! Agar quvur kesilsa, aylanma
          (yopiq) toklar hosil bo‘lolmaydi. Natijada qarshilik ko‘rsatuvchi
          magnit maydon ham hosil bo‘lmaydi va magnit erkin tushib ketadi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default TeoraModal;
