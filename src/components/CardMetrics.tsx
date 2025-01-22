import React from "react";
import styles from "@/styles/components/CardMetrics.module.scss";

type CardMetricsProps = {
  icon: string; // URL or path to the icon
  title: string;
  value: string | number;
};

const CardMetrics: React.FC<CardMetricsProps> = ({ icon, title, value }) => {
  return (
    <div className={styles.cardMetrics}>
      <img src={icon} alt={`${title} icon`} />
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default CardMetrics;
