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
        <Title level={5}>
          1. "Atomning bo‘shlig‘i" (Rezerford tajribasi mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Tasavvur qiling, sizda juda yupqa oltin
          zarvara (folga) bor. Siz unga kichik "o‘qlar" (alfa-zarrachalar) bilan
          o‘t ochyapsiz. Agar atom ichi to‘la bo‘lsa, o‘qlar qaytib sakrashi
          kerak. Lekin tajribada 99% o‘qlar zarvaradan xuddi hech narsa yo‘qdek
          o‘tib ketgan. Nima uchun?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Bu tajriba atomning tuzilishini tushuntiradi. Atomning deyarli
              barcha massasi uning markazidagi juda kichik{" "}
              <Text strong>yadroda</Text> to‘plangan.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Yadro va elektronlar orasidagi masofa atomning o‘ziga nisbatan
              juda ulkan.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Atom — bu asosan{" "}
              <Text strong>bo‘shliqdan</Text> iborat. Agar atomni futbol
              stadioni deb tasavvur qilsak, uning yadrosi stadion markazidagi
              kichik bir no'xatdek gap, qolgan hamma joy bo'shliq. Shuning uchun
              "o'qlar" qarshiliksiz o'tib ketadi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          2. "Yadro nima uchun sochilib ketmaydi?" (Kuchli o‘zaro ta’sir
          mantig'i)
        </Title>

        <Paragraph>
          <Text strong>Vazifa:</Text> Yadroning ichida musbat zaryadlangan
          protonlar bor. Elektr qonuniga ko‘ra, bir xil zaryadlar (plyus va
          plyus) bir-birini qattiq itarishi kerak. Unda nima uchun atom yadrosi
          portlab, bo‘linib ketmaydi? Uni nima ushlab turibdi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Tabiatda elektr kuchidan ham kuchliroq bo‘lgan{" "}
              <Text strong>"Kuchli o‘zaro ta’sir"</Text> mavjud.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bu kuch xuddi juda kuchli "yelim"ga o‘xshaydi. U faqat yadro
              ichidagi masofada (juda yaqin turganda) ishlaydi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Protonlar bir-birini elektr kuchi
              bilan itarsa-da, "yadro yelimi" (kuchli ta'sir) ularni bir-biriga
              mahkam yopishtirib turadi. Agar bu "yelim" bo'lmaganda, olamdagi
              barcha modd
            </Paragraph>
          </li>
        </ul>

        <Divider />
        <Title level={5}>Mantiqiy xulosa:</Title>
        <Paragraph>Atom fizikasini tushunish uchun:</Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Masshtabni tasavvur qiling:</Text> Atom — deyarli
              bo'shliq.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Kuchlarni solishtiring:</Text> Elektr kuchi itarsa,
              yadro kuchi tortadi.
            </Paragraph>
          </li>
        </ol>
      </div>
    </Modal>
  );
}

export default MaterModal;
