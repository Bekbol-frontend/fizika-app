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
        <Title level={5}>
          "Alyuminiy quvur va magnit" (Lenz qonuni mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Sizda bitta alyuminiy quvur va bitta oddiy
          plastik quvur bor. Ikkalasining ichidan ham kuchli neodim magnitini
          tashlab yuborasiz. Magnit qaysi quvurdan tezroq tushib ketadi?
          (Alyuminiy magnitga yopishmasligini unutmang).
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Alyuminiy magnitga yopishmaydi, lekin u{" "}
              <Text strong>o'tkazgich.</Text>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Magnit alyuminiy quvur ichida harakatlanganda, quvurda "uyurma
              toklar" (Fuko toklari) hosil bo'ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Lenz qonuniga ko'ra, bu toklar shunday magnit maydon yaratadiki, u
              asosiy magnitning harakatiga{" "}
              <Text strong>qarshilik ko'rsatadi</Text> (uni tormozlaydi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Plastik quvurda hech qanday tok hosil
              bo'lmaydi va magnit erkin tushadi. Alyuminiy quvurda esa magnit
              xuddi "asal ichida suzayotgandek" juda sekin harakatlanadi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          2. "Elektr simidagi qushlar" (Potensiallar farqi)
        </Title>

        <Paragraph>
          <Text strong>Vazifa:</Text> Nima uchun qushlar yuqori kuchlanishli
          (minglab volt) yalang'och simlar ustida bemalol o'tiradi-yu, ularni
          tok urmaydi? Agar qush bir oyog'ini bitta simga, ikkinchi oyog'ini esa
          yonidagi boshqa simga qo'ysa nima bo'ladi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Tok urishi uchun organizm orqali elektr oqimi o'tishi kerak.
              Buning uchun esa ikki nuqta o'rtasida{" "}
              <Text strong>potensiallar farqi</Text>
              (kuchlanish) bo'lishi lozim.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Qush bitta simda ikkala oyog'i bilan turganda, uning oyoqlari
              orasidagi masofa juda kichik va u yerdagi kuchlanish deyarli nolga
              teng. Tok qushning qarshiligi yuqori tanasidan emas, balki
              qarshiligi past sim orqali o'tishni "afzal ko'radi".
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Agar qush ikkita har xil simga tegsa,
              u simlar orasidagi ulkan kuchlanish ostida qoladi va tok uning
              tanasidan o'tib, qushni nobud qiladi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>
          3. "Magnitni ikkiga bo'lish" (Magnit dipoli mantig'i)
        </Title>
        <Paragraph>
          <Text strong>Vazifa:</Text> Sizda Shimoliy (N) va Janubiy (S) qutblari
          bor oddiy magnit tayoqchasi bor. Agar siz uni qoq o'rtasidan
          sindirsangiz, sizda alohida "Shimoliy" va alohida "Janubiy" magnit
          bo'lagi hosil bo'ladimi?
        </Paragraph>
        <Paragraph strong>Mantiqiy yechim:</Paragraph>

        <ul>
          <li>
            <Paragraph>
              Magnitizm molekulyar darajadagi atomlarning tartibli joylashuvidan
              hosil bo'ladi.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Magnitni qanchalik kichik bo'laklarga bo'lmang, har bir bo'lak
              baribir o'zining "Shimoliy" va "Janubiy" qutbiga ega bo'laveradi.
              Tabiatda "magnit monoploli" (faqat bitta qutbli magnit) mavjud
              emas.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>Xulosa:</Text> Sizda ikkita kichikroq, lekin to'liq
              (N va S qutbli) magnit paydo bo'ladi.
            </Paragraph>
          </li>
        </ul>

        <Divider />

        <Title level={5}>Mantiqiy "oltin qoida":</Title>
        <Paragraph>
          Elektr va magnetizm masalalarini yechayotganda doim{" "}
          <Text strong>"Energiya va muvozanat"</Text> haqida o'ylang:
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              Tok qayerdan qayerga oqishni xohlaydi? (Balandlikdan pastlikka
              intilayotgan suv kabi).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Magnit maydon o'zgarishiga tabiat qanday qarshilik ko'rsatadi?
              (Lenz qonuni).
            </Paragraph>
          </li>
        </ol>
      </div>
    </Modal>
  );
}

export default ExpirementalModal;
