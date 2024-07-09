// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FetchData from "./FetchData";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./store"; // Import action dan store Redux

// Komponen halaman beranda
function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    dispatch(updateUser({ nama: "Mahasiswa Baru", nim: "999999999 " }));
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Beranda</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Informasi Pengguna</h5>
          <p className="card-text">Nama: {user.nama}</p>
          <p className="card-text">NIM: {user.nim}</p>
          <div className="mb-3">
            <button onClick={handleUpdateUser} className="btn btn-primary">
              Update Pengguna
            </button>
          </div>
          <div className="mb-3">
            <Link to="/about" className="btn btn-secondary">
              Tentang Saya
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/fetch-data" className="btn btn-info">
              Fetch Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen halaman tentang
function About() {
  return (
    <div className="container mt-4">
      <h1 className="display-4">Tentang Saya</h1>
      <p className="lead">
        Saya adalah seorang pengembang perangkat lunak yang senang belajar
        hal-hal baru!
      </p>
      <Link to="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fetch-data">
              <FetchData />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
