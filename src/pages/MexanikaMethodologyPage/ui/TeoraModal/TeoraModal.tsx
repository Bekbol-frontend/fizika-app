import { Divider, Modal, Typography } from "antd";
import TeoraImg from "@/shared/assets/mexanika/teora.png";
import styles from "./TeoraModal.module.scss";

const { Title, Text, Paragraph } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function TeoraModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Teoria"
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
        <Title level={5}>
          🏋️ Masala: "Qaysi ip uziladi?" (Inersiya va kuch)
        </Title>
        <div className={styles.imgBlock}>
          <img src={TeoraImg} alt="teora" className={styles.content} />
        </div>

        <div>
          <Text strong>Ihozlar:</Text>
          <Text>
            Shiftdan osilgan mustahkam ip, unga bog‘langan og‘ir yuk (masalan, 5
            kg li tosh yoki og'ir kofe choynagi) va yukning pastki qismiga
            bog‘langan xuddi shunday boshqa bir ip.
          </Text>
          <Text strong>Vazifa:</Text> Pastki ipdan ushlab tortiladi. Qaysi ip
          uziladi: <Text strong>yuqoridagimi yoki pastdagimi?</Text>
        </div>

        <Divider />

        <Title level={5}>🧐 Yechish jarayoni (Maydalab tushuntirish):</Title>
        <Paragraph>
          Bu masalaning javobi{" "}
          <Text strong>siz ipni qanday tortishingizga</Text> bog‘liq. Bu yerda
          fizikadagi ikki xil holat to‘qnashadi: <Text strong>Statika</Text> va{" "}
          <Text strong>Dinamika (Inersiya).</Text>
        </Paragraph>

        <Paragraph strong>
          1-holat: Ipni asta-sekin, sekinlik bilan tortsangiz
        </Paragraph>

        <Paragraph>
          Siz pastki ipni sekin tortganingizda, yuqori ipga ikkita kuch ta’sir
          qiladi:
        </Paragraph>

        <Paragraph>1. Yukning og‘irligi (P = mg).</Paragraph>
        <Paragraph>
          2. Sizning qo‘lingiz bilan tortayotgan kushingiz (F).
        </Paragraph>
        <Paragraph>
          <Text strong>Mantiq:</Text> Yuqori ipdagi umumiy taranglik F + mg ga
          teng, pastki ipda esa faqat sizning kushingiz $F$ bor.
        </Paragraph>
        <Paragraph>
          <Text strong>Natija:</Text> Yuqori ipga ko‘proq kuch tushadi va yuqori
          ip uziladi.
        </Paragraph>

        <Paragraph strong>
          2-holat: Ipni keskin, kuchli siltash bilan tortsangiz
        </Paragraph>

        <Paragraph>
          Endi mantiq o‘zgaradi. Siz ipni juda tez (shiddat bilan) pastga
          tortganingizda, <Text strong>inersiya qonuni</Text> ishga tushadi.
        </Paragraph>

        <Paragraph>
          <Text strong>Mantiq:</Text> Og‘ir yuk (tosh) katta massaga ega,
          shuning uchun u o‘z holatini saqlab qolishga harakat qiladi
          (inersiya). Siz bergan keskin kuch yuqori ipga yetib borguncha, og‘ir
          yuk joyidan jilishi kerak. Lekin yukning inersiyasi tufayli u bir
          lahzaga "qotib" qoladi.
        </Paragraph>

        <Paragraph>
          <Text strong>Natija:</Text> Berilgan keskin kuch yukdan o'tib yuqoriga
          chiqishga ulgurmaydi va butun bosim pastki ipga tushadi. Natijada
          <Text strong>pastki ip uziladi.</Text>
        </Paragraph>

        <Divider />

        <Title level={5}>✅ Yakuniy xulosa:</Title>
        <Paragraph>
          <Text strong>Sekin tortishda:</Text> Statika qonunlari ishlaydi —
          <Text strong>Yuqori ip</Text> uziladi (chunki u yukni ham, sizni ham
          ko‘taryapti).
        </Paragraph>
        <Paragraph>
          <Text strong>Keskin tortishda:</Text> Inersiya qonuni ishlaydi —{" "}
          <Text strong>Pastki ip</Text> uziladi (chunki yuk o‘zining og‘irligi
          bilan yuqori ipni "himoya" qilib qoladi).
        </Paragraph>

        <Divider />

        <Title level={5}>💡 Bu masalani darsda qanday qo'llash mumkin?</Title>
        <Paragraph>
          Ushbu tajriba o‘quvchilarga{" "}
          <Text strong>massa nafaqat og‘irlik, balki inersiya o‘lchovi</Text>{" "}
          ham ekanini ko‘rsatib beradi. O‘quvchilardan "Nima deb o‘ylaysiz,
          qaysi biri uziladi?" deb so‘rab, so‘ng ikkala holatni amalda
          ko‘rsatish darsning eng hayajonli qismi bo‘ladi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default TeoraModal;
