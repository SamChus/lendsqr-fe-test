import styles from "@/styles/components/UserDetailsHeader.module.scss";
import avatar from "@/assets/svgs/profile-avatar.svg";
import Tabs from "./Tabs";

interface UserDetailsHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const UserDetailsHeader = ({activeTab, setActiveTab}:UserDetailsHeaderProps) => {
      const tabs = [
        "General Details",
        "Documents",
        "Bank Details",
        "Loans",
        "Savings",
        "App and System",
      ];
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.userDetails}>
          <h2>Grace Effiom</h2>
          <p>LSQFf587g90</p>
        </div>
        <div className={styles.vline} />
        <div className={styles.userTier}>
          <p>User's Tier</p>
          <div className={styles.stars}>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
        <div className={styles.vline} />
        <div className={styles.accountInfo}>
          <p className={styles.accountBalance}>₦200,000.00</p>
          <p className={styles.bankDetails}>9912345678 / Providus Bank</p>
        </div>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </div>
  );
};

export default UserDetailsHeader;
