import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the hero" />

					<h1>Cadastro</h1>
					<p>
						Faça o seu cadastro, entre na plataforma e ajude pessoas
						a encontrarem os casos da sua ONG.
					</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#e02041" />
						Voltar ao login
					</Link>
				</section>

				<form>
					<input placeholder="Nome da ONG" />
					<input type="email" placeholder="Email" />
					<input type="tel" placeholder="Whatsapp" />

					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="Uf" style={{ width: 80 }} />
					</div>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
