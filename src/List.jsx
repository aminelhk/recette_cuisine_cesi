import React, { useState, useEffect } from 'react';
import "./List.css";
import { Outlet, Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/recette');
        const jsonData = await response.json();
        setData(jsonData);
        setIsLogin(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='Title'>
        <h2>Toutes nos recettes</h2>
        {isLogin ? (
          <h4>CHARGEMENT</h4>
        ) : (
          <div className='body'>
            {data.map((recette, index) => (
              <Link to={`/recette/${recette._id}`} key={index} className='box'>
                <h3 className='link'>{recette.name}</h3>
                <img className='imgList' src={recette.lienImage} alt={recette.name} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default List;
