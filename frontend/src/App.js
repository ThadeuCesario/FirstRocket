import React, { useLayoutEffect } from 'react';

import Header from './components/Header';

/**
 * Conceitos mais importantes do React
 * 
 * Componente
 * Propriedade
 * Estado
 * 
 */


const App = _ => {
    return(
        <>
            <Header title={'FirstRocket'}>
                <ul>
                    <li>Projeto</li>
                </ul>
            </Header>
        </>
    );
}

export default App;