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
        <Title level={5}>1. "Suv ostidagi ko'zgu" (To'la ichki qaytish)</Title>
        <Paragraph>
          Akvarium tubida kichik chiroq yonib turibdi. Suv sirtida esa suzib
          yurgan noovshaffof doira shaklidagi plastinka bor.
        </Paragraph>
        <ul>
          <li>
            <Paragraph>
              <Text strong>Masala:</Text> Agar plastinkaning radiusi ma'lum bir
              qiymatdan katta bo'lsa, akvarium tepasidan qaraganda chiroqni
              mutlaqo ko'rib bo'lmaydi. Nima uchun?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> O'quvchi chiroq nuri
              plastinka chetidan baribir o'tadi deb o'ylashi mumkin. Lekin to'la
              ichki qaytish hodisasi tufayli, ma'lum bir burchakdan kattaroq
              burchak ostida chiqqan nurlar suv sirtidan qaytib, pastga ketadi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>2. "Singan qalam" (Yorug'likning sinishi)</Title>
        <Paragraph>
          Hamma suvga solingan qalamning "siniq" bo'lib ko'rinishini biladi.
          Lekin mana bu savol o'ylantirib qo'yadi:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Masala:</Text> Agar biz stakandagi suvning ustiga
              yog' (masalan, o'simlik yog'i) quysak va qalamni botirsak, qalam
              suv va yog' chegarasida qaysi tomonga va qanchalik siljiydi? Qalam
              bitta nuqtadan emas, ikki joydan sinishi mumkinmi?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> Bu masala o'quvchidan ikki
              xil muhitning sinish ko'rsatkichlarini (n1 va n2) o'zaro
              solishtirishni va nurning yo'nalishini har bir chegara uchun
              alohida chizishni talab qiladi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          3. "Ko'zgu va yugurayotgan bola" (Nisbiy tezlik)
        </Title>
        <Paragraph>
          Devorda katta tekis ko'zgu osig'liq turibdi. Bola ko'zguga qarab v = 2
          m/s tezlik bilan yugurmoqda. Shu paytda ko'zguning o'zi ham boladan u
          = 1 m/s tezlik bilan uzoqlasha boshladi.
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              <Text strong>Masala:</Text> Bola o'zining tasviriga qanday tezlik
              bilan yaqinlashmoqda?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Nega nostandart?</Text> Odatda ko'zgu qo'zg'almas
              bo'ladi va javob 2v bo'ladi. Ko'zgu ham harakatlanganda, o'quvchi
              "tasvirning ko'zguga nisbatan tezligi" va "tasvirning yerga
              nisbatan tezligi" tushunchalarini chalkashtirib yuborishi mumkin.
            </Paragraph>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default MaterModal;
