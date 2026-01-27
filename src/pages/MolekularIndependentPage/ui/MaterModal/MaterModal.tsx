import { Divider, Modal, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function MaterModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Nostandart masalalar"
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
      <Title level={5}>1. "Porshen ostidagi nam havo"</Title>
      <Paragraph>
        Silindr ichida porshen ostida ma'lum miqdordagi to'yingan suv bug'i va
        havo aralashmasi bor. Porshen o'zgarmas temperaturada juda sekin pastga
        suriladi (hajm kamaytiriladi). Tizimdagi bosimning hajmga bog'liqlik
        grafigi ($P-V$) qanday ko'rinishda bo'ladi?
      </Paragraph>
      <Paragraph>
        <Text strong>Nostandart jihati:</Text> Bu yerda oddiy Boyl-Mariott
        qonuni ishlamaydi, chunki hajm kamayishi bilan suv bug'ining bir qismi
        kondensatsiyalanib suyuqlikka aylanadi va bug' bosimi{" "}
        {`($P_{to'yingan}$)`} o'zgarmasdan qoladi.
      </Paragraph>
      <Divider />
      <Title level={5}>2. "Teshik idishdagi gaz"</Title>
      <Paragraph>
        Issiqlikdan izolatsiyalangan (adiabatik) idishda ideal gaz bor. Idish
        devorida shunday kichik teshik ochildiki, u orqali faqat eng tez
        harakatlanayotgan molekulalar uchib chiqa oladi. Idishda qolgan gazning
        temperaturasi va bosimi qanday o'zgaradi?
      </Paragraph>
      <Paragraph>
        <Text strong>Nostandart jihati:</Text> Odatda gaz chiqib ketsa bosim
        tushadi deb o'ylaymiz, lekin bu yerda "effuziya" hodisasi va
        molekulalarning tezlik bo'yicha taqsimoti (Maksvell taqsimoti) hisobga
        olinishi kerak. Faqat "issiq" molekulalar chiqib ketsa, qolgan gazning
        o'rtacha kinetik energiyasi bilan nima sodir bo'ladi?
      </Paragraph>

      <Divider />

      <Title level={5}>3. "Gorizontal trubadagi simob ustuni"</Title>
      <Paragraph>
        Ikki uchi yopiq, gorizontal holda turgan shisha trubaning o'rtasida
        simob ustuni bor. Trubaning ikki tomonida bir xil massadagi ideal gaz
        bor. Agar truba vertikal holatga keltirilsa, simob ustuni qanchaga
        siljiydi?
      </Paragraph>
      <Paragraph>
        <Text strong>Nostandart jihati:</Text> Bu masalada ham mexanika
        (muvozanat sharti), ham termodinamika (izotermik jarayon) qonunlarini
        birlashtirish kerak. Simobning og'irligi pastdagi gazni siqadi,
        yuqoridagini esa kengaytiradi.
      </Paragraph>
    </Modal>
  );
}

export default MaterModal;
