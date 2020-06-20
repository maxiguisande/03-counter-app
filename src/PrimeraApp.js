import React from 'react';
import PropTypes from 'prop-types';
//Function Component
const PrimeraApp = ({
    saludo,
    subtitulo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify( persona, null, 3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitle'
}
export default PrimeraApp;