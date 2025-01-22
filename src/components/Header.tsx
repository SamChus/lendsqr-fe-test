import styles from "@/styles/components/Header.module.scss";
import logo from "../assets/svgs/logo.svg";
import notificationIcon from "../assets/images/notification.png";
import avatar from "../assets/images/profile_avatar.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.header__left}>
        <img src={logo} alt="Lendsqr Logo" className="logo" />
        <SearchBar type="header" /> 
      </div>


      {/* Right Section */}
      <div className={styles.header__right}>
        {/* Search */}
        <p>Docs</p>
       

        {/* Notification */}
        <div className={styles.header__right__notification}>
          <img
            src={notificationIcon}
            alt="Notification"
            className={styles.header__right__notification__icon}
          />
        </div>

        {/* Profile */}
        <div className={styles.header__right__profile}>
          <img
            src={avatar}
            alt="User profile"
            className={styles.header__right__profile__image}
          />
          <span className={styles.header__right__profile__name}>Adedeji ▾</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
