import { Divider, Modal, Typography } from "antd";
import styles from "./MatterModal.module.scss";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function MatterModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Masala yechish"
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
        <Title level={5}>⚡️ Masala: Qush va Yuqori Kuchlanishli Sim</Title>
        <Paragraph strong>Vaziyat:</Paragraph>
        <Paragraph>
          Siz yuqori kuchlanishli (masalan, 110,000 Volt) elektr simlarini
          ko'rgansiz. Agar o'sha simga biron bir narsa tegsa, u yonib ketishi
          yoki portlashi mumkin. Lekin oddiy qushlar bemalol o'sha simning
          ustiga qo'nib o'tirishadi va ularni tok urmaydi.
        </Paragraph>
        <Paragraph strong>Savol:</Paragraph>
        <Paragraph>Nima uchun qushni tok urmaydi?</Paragraph>
        <Paragraph italic>
          (Diqqat, ko'pchilik "qushning oyog'i ostida izolyatsiya bor" yoki
          "qushning terisi quruq" deb o'ylaydi, lekin bu noto'g'ri).
        </Paragraph>

        <Divider />

        <Title level={5}>🧐 Mantiqiy tushuntirish (Formulasiz):</Title>

        <Paragraph>
          Tok urishi uchun faqatgina "kuchlanish bor joyga tegish" yetarli emas.
          Tok oqishi uchun aylanma yo'l (zanjir) va eng asosiysi —{" "}
          <Text strong>kuchlanishlar farqi</Text> bo'lishi kerak.
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Potensiallar farqi:</Text> Qush simga qo'nganida,
              uning ikkala oyog'i ham <Text strong>bitta simda</Text> turadi.
              Demak, ikkala oyog'idagi kuchlanish bir xil (masalan, ikkalasida
              ham 110,000 Volt). Farq esa nolga teng (110,000 - 110,000 = 0).
              Farq bo'lmagandan keyin tok qushning tanasi orqali o'tmaydi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Tok qayerga qarab oqadi?</Text> Tok doimo qarshilik
              eng kam bo'lgan joydan oqadi. Mis simning qarshiligi qushning
              tanasiga qaraganda million marta kamroq. Shuning uchun tok qushni
              "aylanib o'tib", sim bo'ylab ketaveradi.
            </Paragraph>
          </li>
        </ol>

        <Title level={5}>⚠️ Qachon qushni tok uradi? (Nostandart qismi)</Title>

        <Paragraph>
          Agar o'sha qush simda turgan holatida, qanoti bilan{" "}
          <Text strong>boshqa bir simga</Text>
          yoki <Text strong>temir ustunga</Text> (yerga uylangan qismga) tegib
          ketsa — tamom! Mana shunda kuchlanishlar farqi paydo bo'ladi va tok
          qushning ichidan o'tib ketadi.
        </Paragraph>

        <Divider />

        <Title level={5}>🎈 Yana bir kichik mantiqiy savol: "Uchar shar"</Title>

        <Paragraph>
          Siz shishirilgan havo sharini jun matoga ishqalab, devorga
          tekkizsangiz, u yopishib qoladi.
        </Paragraph>

        <Paragraph>
          <Text strong>Savol:</Text> Devor magnit emas, shar ham magnit emas.
          Nima uchun u pastga tushib ketmaydi?
        </Paragraph>

        <Paragraph>
          <Text strong>Mantiqiy javob:</Text> Ishqalanish natijasida shar
          "elektrlanib" qoladi (elektronlarni o'ziga oladi). Sharni devorga
          yaqinlashtirganingizda, shardagi manfiy zaryadlar devordagi
          elektronlarni "itiradi" va devorning sirtida musbat zaryadli qatlam
          hosil bo'ladi.{" "}
          <Text strong>Musbat va manfiy esa bir-birini tortadi.</Text> Shar va
          devor o'rtasidagi bu elektr kuchi sharning og'irlik kuchidan ustun
          keladi va uni devorda ushlab turadi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default MatterModal;
