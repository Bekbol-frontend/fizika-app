import { Divider, Modal, Typography } from "antd";
import TeoraImg from "@/shared/assets/molekular/teora/Снимок экрана 2026-01-27 в 09.23.07.png";
import styles from "./TeoraModal.module.scss";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function TeoraModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Jihozlar"
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
        <Title level={5}>"Arximed kuchi va suzuvchi muz"</Title>
        <div className={styles.imgBlock}>
          <img src={TeoraImg} alt="teora" className={styles.content} />
        </div>
        <Divider />
        <Title level={5}>🧊 Masala: Muz erisa, suv sathi nima bo'ladi?</Title>

        <Paragraph>
          <Text strong>Shart:</Text> Shisha stakanda suv bor. Suv betida muz
          bo'lagi suzib yuribdi. Agar muz to'liq erib ketsa, stakandagi suv
          sathi:
        </Paragraph>

        <ol>
          <li>
            <Text>Ko'tariladimi?</Text>
          </li>
          <li>
            <Text>Pasayadimi?</Text>
          </li>
          <li>
            <Text>O'zgarmay qoladimi?</Text>
          </li>
        </ol>

        <Divider />

        <Title level={5}>🧐 Mantiqiy tahlil (Maydalab tushuntirish):</Title>
        <Paragraph>
          Bu masalani yechish uchun bizga ikkita asosiy tushuncha kerak:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Arximed qonuni:</Text> Jism suvda suzib yuribdimi,
              demak uning og'irligi u siqib chiqargan suvning og'irligiga teng.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Zichlik:</Text> Zichlik: Muzning zichligi ( 900
              kg/m3) suvnikidan (1000 kg/m3) kichik.
            </Paragraph>
          </li>
        </ul>

        <Title level={5}>1-qadam: Muz suzganda nima sodir bo'ladi?</Title>
        <Paragraph>
          Muz bo'lagi suvga tushganda, o'z og'irligi miqdoridagi suvni joyidan
          "surib" chiqaradi. Shuning uchun suv sathi biroz ko'tarilgan bo'ladi.
        </Paragraph>

        <Title level={5}>
          2-qadam: Muzning "ko'rinmas" va "ko'rinadigan" qismlari
        </Title>
        <Paragraph>
          Muzning taxminan 90% qismi suv ostida, 10% qismi esa suv ustida
          bo'ladi. Arximed qonuniga ko'ra, muz siqib chiqargan suvning hajmi
          aynan o'sha <Text strong>suv ostidagi qismga</Text> teng.
        </Paragraph>

        <Title level={5}>3-qadam: Muz eriganda nima bo'ladi?</Title>
        <Paragraph>
          Muz eriganda u suvga aylanadi. Muz suvga aylanganida uning{" "}
          <Text strong>massasi o'zgarmaydi,</Text> lekin zichligi oshgani uchun
          <Text strong>hajmi kichrayadi.</Text>
        </Paragraph>

        <Divider />

        <Paragraph>
          <Text>Eng muhim mantiqiy xulosa:</Text> Muz erib hosil bo'lgan suvning
          hajmi, muz suzib turganda suv ostida egallab turgan "bo'shliq" (hajm)
          bilan aynan bir xil bo'ladi.
        </Paragraph>

        <Title level={5}>✅ Yakuniy natija:</Title>
        <Paragraph>
          Muz eriganida hosil bo'lgan suv aynan o'zi siqib chiqargan
          "bo'shliqni" to'ldiradi. Shuning uchun
          <Text strong>suv sathi o'zgarmaydi.</Text>
        </Paragraph>

        <Divider />

        <Title level={5}>
          💡 Nostandart holat (Agar muz ichida narsa bo'lsa-chi?):
        </Title>
        <Paragraph>
          Agar siz o'quvchilarni yanada hayron qoldirmoqchi bo'lsangiz, mana bu
          qo'shimchani ayting:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Agar muz ichida havo pufakchasi bo'lsa — erigandan keyin ham sath{" "}
              <Text strong>o'zgarmaydi.</Text>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Agar muz ichida <Text strong>temir gayka</Text> bo'lsa — muz
              erigach, temir cho'kib ketadi va suv sathi{" "}
              <Text strong>pasayadi.</Text>
            </Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default TeoraModal;
