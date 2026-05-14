import React from "react";
import imgPetCompanionLogo from "./pet_companion_logo.png";
import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
  return (
    <div className="page">
      <div className="header">
        <div>
          <img src={imgPetCompanionLogo} alt="Logo PetCompanion" />
        </div>
        <h1 className="title">Pet Companion</h1>
        <p className="subtitle">Dbamy o każdą łapkę</p>
        <h2 className="cta">Utwórz konto</h2>
        <p className="description">
          Dołącz do naszej społeczności miłośników zwierząt
        </p>
      </div>

      <form className="card">
        <label>
          Imię i Nazwisko
          <input
            type="text"
            placeholder="Wpisz swoje imię i nazwisko"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="twój@email.com"
          />
        </label>

        <label>
          Hasło
          <input type="password" placeholder="••••••••" />
        </label>

        <label>
          Potwierdź hasło
          <input type="password" placeholder="••••••••" />
        </label>

        <button type="submit" className="primary-btn">
          Utwórz konto
        </button>

        <p className="login">
          Masz już konto? <span>Zaloguj się</span>
        </p>
      </form>

      <p className="footer">
        Tworząc konto akceptujesz <strong>Regulamin</strong> i{" "}
        <strong>Politykę prywatności</strong>
      </p>
    </div>
  );
};

export default RegisterPage;