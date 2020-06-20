import React from 'react';
import PropTypes from 'prop-types';
//Function Component
const PrimeraApp = ({ saludo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify( persona, null, 3)}</pre>*/}
            <p>Mi primera app</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;