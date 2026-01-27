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
    question: "Ochiq turgan muzlatkich xonani sovuta oladimi?",
    result: "Yo'q",
    desc: "Muzlatkich motoridan chiqqan issiqlik, u chiqargan sovuqlikdan ko‘proq bo‘ladi.",
  },
  {
    key: 2,
    question:
      "Suv vakuumni ichida (koinotda) bir vaqtda ham qaynashi, ham muzlashi mumkinmi?",
    result: "Ha",
    desc: "Bosim yo‘qligi sababli suv qaynaydi va shu jarayonda energiyasini yo‘qotib muzga aylanadi.",
  },
  {
    key: 3,
    question:
      "Ideal gaz molekulalari bir-biri bilan to‘qnashganda energiya yo‘qotadimi?",
    result: "Yo'q",
    desc: "Ideal gaz modelida to‘qnashuvlar mutlaqo elastik deb hisoblanadi (energiya saqlanadi).",
  },
  {
    key: 4,
    question: "Nam havoning zichligi quruq havonikidan kattami?",
    result: "Yo'q",
    desc: "Suv bug‘ining molekulyar massasi (18) havonikidan (29) kichik, shuning uchun nam havo yengilroq.",
  },
  {
    key: 5,
    question:
      "Gazni siqqanda uning harorati tashqi ta'sirsiz ko‘tarilishi mumkinmi?",
    result: "Ha",
    desc: "Bu adiyabatik jarayon deyiladi; tashqi ish gazning ichki energiyasini oshiradi.",
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
