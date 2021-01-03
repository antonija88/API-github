import React, { useState } from "react";
import { InputForm } from "./components/InputForm";
import { Korisnik } from "./components/Korisnik";
import { RepositoryList } from "./components/RepositoryList";
import './App.css';

export default function App() {
  const [korisnik, setKorisnik] = useState(null);

  const onSubmit = (korisnik) => {
    setKorisnik(korisnik);
  };

  return (
    <div className="App">
    <div className="page-content page-container">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title text-center">API Github</h4>
                  <hr/>
                  <InputForm onSubmit={onSubmit} />
                  <Korisnik user={korisnik} />
                  <RepositoryList user={korisnik} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
