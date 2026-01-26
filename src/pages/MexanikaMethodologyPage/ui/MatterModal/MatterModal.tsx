import { Divider, Modal, Typography } from "antd";
import styles from "./MatterModal.module.scss";

import Img1 from "@/shared/assets/mexanika/matter/img1.png";
import Img2 from "@/shared/assets/mexanika/matter/img2.png";

const { Title, Paragraph, Text } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function MatterModal({ isModalOpen, handleCancel }: IProps) {
  return (
    <Modal
      title="Masala echish"
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
          Nostandart masala sifatida "Tezlanuvchan vagon ichidagi mayatnik"
          masalasini tanlaymiz.
        </Title>

        <Divider />

        <Title level={5}>1-qadam: Uyga vazifa (Darsdan oldin)</Title>

        <div className={styles.imgBlock}>
          <img src={Img1} alt="mexanika" className={styles.content} />
        </div>

        <Paragraph>
          O‘quvchilarga darsga kelishdan oldin quyidagi qisqa vazifa beriladi:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Video/Ma'lumot:</Text> Nyutonning 2-qonuni va
              inersiya kuchlari haqida 5 daqiqalik video ko'rish.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Eksperiment:</Text>
              "Tasavvur qiling, siz avtobusdasiz. Avtobus keskin joyidan
              qo‘zg‘alsa yoki tormoz bersa, tanangiz qaysi tomonga
              harakatlanadi? Nima uchun?" degan savol ustida o‘ylab kelish.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>2-qadam: Darsda (Nostandart masala tahlili)</Title>
        <Paragraph>
          Dars boshida o'quvchilarga quyidagi{" "}
          <Text strong>nostandart masala</Text>
          tashlanadi:
        </Paragraph>
        <Paragraph>
          <Text strong>Masala:</Text> Gorizontal tekislikda a tezlanish bilan
          harakatlanayotgan vagon shiftiga ipga osilgan m massali shar osilgan.
          Vagon harakatlanayotgan vaqtda ip vertikalga nisbatan qandaydir α
          burchakka og‘adi. Agar vagon ichida bo'lsangiz, bu vaziyatni qanday
          izohlaysiz? Ipning taranglik kuchi nimaga teng?
        </Paragraph>

        <Divider />

        <Title level={5}>
          3-qadam: Guruhlarda muhokama (Flipped Classroom markazi)
        </Title>

        <Paragraph>
          O'qituvchi tushuntirmaydi, aksincha o'quvchilar uyda o'rgangan
          bilimlarini qo'llashadi. Sinf ikki xil "qarash" guruhiga bo'linadi:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>
                Inersial tizimdagilar (Yo‘l chetidagi kuzatuvchi):
              </Text>
              Ular sharning vagon bilan birga a tezlanishda borayotganini
              ko‘rishadi.
            </Paragraph>
            <Paragraph style={{ paddingLeft: 24 }}>
              <Text strong>Tenglama:</Text> ⅀F = ma
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>
                Noinersial tizimdagilar (Vagon ichidagi kuzatuvchi):
              </Text>
              Ular uchun shar qimirlamay turibdi (tinch holatda), lekin ip
              og‘gan. Demak, qandaydir "sirli" kuch uni orqaga tortmoqda.
            </Paragraph>
            <Paragraph style={{ paddingLeft: 24 }}>
              <Text strong>Tenglama:</Text> ⅀F = 0 (Inersiya kuchi hisobiga)
            </Paragraph>
          </li>
        </ol>

        <Divider />

        <Title level={5}>4-qadam: Nostandart yechim va xulosalar</Title>
        <Paragraph>
          O'quvchilar doskada quyidagi matematik bog'liqlikni keltirib
          chiqarishadi:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              <Text strong>Burchakni topish:</Text> <br />
              <Text>Gorizontal yo‘nalishda: Tsinα = ma</Text> <br />
              <Text>Vertikal yo‘nalishda: Tcosα = mg</Text>
              <br />
              <Text>Bundan:</Text>
              <br />
              <Text>tanα = a ⁄g</Text>
            </Paragraph>
          </li>
          <li>
            <Paragraph strong>
              Ipning taranglik kuchi (Nostandart yondashuv):
            </Paragraph>
            <Text>
              Pifagor teoremasiga ko'ra, "effektiv og'irlik" tushunchasini
              kiritamiz:
            </Text>{" "}
            <br />
            <Text>T = m{`{g2 + a2}`}</Text>
          </li>
        </ol>

        <Divider />
        <Title level={5}>Nega bu qiziqarli?</Title>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Muammo:</Text> O'quvchi odatda sharni "orqaga
              ketyapti" deb o'ylaydi, aslida esa u vagonning tezlanishiga "yetib
              ololmayotgan" bo'ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Flipped classroom metodida o'qituvchi
              faqat yo'nalish beradi. O'quvchi esa "inersiya kuchi" bu aslida
              bizning kuzatish nuqtamizga bog'liq bo'lgan "uydirma" (psevdo)
              kuch ekanligini o'zi kashf qiladi.
            </Paragraph>
          </li>
        </ul>

        <div className={styles.imgBlock}>
          <img src={Img2} alt="mexanika" className={styles.content} />
        </div>
      </div>
    </Modal>
  );
}

export default MatterModal;
