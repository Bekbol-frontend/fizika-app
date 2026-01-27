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
      <div className={styles.content}>
        <Title level={5}>
          1. "Ikkita sovun pufagi" (Sirt tarangligi mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Ingichka naychaning ikki uchida ikkita har
          xil o‘lchamdagi sovun pufagi bor (biri katta, biri kichik). Naycha
          o‘rtasidagi kran ochilsa, nima sodir bo‘ladi? Katta pufak kichrayib,
          kichigi kattalashadimi yoki aksinchami?
        </Paragraph>

        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Ko‘pchilik "bosim tenglashadi va ikkalasi bir xil bo‘lib qoladi"
              deb o‘ylaydi. Lekin bu xato.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Sirt tarangligi qonuniga ko‘ra, pufak qanchalik{" "}
              <Text strong>kichik</Text> bo‘lsa, uning ichidagi havo bosimi
              shunchalik <Text strong>yuqori</Text> bo‘ladi (chunki sirt uni
              qattiqroq siqadi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Havo bosimi yuqori bo‘lgan kichik
              pufakdan bosimi past bo‘lgan katta pufakka qarab oqadi. Natijada{" "}
              <Text strong>
                kichik pufak yo‘qolib ketadi, katta pufak esa yanada
                kattalashadi.
              </Text>
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          2. "Qaynovchi suv va muz" (Faza o'tishi mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Shisha idishda suv qaynamoqda. Idishni
          olovdan olib, qopqog'ini mahkam yopasiz (qaynash to'xtaydi). Agar
          idishning ustidan muzli suv quyilsa, idish ichidagi suv yana qaynab
          chiqadimi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Suvning qaynash harorati tashqi bosimga bog‘liq. Bosim pasaysa,
              qaynash harorati ham tushadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Idish ustidan sovuq suv quyilganda, idish ichidagi suv bug‘lari
              kondensatsiyalanadi (suvga aylanadi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bu idish ichidagi havo bosimining keskin pasayishiga olib keladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Past bosimda suvning qaynash nuqtasi
              masalan, 100°C dan 80°C ga tushib qoladi. Idishdagi suv hali issiq
              bo‘lgani uchun u<Text strong>yana qaynab chiqadi.</Text>
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          3. "Shakar va suv hajmi" (Molekulalararo bo'shliq)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Bir stakan to‘la suvga bir qoshiq shakar
          solib, ehtiyotkorlik bilan aralashtirilsa (shakar to‘liq erisa), suv
          sathi ko‘tariladimi yoki deyarli o‘zgarmaydimi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Modda molekulalari orasida bo‘shliqlar mavjud.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Shakar eriganda, uning molekulalari suv molekulalari orasidagi
              bo‘shliqlarga joylashadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bu xuddi bir chelak toshning orasiga qum quyishga o‘xshaydi — qum
              toshlar orasini to‘ldiradi, lekin umumiy hajmni sezilarli
              oshirmaydi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Suv sathi deyarli o‘zgarmaydi (yoki
              juda kichik miqdorda o‘zgaradi), chunki bu yerda hajmlarning oddiy
              qo‘shilishi emas, balki diffuziya va molekulyar joylashuv sodir
              bo‘lmoqda.
            </Paragraph>
          </li>
        </ul>

        <Divider />
        <Title level={5}>Molekulyar fizikada mantiqiy tahlil usuli:</Title>
        <Paragraph>
          Bunday masalalarni yechishda doim o‘zingizga quyidagi savolni bering:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Molekulalar qanday harakat qilyapti?</Text>{" "}
              (Tezlashdimi yoki sekinlashdi?)
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Ular orasidagi masofa nima bo‘ldi?</Text> (Siqildimi
              yoki kengaydi?)
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Energiya qayerga ketyapti?</Text> (Isitishgami yoki
              bog‘lanishni uzishgami?)
            </Paragraph>
          </li>
        </ol>
      </div>
    </Modal>
  );
}

export default ExpirementalModal;
