import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useStyleTable } from "@/shared/lib/hooks/useStylesTable";
import { Modal, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: number;
  question: string;
  result: string;
  desc: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Savol",
    dataIndex: "question",
    key: "question",
    width: 300,
  },
  {
    title: "Javob",
    dataIndex: "result",
    key: "result",
  },
  {
    title: "Izoh",
    dataIndex: "desc",
    key: "desc",
    width: 300,
  },
];

const data: DataType[] = [
  {
    key: 1,
    question:
      "Tok o‘tayotgan simning ichida elektronlar o‘qdek tez (masalan, yorug‘lik tezligida) harakat qiladimi?",
    result: "Yo'q",
    desc: "Elektronlarning tartibli harakat tezligi juda sekin (sekundiga bir necha millimetr). Faqat elektr maydoni yorug‘lik tezligida tarqaladi.",
  },
  {
    key: 2,
    question: `Doimiy magnitni ikkiga bo‘lsak, faqat "shimol" va faqat "janub" qutbli alohida magnitlar hosil bo‘ladimi?`,
    result: "Yo'q",
    desc: "Magnit monopiuli mavjud emas. Har bir bo‘lakda yana yangi Shimol (N) va Janub (S) qutblari paydo bo‘laveradi.",
  },
  {
    key: 3,
    question:
      "Qushlar yuqori kuchlanishli simlarda o‘tirganda ularni tok uradimi?",
    result: "Yo‘q",
    desc: "Qushning ikkala oyog‘i bitta simda bo‘lgani uchun ular orasida potensiallar ayirmasi (kuchlanish) nolga yaqin bo‘ladi.",
  },
  {
    key: 4,
    question:
      "Magnit maydoni tinch turgan (harakatlanmayotgan) elektr zaryadiga kuch bilan ta’sir qiladimi?",
    result: "Yo'q",
    desc: `Lorens kuchi faqat harakatlanayotgan zaryadlarga ta’sir qiladi ($F = qvB\\sin\\alpha$). Agar tezlik $v = 0$ bo‘lsa, kuch ham nolga teng.`,
  },
  {
    key: 5,
    question:
      "Yashin qaytargich yashinni o‘ziga tortib, binoni xavfga qo‘yadimi?",
    result: "Yo‘q",
    desc: `U yashinni "tortmaydi", balki yer va bulut orasidagi kuchlanishni asta-sekin pasaytiradi yoki zarbani xavfsiz tarzda yerga o‘tkazib yuboradi.`,
  },
];

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function NostandartModal({ isModalOpen, handleCancel }: IProps) {
  const { styles } = useStyleTable();
  const { sm } = useResponsive();

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
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        className={styles.customTable}
        scroll={{ x: sm ? "100%" : "max-content" }}
      />
    </Modal>
  );
}

export default NostandartModal;
