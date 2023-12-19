// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion, par exemple, une vérification factice
    if (username === 'votreNomUtilisateur' && password === 'votreMotDePasse') {
      onLogin(true);
    } else {
      onLogin(false);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <label>
        Nom d'utilisateur:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Se connecter</button>
      <button onClick={handleLogin}>S'inscrire ?</button>
    </div>
  );
};

export default Login;