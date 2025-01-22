import React from "react";
import styles from "./UserDetails.module.scss";

const UserInfo: React.FC = () => {
  return (
    <div className={styles.userInfoSection}>
      <div className={styles.section}>
        <h3>Personal Information</h3>
        <p>Full Name: Grace Effiom</p>
        <p>Phone Number: 07060780922</p>
        <p>Email Address: grace@gmail.com</p>
        <p>BVN: 07060780922</p>
        <p>Gender: Female</p>
        <p>Type of Residence: Parent's Apartment</p>
      </div>
      <div className={styles.section}>
        <h3>Education and Employment</h3>
        <p>Level of Education: B.Sc</p>
        <p>Employment Status: Employed</p>
        <p>Sector of Employment: FinTech</p>
        <p>Monthly Income: ₦200,000.00 - ₦400,000.00</p>
        <p>Loan Repayment: 40,000</p>
      </div>
      <div className={styles.section}>
        <h3>Socials</h3>
        <p>Twitter: @grace_effiom</p>
        <p>Facebook: Grace Effiom</p>
        <p>Instagram: @grace_effiom</p>
      </div>
      <div className={styles.section}>
        <h3>Guarantor</h3>
        <p>Full Name: Debby Ogana</p>
        <p>Phone Number: 07060780922</p>
        <p>Email Address: debby@gmail.com</p>
        <p>Relationship: Sister</p>
      </div>
    </div>
  );
};

export default UserInfo;
