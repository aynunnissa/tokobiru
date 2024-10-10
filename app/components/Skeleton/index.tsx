import styles from "./skeleton.module.scss"

interface ISkeleton {
  width: string,
  height: string
}

const Skeleton = ({ width, height }: ISkeleton) => {
  return (
    <div style={{ width, height }} className={styles.skeleton}>
      <div className={styles["bg-skeleton"]}></div>
    </div>
  );
};

export default Skeleton;