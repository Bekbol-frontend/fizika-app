import { Divider, Modal, Typography } from "antd";
import TeoraImg from "@/shared/assets/optika/teora/Снимок экрана 2026-01-29 в 08.31.49.png";
import styles from "./TeoraModal.module.scss";

const { Title, Text, Paragraph } = Typography;

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
        <Title level={5}>"Yo‘qolib qolgan tanga" yoki "Singan nur"</Title>
        <div className={styles.imgBlock}>
          <img src={TeoraImg} alt="teora" className={styles.content} />
        </div>

        <Title level={5}>🍵 Masala: Nima uchun tanga ko‘rinmay qoldi?</Title>
        <Paragraph>
          <Text strong>Jihozlar:</Text> Shaffof shisha stakan, tanga va suv.
        </Paragraph>
        <Paragraph strong>Vazifa:</Paragraph>

        <ol>
          <li>
            <Paragraph>Tangani stol ustiga qo‘ying.</Paragraph>
          </li>
          <li>
            <Paragraph>
              Ustiga bo‘sh shisha stakanni qo‘ying. Tanga stakan tubidan
              ko‘rinib turadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Endi stakanga suv quying. Yon tomondan qaraganingizda, tanga
              g‘oyib bo‘ladi!
            </Paragraph>
          </li>
        </ol>
        <Divider />
        <Title level={5}>🧐 Yechish jarayoni (Maydalab tushuntirish):</Title>
        <Paragraph>
          Nega tanga "yo‘qoladi"? Bu sehr emas, bu — optik chegara.
        </Paragraph>
        <Paragraph strong>
          1-qadam: Havo to‘ldirilgan stakan (Boshlang‘ich holat)
        </Paragraph>
        <Paragraph>
          Stakan bo‘sh bo‘lganda, tangadan chiqqan yorug‘lik nurlari shisha va
          havo orqali o‘tib, to‘g‘ri sizning ko‘zingizga yetib boradi. Havo va
          shishaning optik zichligi yaqin bo‘lgani uchun nur yo‘nalishi keskin
          o‘zgarmaydi.
        </Paragraph>
        <Paragraph strong>
          2-qadam: Suv to‘ldirilgan stakan (Nostandart holat)
        </Paragraph>
        <Paragraph>
          Siz stakanga suv quyganingizda, yorug‘lik nurlari suv → shisha → havo
          chegaralaridan o‘tishi kerak bo‘ladi.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Suvdan havoga o‘tayotgan nur ma’lum bir burchak ostida (kritik
              burchak) tushsa, u tashqariga chiqmaydi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Buning o‘rniga nur suv sirtidan xuddi ko‘zgudan qaytgandek orqaga
              — stakan ichiga qaytadi. Bunga{" "}
              <Text strong>yorug‘likning to‘la ichki qaytishi</Text>
              deyiladi.
            </Paragraph>
          </li>
        </ul>

        <Paragraph strong>3-qadam: Ko‘rish burchagi</Paragraph>
        <Paragraph>
          Siz yon tomondan qaraganingizda, tangadan chiquvchi nurlar ko‘zingizga
          yetib bormaydi, chunki ular stakan devoridan ichkariga qaytib ketadi.
          Siz tanga o‘rniga stakan devorining ko‘zgu kabi yaltirashini ko‘rasiz.
        </Paragraph>

        <Divider />

        <Title level={5}>✅ Yakuniy xulosa:</Title>
        <Paragraph>
          Tanga aslida joyida turibdi. Faqat suv yorug‘lik nurlarini "qamab"
          qo‘ygani uchun u bizning nigohimizdan yashirinadi. Agar siz stakanning
          tepasidan (tikka) qarasangiz, tangani yana ko‘rishingiz mumkin, chunki
          u yerda nurlar perpendikulyar chiqadi va qaytmaydi.
        </Paragraph>

        <Divider />

        <Title level={5}>
          💡 Buni qanday qilib mantiqiy savolga aylantirish mumkin?
        </Title>

        <Paragraph>
          O‘quvchilarga savol bering:{" "}
          <Text italic>
            "Agar biz stakanga suv emas, balki optik zichligi suvdan ham yuqori
            bo‘lgan shaffof moy (yog‘) quysak, tanga tezroq yoki osonroq
            yo‘qoladimi?"
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>Mantiqiy javob:</Text> Ha! Suyuqlikning optik zichligi
          (sinish ko‘rsatkichi) qanchalik katta bo‘lsa, to‘la ichki qaytish
          shunchalik oson sodir bo‘ladi va "yo‘qolish effekti" kuchliroq namoyon
          bo‘ladi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default TeoraModal;
