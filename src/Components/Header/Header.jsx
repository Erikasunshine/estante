import React from "react";
import "./Header.css";
import {foto} from './imagem.jpn';

function Header(props) {
    return(
        <header>
            <img id="foto-perfil" src= {foto} alt="fotoperfil" />
            <Link to="/">
            <span className="nome-usuario">Erika Andrade</span>
            <div className="lidos">
                <span>130</span>
                <span>lidos</span>
                <Link to="/">
        
                <Link to="/">Lidos</Link>
                <Link to="/Vouler">Vouler</Link>
            <div>
        </header>
    );
}

export default Header;