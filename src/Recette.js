import React, { useState, useEffect } from "react";
import "./Recette.css";
import { useParams } from "react-router-dom";

const Recette = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8082/recetteDetail/${id}`
        );
        console.log(`http://localhost:8082/recetteDetail/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLogin(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Title">
      <h2>
        {data.name} - {data.origine}
      </h2>
      {isLogin ? (
        <h4>CHARGEMENT</h4>
      ) : (
        <div className="body">
          <div className="cote mRight">{data.ingredients}</div>
          <img className="img" src={data.lienImage} />
          <div className="cote mLeft">{data.instructions}</div>
        </div>
      )}
    </div>
  );
};

export default Recette;
