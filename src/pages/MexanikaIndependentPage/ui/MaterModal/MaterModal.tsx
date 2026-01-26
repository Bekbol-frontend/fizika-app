import { Divider, Modal, Typography } from "antd";

const { Title, Paragraph } = Typography;

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
      <div>
        <Title level={5}>
          1. "Zanjirning sirpanishi" (Energiya va dinamika)
        </Title>
        <Paragraph>
          Uzunligi $L$ va massasi $M$ bo'lgan bir jinsli zanjir silliq stol
          ustida yotibdi. Zanjirning kichik bir qismi stoldan osilib turibdi.
          Zanjir o'z og'irligi ta'sirida stoldan butunlay sirpanib tushib
          ketishi uchun ketadigan vaqtni yoki u stoldan ajralgan paytdagi
          tezligini aniqlang.
          <Paragraph italic>
            (Bu masalaning qiyinligi shundaki, harakat davomida tezlanish
            o'zgaruvchan bo'ladi, chunki pastga tortayotgan massa miqdori doimiy
            ortib boradi).
          </Paragraph>
        </Paragraph>

        <Divider />

        <Title level={5}>
          2. "Egri chiziqli trubadagi harakat" (Bog'langan harakatlar)
        </Title>
        <Paragraph>
          Yarim doira shaklidagi silliq truba ichida ikkita kichik sharcha
          massasiz ip bilan bog'langan holda turibdi. Sharchalar muvozanat
          holatida bo'lishi uchun ular markazga nisbatan qanday burchak ostida
          joylashishi kerak? Agar sharchalardan biri pastga qarab biroz surilsa,
          tizimning tebranish davri qanday bo'ladi?
        </Paragraph>
        <Paragraph italic>
          (Bu masala kuchlar proyeksiyasini murakkab geometrik nuqtai nazardan
          tahlil qilishni talab qiladi).
        </Paragraph>

        <Divider />
        <Title level={5}>3. "Qayiq va suv" (Impulsning saqlanish qonuni)</Title>
        <Paragraph>
          Tinch turgan suv betida massasi $M$ va uzunligi $L$ bo'lgan qayiq
          turibdi. Qayiqning bir chetida massasi $m$ bo'lgan odam bor. Odam
          qayiqning bir chetidan ikkinchi chetiga qarab yura boshlasa, qayiq
          suvga nisbatan qanchaga siljiydi? (Suvning qarshilik kuchi hisobga
          olinmasin).
        </Paragraph>
        <Paragraph italic>
          (Bu masala tashqi kuchlar bo'lmaganda massa markazining
          qo'zg'almasligi tushunchasiga asoslangan bo'lib, o'quvchidan
          koordinata sistemasini to'g'ri tanlashni talab etadi).
        </Paragraph>
      </div>
    </Modal>
  );
}

export default MaterModal;
