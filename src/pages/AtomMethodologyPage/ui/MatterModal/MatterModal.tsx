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
        <Title level={5}>⚛️ Masala: Atomning "Bo‘shligi"</Title>

        <Paragraph>
          <Text strong>Vaziyat:</Text> Fiziklar atomning markazida{" "}
          <Text strong>yadro</Text>
          borligini, uning atrofida esa <Text strong>elektronlar</Text> aylanib
          yurishini aytishadi. Lekin qiziq jihati shundaki, atomning deyarli
          butun massasi yadroda to‘plangan bo‘lsa-da, yadro atomning umumiy
          hajmidan million marta kichik.
        </Paragraph>
        <Paragraph>
          <Text strong>Savol:</Text> Agar atomning ichi 99.99% bo‘shliq bo‘lsa,
          nima uchun biz devordan o‘tib keta olmaymiz yoki qo‘limiz bilan stolni
          ushlaganimizda qo‘limiz uning ichiga kirib ketmaydi? Axir "bo‘shliq"
          ichidan bemalol o‘tish kerak-ku?
        </Paragraph>

        <Title level={5}>🧐 Mantiqiy javob:</Title>
        <Paragraph>
          Bunga sabab — <Text strong>elektr itarish kuchi</Text>. Siz stolni
          ushlaganingizda, qo‘lingizdagi atomlarning tashqi qobig‘idagi
          elektronlar stol atomlarining elektronlari bilan to'qnashadi.
          Elektronlar bir xil (manfiy) zaryadga ega bo‘lgani uchun ular
          bir-birini juda kuchli darajada itaradi.
        </Paragraph>
        <Paragraph>
          Siz sezayotgan "qattiqlik" — bu aslida atomlarning tegishi emas, balki
          ularning orasidagi{" "}
          <Text strong>elektromagnit maydonning qarshiligi</Text>. Siz hech
          qachon stolga haqiqatda "tegmaysiz", shunchaki juda kichik masofada
          muallaq turasiz!
        </Paragraph>

        <Divider />
        <Title level={5}>☀️ Masala: Quyosh qanday qilib "yonyapti"?</Title>
        <Paragraph>
          <Text strong>Vaziyat:</Text> Hamma biladi, Quyoshda termoyadroviy
          reaksiya ketmoqda: vodorod atomlari birlashib geliy hosil qiladi va
          ulkan energiya ajraladi. Lekin mantiqan o‘ylasak, atom yadrolari
          (protonlar) musbat zaryadli. Ular bir-biriga yaqinlashganda bir-birini
          itarishi kerak.
        </Paragraph>
        <Paragraph>
          <Text strong>Savol:</Text> Qanday qilib bu musbat yadrolar bir-biriga
          "yopishib", yangi element hosil qila oladi? Ularni nima ushlab turadi?
        </Paragraph>
        <Title level={5}>💡 Mantiqiy tushuntirish:</Title>
        <Paragraph>
          Bu yerda tabiatning eng kuchli "yelimi" —{" "}
          <Text strong>Kuchli o‘zaro ta’sir</Text> (Strong Force) yordamga
          keladi.
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Itarish:</Text> Uzoq masofada protonlar bir-birini
              elektr kuchi bilan itaradi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Yaqinlashish:</Text> Quyosh markazidagi ulkan bosim
              va issiqlik tufayli protonlar bir-biriga juda yaqin kelishga
              majbur bo‘ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Yopishish:</Text> Agar ular orasidagi masofa juda
              qisqarsa (yadro o‘lchamigacha), elektr itarish kuchi o‘z mavqeini
              yo‘qotadi va "Kuchli o‘zaro ta’sir" ularni mahkam yopishtirib
              oladi.
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          Bu xuddi ikkita kuchli magnitning bir xil qutbini bir-biriga
          yaqinlashtirishga o‘xshaydi: boshida itaradi, lekin jismoniy kuch
          bilan taqab qo‘ysangiz, ular "yengiladi".
        </Paragraph>

        <Divider />
        <Title level={5}>🌟 O'quvchilar uchun qiziqarli taqqoslash:</Title>
        <Paragraph>
          Agar atomni ulkan <Text strong>futbol stadioni</Text> deb tasavvur
          qilsak:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Uning markazidagi <Text strong>yadro</Text> — stadion markaziga
              qo‘yilgan kichkinagina <Text strong>no'xat donasidek</Text> gap.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Elektronlar</Text> esa stadionning eng chetki
              o‘rindiqlari atrofida uchib yurgan <Text strong>chivinlar</Text>{" "}
              kabi bo‘ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Qolgan hamma joy — <Text strong>mutlaq bo‘shliq!</Text>
            </Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default MatterModal;
