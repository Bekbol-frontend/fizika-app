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
        <Title level={5}>"Suvdagi qalam" (Sinish mantig'i)</Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Bir stakan suvga qalamni qiya qilib
          soling. Nima uchun qalam suvga kirgan joyidan singandek yoki
          siljigandek ko‘rinadi? Agar stakanga suv o‘rniga o‘simlik yog‘i
          quysangiz, bu "sinish" kattaroq bo‘ladimi yoki kichikroq?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>
        <ul>
          <li>
            <Paragraph>
              Yorug‘lik nuri bir muhitdan (havo) ikkinchisiga (suv) o‘tganda o‘z
              tezligini o‘zgartiradi va biroz og‘adi. Bizning ko‘zimiz esa nurni
              doim to‘g‘ri chiziq bo‘ylab kelayapti deb qabul qiladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Natijada, qalamning suv ostidagi qismi asl joyidan biroz
              yuqoriroqda ko‘rinadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> O‘simlik yog‘ining optik zichligi
              suvnikidan ko‘proq. Shuning uchun yog‘da yorug‘lik nuri ko‘proq
              og‘adi va qalam yanada kuchliroq "singandek" ko‘rinadi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>2. "Ko'zgudagi masofa" (Qaytish mantig'i)</Title>

        <Paragraph>
          <Text strong>Vazifa:</Text> Siz katta ko‘zgu (oyna) oldida undan 1
          metr masofada turibsiz. Siz va sizning ko‘zgudagi aksingiz orasidagi
          masofa qancha? Agar siz ko‘zguga qarab 50 sm yursangiz, aksingiz sizga
          qarab qancha yuradi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>
        <ul>
          <li>
            <Paragraph>
              Tekis ko‘zguda tasvir buyum ko‘zgudan qancha uzoqda bo‘lsa, xuddi
              shuncha uzoqlikda (ko‘zgu ichida) hosil bo‘ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Siz 1 metrda bo‘lsangiz, aksingiz ham ko‘zgu ichida 1 metrda
              bo‘ladi. Jami masofa: 1 + 1 = 2 metr.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Agar siz ko‘zguga 50 sm
              yaqinlashsangiz, aksingiz ham ko‘zguga 50 sm yaqinlashadi. Demak,
              siz va aksingiz bir-biringizga jami 1 metr yaqinlashgan bo‘lasiz.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          3. "Oppoq qor va shaffof muz" (Tarqalish mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Muz ham, qor ham suvdan iborat. Nima uchun
          muz shaffof (orqasini ko‘rsa bo‘ladi), lekin qor oppoq va ko‘rinmaydi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>
        <ul>
          <li>
            <Paragraph>
              Muz — bu yagona, yaxlit kristall. Yorug‘lik nuri uning ichidan
              deyarli to‘g‘ri o‘tib ketadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Qor esa juda ko‘p mayda muz kristallari va ular orasidagi havo
              bo‘shliqlaridan iborat.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Yorug‘lik nuri har bir kichik qor parchasiga urilib, har tomonga
              tartibsiz qaytadi (tarqaladi). Barcha ranglar aralashib qaytgani
              uchun biz uni oppoq rangda ko‘ramiz.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Gap yorug‘likning nurning bir tekis
              o‘tishida (muzda) va har tomonga sochilishida (qorda).
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>Optikani mantiqiy tushunish uchun maslahat:</Title>
        <Paragraph>
          Har doim tasavvur qiling:{" "}
          <Text strong>
            "Yorug‘lik nuri hozir qayerda tezlashdi yoki qayerda sekinlashdi?"
          </Text>
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Agar nur sekinlashsa — u "normallga" (perpendikulyarga)
              yaqinlashadi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>Agar nur tezlashsa — u uzoqlashadi.</Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default ExpirementalModal;
