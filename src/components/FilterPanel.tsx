import { useState } from "react";
import styles from "@/styles/components/FilterPanel.module.scss";

const FilterPanel = ({ onFilter }: { onFilter: (filters: any) => void }) => {
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    onFilter({});
  };

  return (
    <div className={styles.filterPanel}>
      <form>
        <div className={styles.formGroup}>
          <label>Organization</label>
          <select name="organization" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Lendsqr">Lendsqr</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input name="username" type="text" onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input name="email" type="email" onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Date</label>
          <input name="date" type="date" onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input name="phoneNumber" type="text" onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Status</label>
          <select name="status" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className={styles.buttonGroup}>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" onClick={() => onFilter(filters)}>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
