import React, { useState } from "react";
import UserDetailsHeader from "./UserDetailsHeader";
import UserInfo from "./UserInfo";
import styles from "@/styles/components/UserDetails.module.scss";


import BackArrow from "./BackArrow";

const UserDetails: React.FC = () => {
     const [activeTab, setActiveTab] = useState("General Details");

 

     const renderContent = () => {
       switch (activeTab) {
         case "General Details":
           return <UserInfo />;
         case "Documents":
           return <div>Documents Content</div>;
         case "Bank Details":
           return <div>Bank Details Content</div>;
         case "Loans":
           return <div>Loans Content</div>;
         case "Savings":
           return <div>Savings Content</div>;
         case "App and System":
           return <div>App and System Content</div>;
         default:
           return null;
       }
     };

  return (
    <div className={styles.userDetails}>
      <button className={styles.backButton}>
        {" "}
        <BackArrow /> Back to Users
      </button>
      <div className={styles.titleHeader}>
        <h1>User Details</h1>
        <div className={styles.actionButtons}>
          <button className={styles.blacklistButton}>Blacklist User</button>
          <button className={styles.activateButton}>Activate User</button>
        </div>
      </div>
      <UserDetailsHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default UserDetails;
