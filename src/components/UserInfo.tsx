import React from "react";
import styles from "@/styles/components/UserDetails.module.scss";
import Section from "./Sections";
import InfoRow from "./InfoRow";

const UserInfo: React.FC = () => {
  return (
    <div className={styles.userInfoSection}>
      <Section title="Personal Information">
        <InfoRow label="FULL NAME" value="Grace Effiom" />
        <InfoRow label="PHONE NUMBER" value="07060780922" />
        <InfoRow label="EMAIL ADDRESS" value="grace@gmail.com" />
        <InfoRow label="BVN" value="07060780922" />
        <InfoRow label="GENDER" value="Female" />
        <InfoRow label="MARITAL STATUS" value="Single" />
        <InfoRow label="CHILDREN" value="None" />
        <InfoRow label="TYPE OF RESIDENCE" value="Parent’s Apartment" />
      </Section>

      <div className={styles.hLine} />

      <Section title="Education and Employment">
        <InfoRow label="LEVEL OF EDUCATION" value="B.Sc" />
        <InfoRow label="EMPLOYMENT STATUS" value="Employed" />
        <InfoRow label="SECTOR OF EMPLOYMENT" value="FinTech" />
        <InfoRow label="DURATION OF EMPLOYMENT" value="2 years" />
        <InfoRow label="OFFICE EMAIL" value="grace@lendsqr.com" />
        <InfoRow label="MONTHLY INCOME" value="N200,000.00 - N400,000.00" />
        <InfoRow label="LOAN REPAYMENT" value="40,000" />
      </Section>

      <div className={styles.hLine} />

      <Section title="Socials">
        <InfoRow label="TWITTER" value="@grace_effiom" />
        <InfoRow label="FACEBOOK" value="Grace Effiom" />
        <InfoRow label="INSTAGRAM" value="@grace_effiom" />
      </Section>

      <div className={styles.hLine} />

      <Section title="Guarantor">
        <InfoRow label="FULL NAME" value="Debby Ogana" />
        <InfoRow label="PHONE NUMBER" value="07060780922" />
        <InfoRow label="EMAIL ADDRESS" value="debby@gmail.com" />
        <InfoRow label="RELATIONSHIP" value="Sister" />
        <InfoRow label="FULL NAME" value="kelechi Edet" />
        <InfoRow label="PHONE NUMBER" value="0813456890" />
        <InfoRow label="EMAIL ADDRESS" value="kellyedet9@gmail.com" />
        <InfoRow label="RELATIONSHIP" value="Brother" />
      </Section>
    </div>
  );
};

export default UserInfo;
