import { ReactNode } from "react";
import styles from "./pageLayout.module.scss";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{ children }</div>
}

export default PageLayout;