import styles from "@/styles/components/UserDetails.module.scss";

const UserDetailsHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>🧑</div>
        <div>
          <h2>Grace Effiom</h2>
          <p className={styles.userTier}>User's Tier ★★</p>
          <p className={styles.accountBalance}>₦200,000.00</p>
          <p className={styles.bankDetails}>9912345678 / Providus Bank</p>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.blacklistButton}>Blacklist User</button>
        <button className={styles.activateButton}>Activate User</button>
      </div>
    </div>
  );
};

export default UserDetailsHeader;
