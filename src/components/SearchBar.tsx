import "@/styles/components/SearchBar.scss";
import searchIcon from "@/assets/svgs/search.svg";


interface SearchBarProps {
  type?: string; // Optional, in case you need variations in styles
}

const SearchBar = ({ type }: SearchBarProps) => {
  return (
    <div className="header__right__search">
      <input
        className={`header__right__search__input ${
          type ? `header__right__search__input--${type}` : ""
        }`}
        placeholder="Search for anything"
      />
      <div
        className={`header__right__search__icon ${
          type ? `header__right__search__icon--${type}` : ""
        }`}
      >
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
};

export default SearchBar;
