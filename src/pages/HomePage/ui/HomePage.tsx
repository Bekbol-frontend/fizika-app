import { Section } from "@/shared/ui/Section";
import styles from "./HomePage.module.scss";
import { Typography } from "antd";
import HomeMenu from "./HomeMenu/HomeMenu";

const { Title } = Typography;

function HomePage() {
  return (
    <Section className={styles.homePage}>
      <div className={styles.box}>
        <Title className={styles.title}>
          Umumkasbiy va ixtisoslik fanlar integratsiyasi
        </Title>

        <HomeMenu />
      </div>
    </Section>
  );
}

export default HomePage;
