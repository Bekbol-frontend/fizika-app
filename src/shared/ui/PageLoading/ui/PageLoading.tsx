import { Spin } from "antd";
import styles from "./PageLoading.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function PageLoading() {
  const { sm } = useResponsive();

  return (
    <div className={styles.pageLoading}>
      <Spin size={sm ? "large" : "default"} />
    </div>
  );
}

export default PageLoading;
