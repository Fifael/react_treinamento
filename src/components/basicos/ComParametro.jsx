import React from "react";

export default function ComParamentro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div id="app">
      <h2>{props.Titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota}</strong> e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
