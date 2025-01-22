import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "@/styles/components/Sidebar.module.scss";

import dashboardIcon from "@/assets/svgs/home.svg";
import userIcon from "@/assets/svgs/users.svg";
import guarantorIcon from "@/assets/svgs/guarantors.svg";
import loansIcon from "@/assets/svgs/loans.svg";
import decisionModelsIcon from "@/assets/svgs/decision-models.svg";
import settingsIcon from "@/assets/svgs/preferences.svg";

const sidebarItems = [
  { category: null, items: [{ icon: dashboardIcon, text: "Dashboard", link: "/" }] },
  {
    category: "CUSTOMERS",
    items: [
      { icon: userIcon, text: "Users", link: "/users" },
      { icon: guarantorIcon, text: "Guarantors", link: "/guarantors" },
      { icon: loansIcon, text: "Loans", link: "/loans" },
      { icon: decisionModelsIcon, text: "Decision Models", link: "/decision-models" },
    ],
  },
  {
    category: "BUSINESSES",
    items: [
      { icon: loansIcon, text: "Loan Products", link: "/loan-products" },
      { icon: settingsIcon, text: "Fees and Charges", link: "/fees-and-charges" },
      { icon: decisionModelsIcon, text: "Transactions", link: "/transactions" },
    ],
  },
  {
    category: "SETTINGS",
    items: [
      { icon: settingsIcon, text: "Preferences", link: "/preferences" },
      { icon: loansIcon, text: "Fees and Pricing", link: "/fees-and-pricing" },
      { icon: decisionModelsIcon, text: "Audit Logs", link: "/audit-logs" },
    ],
  },
];

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__dropdown}>
        <button
          className={styles.sidebar__dropdownButton}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={dashboardIcon} alt="Switch Organization" />
          <span>Switch Organization</span>
          <span className={styles.sidebar__dropdownIcon}>
            {isDropdownOpen ? "▲" : "▼"}
          </span>
        </button>
        {isDropdownOpen && (
          <ul className={styles.sidebar__dropdownMenu}>
            <li>Organization 1</li>
            <li>Organization 2</li>
          </ul>
        )}
      </div>

      <nav className={styles.sidebar__navContainer}>
        {sidebarItems.map((group, index) => (
          <div key={index} className={styles.sidebar__category}>
            {group.category && (
              <p className={styles.sidebar__categoryTitle}>
                {group.category}
              </p>
            )}
            <ul>
              {group.items.map((item, subIndex) => (
                <li key={subIndex} className={styles.sidebar__item}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? styles.sidebar__itemActive : ""
                    }
                  >
                    <img src={item.icon} alt={item.text} />
                    <span>{item.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
