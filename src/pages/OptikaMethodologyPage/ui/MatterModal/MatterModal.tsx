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
        <Title level={5}>Masala: Ko‘zgudagi "Chap va O‘ng" jumbog‘i</Title>

        <Paragraph>
          <Text strong>Vaziyat:</Text> Siz ko‘zgu (oyna) qarshisida turibsiz.
          Agar siz o‘ng qo‘lingizni ko‘tarsangiz, ko‘zgudagi aksingiz{" "}
          <Text strong>chap</Text>
          qo‘lini ko‘taradi. Ya’ni, ko‘zgu chap bilan o‘ngning o‘rnini
          almashtirib ko‘rsatadi.
        </Paragraph>
        <Paragraph>
          <Text strong>Savol:</Text> Nima uchun ko‘zgu{" "}
          <Text strong>chap va o‘ngni</Text>
          almashtiradi-yu, lekin <Text strong>tepa va pastni</Text>{" "}
          almashtirmaydi? Nega aksingiz oyoqlari tepada, boshi pastda bo‘lib
          qolmaydi?
        </Paragraph>

        <Divider />

        <Title level={5}>🧐 Kutilmagan mantiqiy javob:</Title>
        <Paragraph>
          Aslida, ko‘zgu o‘ng bilan chapni ham, tepa bilan pastni ham
          <Text strong>almashtirmaydi.</Text> U faqat bitta narsani —{" "}
          <Text strong>old va orqa (chuqurlik)</Text> yo‘nalishini almashtiradi.
        </Paragraph>

        <Title level={5}>💡 Tushuntirish:</Title>
        <Paragraph>Tasavvur qiling, siz ko‘zguga qarab turibsiz.</Paragraph>

        <ol>
          <li>
            <Paragraph>
              Sizning boshingiz tepada — aksingizning boshi ham tepada.
              (Alishmadi)
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Sizing chap qo‘lingiz shimolda bo‘lsa — aksingizning o‘sha qo‘li
              ham shimolda. (Alishmadi)
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Lekin sizning yuzingiz <Text strong>ko‘zguga qarab</Text> turibdi,
              aksingizning yuzi esa <Text strong>ko‘zgudan sizga qarab</Text>{" "}
              turibdi.
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          Ko‘zgu xuddi qo‘lqopni teskarisiga ag‘darib qo‘ygandek ishlaydi. U
          o‘ng-chapni emas, <Text strong>Z-o‘qi</Text> bo‘yicha (sizga qarab
          turgan o‘qni) teskari qiladi. Biz esa buni miyamizda "chap-o‘ng
          almashdi" deb talqin qilamiz, chunki biz o‘z aksimizni ko‘zgu ichida
          180 gradusga burilib olgan odam deb tasavvur qilishga o‘rganganmiz.
        </Paragraph>

        <Divider />

        <Title level={5}>🕯️ Yana bir masalacha: "Suv ostidagi sham"</Title>
        <Paragraph>
          <Text strong>Savol:</Text> Sizda bir stakan suv va yonib turgan sham
          bor. Qanday qilib shunday optik illyuziya qilish mumkinki, sham xuddi
          <Text strong>suvning ichida yonayotgandek</Text> ko‘rinsin?
        </Paragraph>
        <Paragraph>
          <Text strong>Yechim (Fizik mantiq):</Text> Buning uchun sizga bir
          varaq oddiy shaffof oyna kerak bo‘ladi.
        </Paragraph>

        <ol>
          <li>
            <Paragraph>Oynani vertikal qo‘ying.</Paragraph>
          </li>
          <li>
            <Paragraph>Oynaning oldiga yonib turgan shamni qo‘ying.</Paragraph>
          </li>
          <li>
            <Paragraph>
              Oynaning orqasiga (shamdan qancha masofada bo‘lsa, xuddi shuncha
              masofaga) bir stakan suvni qo‘ying.
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          <Text strong>Natija:</Text> Siz oynaga qaraganingizda, shamning aksi
          stakan ichidagi suv bilan ustma-ust tushadi. Bu{" "}
          <Text strong>Yassi ko‘zguda tasvir hosil bo‘lishi</Text> qonuniga
          (tasvir masofasi jism masofasiga teng) asoslangan eng sodda va
          samarali tajribadir.
        </Paragraph>

        <Divider />
        <Title level={5}>🌟 Bu nima beradi?</Title>
        <Paragraph>
          Bu masalalar o‘quvchiga optika shunchaki nurlar chizish emas, balki
          bizning <Text strong>ko‘rish va idrok qilish</Text> tizimimiz qanday
          ishlashini tushunish ekanligini o‘rgatadi.
        </Paragraph>
      </div>
    </Modal>
  );
}

export default MatterModal;
