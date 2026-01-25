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
    title: "Savol (Muammo)",
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
    title: "Aniq va mantiqiy tushuntirish",
    dataIndex: "desc",
    key: "desc",
    width: 300,
  },
];

const data: DataType[] = [
  {
    key: 1,
    question:
      "Bo'sh turgan qayiq ichidagi odam qayiq devorini itarsa, qayiq joyidan jiladimi?",
    result: "(Yo'q)",
    desc: "Bu ichki kuch hisoblanadi. Tashqi ta'sir (masalan, eshkak bilan suvni itarish) bo'lmasa, qayiq siljimaydi.",
  },
  {
    key: 2,
    question:
      "Erkin tushayotgan lift ichidagi tarozi ustida turgan odamning vazni nolga tengmi?",
    result: "(Ha)",
    desc: "Lift va odam bir xil $g$ tezlanish bilan tushayotgani uchun odam tarozini bosmaydi (vaznsizlik).",
  },
  {
    key: 3,
    question:
      "Gorizontal otilgan jism va erkin tushib ketgan jism (bir xil balandlikdan) yerga har xil vaqtda tushadimi?",
    result: "(Yo'q)",
    desc: "Ikkala jismning ham vertikal yo'nalishdagi harakati faqat $g$ ga bog'liq, shuning uchun ular bir vaqtda tushadi.",
  },
  {
    key: 4,
    question:
      "Koinotda (vakuumdagi stansiyada) sham yonsa, uning alangasi odatdagidek yuqoriga cho'ziladimi?",
    result: "(Yo'q)",
    desc: "Yerda issiq havo yuqoriga ko'tariladi (konveksiya). Vaznsizlikda bu jarayon yo'qligi sababli alanga sharsimon shaklda bo'ladi.",
  },
  {
    key: 5,
    question:
      "Agar Yerning aylanish tezligi keskin ortsa, ekvatordagi jismlarning og'irligi kamayadimi?",
    result: "(Ha)",
    desc: "Markazdan qochma kuch ortishi natijasida jismning Yerga bosim kuchi (vazni) kamayadi.",
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
