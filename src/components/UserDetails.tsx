import React, { useState } from "react";
import UserDetailsHeader from "./UserDetailsHeader";
import UserTabs from "./Tabs";
import UserInfo from "./UserInfo";
import styles from "@/styles/components/UserDetails.module.scss";
import BackArrow from "./BackArrow";

const UserDetails: React.FC = () => {
     const [activeTab, setActiveTab] = useState("General Details");

     const tabs = [
       "General Details",
       "Documents",
       "Bank Details",
       "Loans",
       "Savings",
       "App and System",
     ];

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
      <button className={styles.backButton}> <BackArrow /> Back to Users</button>
      <UserDetailsHeader />
      <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
      {renderContent()}
    </div>
  );
};

export default UserDetails;
