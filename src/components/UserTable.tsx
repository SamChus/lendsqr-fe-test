import { useState, useEffect } from "react";
import mockData from "../services/mockData";
import FilterPanel from "./FilterPanel";
import styles from "@/styles/components/UserTable.module.scss";
import filterIcon from "@/assets/svgs/filter.svg";
import Pagination from "./Pagination";
import ActionPanel from "./ActiionPanel";

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

interface Filters {
  organization?: string;
  username?: string;
  email?: string;
}

const UserTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showAction, setShowAction] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    mockData.getUsers().then((response: User[]) => {
      setData(response);
      setFilteredData(response);
    });
  }, []);

  const handleFilter = (filters: Filters) => {
    let filtered = data;
    if (filters.organization)
      filtered = filtered.filter((item) =>
        item.organization.includes(filters.organization || "")
      );
    if (filters.username)
      filtered = filtered.filter((item) =>
        item.username.includes(filters.username || "")
      );
    if (filters.email)
      filtered = filtered.filter((item) =>
        item.email.includes(filters.email || "")
      );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleSort = (key: string) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (a[key as keyof User] < b[key as keyof User]) return -1;
      if (a[key as keyof User] > b[key as keyof User]) return 1;
      return 0;
    });
    setFilteredData(sorted);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "").slice(0, 10);
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
    return phone;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewDetails = () => {
    alert("View Details clicked");
  };

  const handleBlacklistUser = () => {
    alert("Blacklist User clicked");
  };

  const handleActivateUser = () => {
    alert("Activate User clicked");
  };

  return (
    <div>
      <div className={styles.userTable}>
        {showFilter && <FilterPanel onFilter={handleFilter} />}
        <table>
          <thead>
            <tr>
              <th>
                Organization
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
              <th>
                Username
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
              <th>
                Email
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
              <th>
                Phone Number
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
              <th>
                Date Joined
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
              <th>
                Status
                <img
                  src={filterIcon}
                  alt="Filter"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr key={index}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{formatPhoneNumber(user.phone)}</td>
                <td>{formatDate(user.dateJoined)}</td>
                <td className={styles.status}>
                  <span
                    className={
                      user.status.toLowerCase() === "active"
                        ? styles.active
                        : user.status.toLowerCase() === "inactive"
                        ? styles.inactive
                        : user.status.toLowerCase() === "blacklisted"
                        ? styles.blacklisted
                        : user.status.toLowerCase() === "pending"
                        ? styles.pending
                        : ""
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td className={styles.action}>
                  <div
                    className={styles.actionDot}
                    onClick={() => setShowAction(!showAction)}
                  >
                    ...
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {showAction && (
            <ActionPanel
              onViewDetails={handleViewDetails}
              onBlacklistUser={handleBlacklistUser}
              onActivateUser={handleActivateUser}
            />
          )}
        </table>
      </div>
      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.itemsPerPage}>
          <span>Showing</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className={styles.dropdown}
          >
            {[10, 25, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>out of {filteredData.length}</span>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserTable;
