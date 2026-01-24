import { Button, Result } from "antd";
import styles from "./PageError.module.scss";

function PageError() {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.pageError}>
      <Result
        status="warning"
        title="Operatsiyangiz bilan bog'liq ba'zi muammolar mavjud."
        extra={
          <Button type="primary" key="console" onClick={onReload}>
            Yana urinib ko'ring
          </Button>
        }
      />
    </div>
  );
}

export default PageError;
