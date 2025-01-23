import React from "react";
import styles from "@/styles/components/UserDetails.module.scss";

interface TabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={activeTab === tab ? styles.activeTab : ""}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
