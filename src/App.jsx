import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import RepoList from "./components/RepoList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (searchTerm) {
        const result = await axios(
          `https://api.github.com/search/repositories?q=${searchTerm}`
        );
        setRepos(result.data.items);
      }
    };

    fetchRepos();
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Repo-Lens</h1>
      <Search onSearch={setSearchTerm} />
      <RepoList repos={repos} />
    </div>
  );
}

export default App;
