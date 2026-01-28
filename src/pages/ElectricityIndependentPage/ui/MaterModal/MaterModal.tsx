import { Divider, Modal, Typography } from "antd";
import styles from "./MaterModal.module.scss";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function MaterModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Masala"
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
        <Title level={5}>1. "Sehrli zanjir" (Zanjirning harakati)</Title>
        <Paragraph>
          Stol ustida g'altak kabi o'ralgan uzun zanjir yotibdi. Siz zanjirning
          bir uchidan ushlab, uni o'zgarmas $v$ tezlik bilan yuqoriga ko'tara
          boshladingiz.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Savol:</Text> Zanjirni ko'tarish uchun sarflayotgan
              kuchingiz faqat zanjirning havoda turgan qismining og'irligiga
              ($mg$) tengmi yoki undan kattami?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> O'quvchi ko'pincha faqat
              og'irlikni hisobga oladi. Lekin har bir yangi zanjir halqasi tinch
              holatdan $v$ tezlikka chiqishi uchun unga qo'shimcha impuls berish
              kerak. Bu "o'zgaruvchan massa" dinamikasiga kirishdir.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          2. "Pufakchalar poygasi" (Arximed kuchi va inersiya)
        </Title>
        <Paragraph>
          Siz mashinada ketyapsiz va qo'lingizda ichida suv va havo pufakchasi
          bo'lgan yopiq shisha idish bor. Mashina keskin tormoz berganda
          (oldinga qarab sekinlashganda), shisha ichidagi havo pufakchasi qaysi
          tomonga harakatlanadi: oldingami yoki orqaga?
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Savol:</Text> Pufakchaning harakat yo'nalishini
              aniqlang.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> Hamma inersiya qonuniga ko'ra
              "oldinga uchaman" deb o'ylaydi. Lekin bu yerda suvning zichligi
              havonikidan katta bo'lgani uchun, suv "og'irroq" inersiyaga ega
              bo'lib, pufakchani kutilmagan tomonga siqib chiqaradi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>3. "Qush va havo" (Og'irlik va bosim)</Title>
        <Paragraph>
          Yopiq va germetik (havo kirmaydigan) quti tarozi ustida turibdi. Quti
          ichida bir pasda uchib yurgan qushcha bor.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Savol:</Text> Agar qushcha quti ichida havoda muallaq
              (qanot qoqib) tura boshlasa, tarozi ko'rsatkichi o'zgaradimi? Agar
              qushcha pastga qarab tezlanish bilan sho'ng'isa-chi?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> Qush qutiga tegmayotgan
              bo'lsa ham, u havoni pastga itaradi. Bu bosim orqali quti tubiga
              uzatiladi. Bu masala o'quvchiga kuchlarning uzatilishi faqat
              bevosita tegish orqali bo'lmasligini tushuntiradi.
            </Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default MaterModal;
