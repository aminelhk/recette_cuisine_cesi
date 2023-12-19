import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [mail, setMail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [isInscription, setIsInscription] = useState(false);

  const handleNomChange = (e) => setNom(e.target.value);
  const handlePrenomChange = (e) => setPrenom(e.target.value);
  const handleDateNaissanceChange = (e) => setDateNaissance(e.target.value);
  const handleMailChange = (e) => setMail(e.target.value);
  const handleMotDePasseChange = (e) => setMotDePasse(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInscription) {
      // Logique pour l'inscription
      console.log('Inscription :', {
        nom,
        prenom,
        dateNaissance,
        mail,
        motDePasse,
      });
    } else {
      // Logique pour la connexion
      console.log('Connexion :', {
        mail,
        motDePasse,
      });
      // Appeler la fonction de connexion
      onLogin(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isInscription ? <h2>Inscription</h2> : <h2>Connexion</h2>}
      
      {isInscription && (
        <>
          <label>
            Nom:
            <input type="text" value={nom} onChange={handleNomChange} />
          </label>
          <br />
          <label>
            Prénom:
            <input type="text" value={prenom} onChange={handlePrenomChange} />
          </label>
          <br />
          <label>
            Date de Naissance:
            <input type="text" value={dateNaissance} onChange={handleDateNaissanceChange} />
          </label>
          <br />
        </>
      )}

      <label>
        Mail:
        <input type="email" value={mail} onChange={handleMailChange} />
      </label>
      <br />
      <label>
        Mot de Passe:
        <input type="password" value={motDePasse} onChange={handleMotDePasseChange} />
      </label>
      <br />

      <button type="submit">
        {isInscription ? 'S\'inscrire' : 'Se connecter'}
      </button>

      <button type="button" onClick={() => setIsInscription(!isInscription)}>
        {isInscription ? 'Déjà un compte ? Se connecter' : 'Pas encore de compte ? S\'inscrire'}
      </button>
    </form>
  );
};

export default LoginForm;
