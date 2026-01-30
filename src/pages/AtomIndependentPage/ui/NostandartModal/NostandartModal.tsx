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
    title: "Savol matni",
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
    title: "Izoh (Qisqacha)",
    dataIndex: "desc",
    key: "desc",
    width: 300,
  },
];

const data: DataType[] = [
  {
    key: 1,
    question: `Atom yadrosi faqat protonlardan tashkil topganmi?`,
    result: "Yo‘q",
    desc: "Yadro proton va neytronlardan (nuklonlardan) tashkil topadi.",
  },
  {
    key: 2,
    question:
      "Elektron bir energetik sathdan boshqasiga o‘tganda foton nurlatishi yoki yutishi mumkinmi?",
    result: "Ha",
    desc: "Yuqori sathdan pastga tushganda nurlatadi, pastdan yuqoriga o‘tganda yutadi.",
  },
  {
    key: 3,
    question:
      "Radioaktiv yemirilish jarayoniga tashqi omillar (bosim, harorat) ta’sir qiladimi?",
    result: "Yo'q",
    desc: "Radioaktiv yemirilish — bu yadroning ichki xususiyati, tashqi sharoitga bog‘liq emas.",
  },
  {
    key: 4,
    question: "Neytronning elektr zaryadi nolga tengmi?",
    result: "Ha",
    desc: "Neytron neytral zarra bo‘lib, uning zaryadi $q = 0$.",
  },
  {
    key: 5,
    question:
      "Yadro sintezi reaksiyasida (masalan, Quyoshda) energiya yutiladimi?",
    result: "Yo‘q",
    desc: "Yadro sintezi (yengil yadrolarning qo‘shilishi) natijasida juda katta energiya ajraladi.",
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
