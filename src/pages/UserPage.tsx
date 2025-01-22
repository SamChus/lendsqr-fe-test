import styles from "@/styles/components/UserPage.module.scss";
import UserTable from "../components/UserTable";
import CardMetrics from "../components/CardMetrics";
import ActiveUser from "@/assets/svgs/active-users.svg";
import Users from "@/assets/svgs/user-matrics.svg";
import Loans from "@/assets/svgs/user-with-loans.svg";
import Savings from "@/assets/svgs/user-with-savings.svg";


const UserPage = () => {
  return (
    <div className={styles.userPage}>
      <div className={styles.metrics}>
        <CardMetrics title="Users" value="2,453" icon={Users} />
        <CardMetrics
          title="Active Users"
          value="2,453"
          icon= {ActiveUser}
        />
        <CardMetrics
          title="Users With Loans"
          value="12,453"
          icon={Loans}
        />
        <CardMetrics
          title="Users With Savings"
          value="102,453"
          icon={Savings}
        />
      </div>
      <div className={styles.tableSection}>
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
