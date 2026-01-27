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
        <Title level={5}>🌬️ Masala: Ochiq deraza va xonadagi energiya</Title>
        <Paragraph strong>Vaziyat:</Paragraph>
        <Paragraph>
          Tasavvur qiling, qish kuni. Siz uyingizdagi isitgichni (pechkani)
          yoqib qo'ygansiz va xona havosi tashqaridagidan ancha issiq. To'satdan
          siz derazani ochdingiz va ma'lum vaqt o'tgach, xona temperaturasi
          pasaydi, lekin xonadagi bosim o'zgarmadi (chunki deraza ochiq va bosim
          tashqi muhit bilan tenglashgan).
        </Paragraph>
        <Paragraph strong>Savol:</Paragraph>

        <Paragraph>
          Xonadagi havoning umumiy ichki energiyasi (molekulalarning jami
          kinetik energiyasi) deraza ochilgandan keyin qanday o'zgardi?
        </Paragraph>

        <ul>
          <li>
            <Paragraph>{`A)`} Ko'paydi</Paragraph>
          </li>
          <li>
            <Paragraph>{`B)`} Kamaydi</Paragraph>
          </li>
          <li>
            <Paragraph>{`C)`} O'zgarmadi</Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>🧐 Kutilmagan javob:</Title>
        <Paragraph>
          Javob: <Text strong>O'zgarmadi.</Text>
        </Paragraph>

        <Title level={5}>
          💡 Mantiqiy tushuntirish (Hech qanday murakkab formulasiz):
        </Title>

        <Paragraph>
          Bir qarashda, xona sovidi-ku, demak energiya kamaygan degan fikr
          keladi. Lekin keling, fizik mantiqni ishga solamiz:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Hajm o'zgarmas:</Text> Xonaning o'lchami (devorlari)
              o'zgarmadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Bosim o'zgarmas:</Text> Deraza ochiq bo'lgani uchun
              xona ichidagi bosim tashqi atmosferaga teng bo'lib qolaveradi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Energiya nima o'zi?</Text> Ideal gaz uchun ichki
              energiya faqat bosim (P) va hajm (V) ko'paytmasiga bog'liq (U ⁓
              PV).
            </Paragraph>
          </li>
        </ol>

        <Paragraph strong>Nima sodir bo'ldi?</Paragraph>
        <Paragraph>
          Xona soviganida, havo molekulalari sekinroq harakat qila boshlaydi
          (kinetik energiya kamayadi). Lekin havo soviganida u{" "}
          <Text strong>zichlashadi.</Text>
          Tashqaridan xonaga sovuq va zich havo kiradi. Natijada: har bir
          molekulaning energiyasi <Text strong>kamaydi,</Text> lekin xonadagi
          molekulalar soni
          <Text strong>ko'paydi.</Text> Bu ikki jarayon bir-birini shunday
          kompensatsiya qiladiki (muvozanatlashtiradi), xonadagi umumiy energiya
          o'zgarishsiz qoladi.
        </Paragraph>

        <Divider />

        <Title level={5}>🌟 Nega bu masala nostandart?</Title>
        <Paragraph>
          Chunki biz "sovuq = kam energiya" degan stereotip bilan o'ylaymiz. Bu
          yerda esa sistemaning <Text strong>ochiqligi</Text> (molekulalar soni
          o'zgarishi) vaziyatni butunlay o'zgartiradi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default MatterModal;
