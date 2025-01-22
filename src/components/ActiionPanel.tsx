import React from "react";
import styles from "@/styles/components/ActionPanel.module.scss";

interface ActionPanelProps {
  onViewDetails: () => void;
  onBlacklistUser: () => void;
  onActivateUser: () => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({
  onViewDetails,
  onBlacklistUser,
  onActivateUser,
}) => {
  return (
    <div className={styles.actionPanel}>
      <button className={styles.actionButton} onClick={onViewDetails}>
        <span className={styles.icon}>👁️</span>
        <span>View Details</span>
      </button>
      <button className={styles.actionButton} onClick={onBlacklistUser}>
        <span className={styles.icon}>👤</span>
        <span>Blacklist User</span>
      </button>
      <button className={styles.actionButton} onClick={onActivateUser}>
        <span className={styles.icon}>👤</span>
        <span>Activate User</span>
      </button>
    </div>
  );
};

export default ActionPanel;
