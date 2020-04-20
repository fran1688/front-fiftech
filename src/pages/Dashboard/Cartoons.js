import React from "react";
import PropTypes from 'prop-types';

const Cartoons = ({ name, status, species, gender, images }) => (
    <div className="single-cartoons">
        <h2>{name}</h2>
        <img src={images} alt={name} />
        <h5 className="text-cartoons">Status: {status}</h5>
        <hr className="spa-cartoons"/>
        <h5 className="text-cartoons">Especie: {species}</h5>
        <hr className="spa-cartoons" />
        <h5 className="text-cartoons">Genero: {gender}</h5>
    </div>
)

Cartoons.prototype = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}

export default  Cartoons
