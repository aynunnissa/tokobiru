import { ReactNode } from "react";
import styles from "./pageLayout.module.scss";
import Navbar from "@/components/Navbar";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div>{ children }</div>
    </div>)
}

export default PageLayout;