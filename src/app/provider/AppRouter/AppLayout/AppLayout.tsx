import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import { Suspense } from "react";
import { PageLoading } from "@/shared/ui/PageLoading";

const { Content } = Layout;

function AppLayout() {
  return (
    <Layout className={styles.layout}>
      <Content>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </Content>
    </Layout>
  );
}

export default AppLayout;
