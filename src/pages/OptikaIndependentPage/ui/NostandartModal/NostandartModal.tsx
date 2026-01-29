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
    title: "Izoh",
    dataIndex: "desc",
    key: "desc",
    width: 300,
  },
];

const data: DataType[] = [
  {
    key: 1,
    question: `Quyosh nuri prizmadan o‘tganda "kamalak" hosil qiladi. Prizma nurga rang qo‘shadimi?`,
    result: "Yo'q",
    desc: "Prizma rang qo‘shmaydi, balki oq nur tarkibidagi tayyor ranglarni turli burchak ostida sindirib, ularni bir-biridan ajratadi (dispersiya).",
  },
  {
    key: 2,
    question:
      "Toza suv to‘ldirilgan shaffof shisha idish qavariq linza vazifasini o'tay oladimi?",
    result: "Ha",
    desc: "Suv to‘ldirilgan silindrsimon yoki sharsimon idish yorug‘lik nurlarini yig‘ish xususiyatiga ega va u orqali narsalar kattalashib ko‘rinadi.",
  },
  {
    key: 3,
    question:
      "Suv ostida ko‘zimizni ochib qaraganimizda obektlarni aniq (tiniq) ko‘ramizmi?",
    result: "Yo'q",
    desc: "Suvning sinish ko‘rsatkichi ko‘znikiga yaqin bo‘lgani uchun nurlar ko‘z to‘r pardasiga to‘g‘ri fokuslanmaydi va tasvir xira ko‘rinadi.",
  },
  {
    key: 4,
    question:
      "Oq qog‘oz va ko‘zgu — ikkalasi ham yorug‘likni qaytaradi. Ko‘zguda o‘zimizni ko‘ramiz, nega qog‘ozda ko‘rinmaymiz?",
    result: "Ha",
    desc: "Ko‘zgu nurni bir yo‘nalishda (ko‘zgusimon) qaytaradi, qog‘oz esa g‘adir-budurligi sababli nurni har tomonga sochib (diffuz) yuboradi.",
  },
  {
    key: 5,
    question:
      "Yorug‘lik nuri vakuumda (bo‘shliqda) eng yuqori tezlikda harakat qiladimi?",
    result: "Ha",
    desc: "Yorug‘lik tezligi $c = 3 \\cdot 10^8$ m/s bo‘lib, bu koinotdagi eng yuqori tezlikdir. Har qanday moddiy muhitda (suv, shisha) bu tezlik kamayadi.",
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
