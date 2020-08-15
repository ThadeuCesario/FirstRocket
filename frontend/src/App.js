import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/backgroundImage.jpeg';

/**
 * Conceitos mais importantes do React
 * 
 * Componente
 * Propriedade
 * Estado e imutabilidade
 * 
 * 
 * Obs.: useState, retorna um array com duas posições.
 * Sendo a primeira posição possui o valor inicial.
 * A segunda posição é uma função para atualizarmos esse valor.
 */

const App = _ => {

    const [projects, setProjects] = useState(["Desenvolvimento de App","Front-end web"]);

    const handleProjects = () => {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }
    return(
        <>
            <Header title={'FirstRocket'} />

            <img src={backgroundImage} />

            {
                projects.length > 0 && projects.map((project, index) => <div key={index}>{project}</div>)
            }

            <button type='button' onClick={handleProjects}>Adicionar</button>
        </>
    );
}

export default App;