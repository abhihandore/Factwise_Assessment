import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import ListOfUsers from "./components/ListOfUsers";
import { Celebrity } from "./types/listOfUsers";
import { getListOfUsers } from "./services/listOfUsers";
import ListOfUsersSkeleton from "./components/ListOfUsers/ListOfUsersSkeleton";

function App() {
  const [userData, setUsersData] = useState<Celebrity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    getListOfUsers()
      .then((data) => {
        setUsersData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSave = useCallback((updatedUser: Celebrity) => {
    setUsersData((prevUserData) => {
      const indexOf = prevUserData.findIndex(
        (user) => user.id === updatedUser.id
      );
      const newUserData = [...prevUserData];
      newUserData[indexOf] = updatedUser;
      return newUserData;
    });
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setUsersData((prevUserData) => {
      const newUserData = prevUserData.filter((user) => user.id !== id);
      return newUserData;
    });
  }, []);

  const filteredData = useMemo(() => {
    return userData.filter((user) => {
      const fullName = `${user.first} ${user.last}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, userData]);

  return (
    <main className={styles.main}>
      <h3 className={styles.heading}>List View</h3>
      <div className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        {loading ? (
          <ListOfUsersSkeleton />
        ) : (
          <ListOfUsers
            users={filteredData}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        )}
      </div>
    </main>
  );
}

export default App;
