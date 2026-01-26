import { Divider, Modal, Typography } from "antd";
import styles from "./ExpirementalModal.module.scss";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function ExpirementalModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Experimental masalalar"
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
        <Title level={5}>1. "Qayiq va tosh" (Arximed qonuni mantig'i)</Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Siz kichik hovuzdagi qayiqda o'tiribsiz.
          Qayiqda og'ir temir tosh bor. Agar siz toshni qayiqdan hovuzga (suvga)
          tashlasangiz, hovuzdagi suv sathi ko'tariladimi, tushadimi yoki
          o'zgarmaydimi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Qayiqda turganda:</Text> Tosh o‘zining og‘irligiga
              teng hajmdagi suvni siqib chiqaradi (chunki u suzib yuribdi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Suvga tashlanganda:</Text> Tosh hovuz tubiga cho‘kadi
              va endi u faqat o‘zining hajmiga teng suvni siqib chiqaradi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Temirning zichligi suvnikidan katta
              bo‘lgani uchun, uning og‘irligiga teng suv hajmi, toshning o‘z
              hajmidan ancha katta. Demak, tosh suvga tashlansa, u kamroq suvni
              siqib chiqaradi va <Text strong>suv sathi tushadi.</Text>
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          2. "Sham va inersiya" (Inersiya va zichlik mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Yopiq shisha idish ichida yonib turgan
          sham bor. Agar siz idishni keskin o‘ngga harakatlantirsangiz, sham
          alangasi qaysi tomonga og‘adi: chapgami, o‘nggami yoki joyida
          qoladimi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Ko‘pchilik inersiya tufayli "chapga og‘adi" deb o‘ylaydi. Lekin bu
              yerda havo zichligi muhim.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Issiq alanga atrofidagi havo sovuq havoga qaraganda{" "}
              <Text strong>zichligi kichikroq (yengilroq).</Text>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Idish o‘ngga harakatlanganda, zichroq (og‘irroq) bo‘lgan sovuq
              havo inersiya bilan orqaga (chapga) intiladi va yengilroq bo‘lgan
              alangani <Text strong>oldinga (o‘ngga)</Text> siqib chiqaradi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Alanga harakat yo‘nalishi bo‘ylab,
              ya’ni <Text strong>o‘ngga</Text> og‘adi.
            </Paragraph>
          </li>
        </ul>

        <Divider />
        <Title level={5}>Nostandart masalalarning mantiqiy strukturasi:</Title>
        <Paragraph>
          Bunday masalalar odatda{" "}
          <Text strong>"Agar ... bo'lsa, nima o'zgaradi?"</Text> degan savol
          atrofida quriladi. Ularni yechish uchun quyidagi 3 qadamli mantiqiy
          modeldan foydalaning:
        </Paragraph>
        <ol>
          <li>
            <Paragraph>
              <Text strong>Ideal holat:</Text> Agar hech narsa o'zgarmasa nima
              bo'lar edi?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Zidiyat:</Text> Qaysi fizik omil (zichlik, inersiya,
              ishqalanish) vaziyatni o'zgartiryapti?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Natija:</Text> Shu omil ta'sirida jarayon qaysi
              tomonga og'adi?
            </Paragraph>
          </li>
        </ol>
      </div>
    </Modal>
  );
}

export default ExpirementalModal;
