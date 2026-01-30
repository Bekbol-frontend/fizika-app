import { Divider, Modal, Typography } from "antd";
import TeoraImg from "@/shared/assets/atom/teora/Снимок экрана 2026-01-30 в 08.03.05.png";
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
        <Title level={5}>"Zarrachaning izi" (Vilson kamerasi yordamida) </Title>
        <div className={styles.imgBlock}>
          <img src={TeoraImg} alt="teora" className={styles.content} />
        </div>

        <Divider />
        <Title level={5}>⚛️ Masala: Qaysi zarracha qayerga burildi?</Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Sizda Vilson kamerasi (bug‘ bilan
          to‘ldirilgan idish) bor. Kameraga tashqaridan kuchli magnit maydon
          ta’sir ettirilmoqda. Kameraga bir vaqtda uchta noma’lum zarracha uchib
          kirdi va rasmda ko‘rsatilgandek iz (trek) qoldirdi:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Birinchi zarracha</Text> — chapga keskin egildi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text>Ikkinchi zarracha</Text> — to‘g‘ri chiziq bo‘ylab o‘tib
              ketdi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Uchinchi zarracha</Text> — o‘ngga yoy shaklida
              burildi.
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          <Text strong>Savol:</Text> Bu zarrachalar qaysilar? (Alfa, beta yoki
          gamma?)
        </Paragraph>

        <Divider />

        <Title level={5}>🧐 Yechish jarayoni (Maydalab tushuntirish):</Title>
        <Paragraph>
          Bu masalani yechish uchun bizga Lorens kuchi va zarrachalarning
          zaryadi haqidagi mantiq kerak bo‘ladi.
        </Paragraph>

        <Paragraph strong>
          1-qadam: Gamma-kvantni aniqlash (To‘g‘ri chiziq)
        </Paragraph>
        <Paragraph>
          Gamma nurlari — bu elektromagnit to‘lqinlar (fotonlar), ularning
          massasi ham, zaryadi ham yo‘q. Magnit maydon faqat zaryadlangan
          zarrachalarga ta’sir qiladi.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Mantiq:</Text> Agar zarracha magnit maydonida hech
              qanday og‘ishsiz to‘g‘ri o‘tib ketsa, u neytraldir.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Ikkinchi iz — bu Gamma ($\gamma$)
              nurlari.
            </Paragraph>
          </li>
        </ul>

        <Paragraph strong>
          2-qadam: Alfa-zarrachani aniqlash (O‘ngga burilish)
        </Paragraph>
        <Paragraph>
          Alfa-zarracha — bu geliy atomining yadrosi. U ijobiy (musbat)
          zaryadlangan va u juda og‘ir (protondan 4 marta og‘ir).
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Mantiq:</Text> Lorens kuchi ta’sirida u bir tomonga
              og‘adi. Uning massasi katta bo‘lgani uchun u "inersiya" bilan
              buriladi, ya’ni uning traektoriyasi katta radiusli yoy bo‘ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> O‘ngga qarab silliq egilgan uchinchi
              iz — bu Alfa ($\alpha$) zarracha.
            </Paragraph>
          </li>
        </ul>

        <Paragraph strong>
          3-qadam: Beta-zarrachani aniqlash (Chapga keskin burilish)
        </Paragraph>
        <Paragraph>
          Beta-zarracha — bu tez uchayotgan elektron. U manfiy (manfiy)
          zaryadlangan va juda yengil.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Mantiq:</Text> Zaryadi manfiy bo‘lgani uchun u ijobiy
              zaryadli zarrachaga nisbatan <Text strong>teskari tomonga</Text>
              og‘adi. Massasi juda kichik bo‘lgani uchun magnit maydon uni juda
              oson "burib" yuboradi (egilish radiusi kichik bo‘ladi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Chapga keskin qayrilgan birinchi iz —
              bu Beta zarracha.
            </Paragraph>
          </li>
        </ul>

        <Divider />
        <Title level={5}>✅ Yakuniy natija:</Title>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Keskin burilgan iz:</Text> Beta-zarracha (Yengil va
              manfiy).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>To‘g‘ri chiziq:</Text> Gamma-nur (Neytral).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Keng yoyli iz:</Text> Alfa-zarracha (Og‘ir va
              musbat).
            </Paragraph>
          </li>
        </ol>

        <Divider />
        <Title level={5}>💡 Bu masalaning "Nostandart" jihati:</Title>
        <Paragraph>
          O‘quvchilar ko‘pincha hamma narsa og‘adi deb o‘ylashadi. Bu masala
          orqali ularga:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>Zaryad yo‘nalishni belgilashini;</Paragraph>
          </li>
          <li>
            <Paragraph>
              Massa esa burilishning "shiddatini" (radiusini) belgilashini
              tushuntirish mumkin.
            </Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default TeoraModal;
