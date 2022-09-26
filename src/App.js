import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import axios from "axios";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFiledString);
  };
  //using fetch
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);
  //using axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setMonsters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Robots</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
