import styles from "./ImgBlock.module.scss";

interface IProps {
  imgUrl: string;
}

function ImgBlock({ imgUrl }: IProps) {
  return (
    <div className={styles.imgBlock}>
      <img draggable={false} src={imgUrl} />
    </div>
  );
}

export default ImgBlock;
