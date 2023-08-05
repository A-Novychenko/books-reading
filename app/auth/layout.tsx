import styles from "./authPage.module.scss";

const Layout = ({children}: {children: React.ReactNode}) => {
  return <div className={styles.authWrap}>{children}</div>;
};
export default Layout;
