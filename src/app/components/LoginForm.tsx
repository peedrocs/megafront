"use client";

import {useState} from "react";

export default function FormDeLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const enviarFormularioLogin = async (evento: React.FormEvent) => {
        evento.preventDefault();
        
        const resposta = await fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        })

        const dados = await resposta.json();
        console.log(dados);
    }

    return (
        <form onSubmit = {enviarFormularioLogin}>
            <input 
            type="email" 
            value = {email} 
            onChange = {evento => setEmail( evento.target.value )} 
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder = "Digite seu e-mail" />
                
            <input type="password" 
            value = {senha} 
            onChange = {evento => setSenha( evento.target.value )}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder = "Digite sua senha" /> 

            <button 
            type="submit"
            className="w-full bg-black text-white hover:bg-teal-700 p-2 border-black rounded outline">
            Entrar
            </button>

        </form>
    )
}