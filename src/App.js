import React from 'react';
import "./styles/style.scss";
import Curso from './Curso';

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9EL3S-2jicEaQQUHChkny3fUuKPpV-RqxnJGjZ1ESHB4EqQqL" alt="Banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Aprendiendo React</p>
        <p> Construyendo mi futuro</p>
        <a href="https://ux.ed.team/banner.html" className="button">Aprender</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />

  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />

  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>
</>
)
  
//reglas
//1: toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento padre
//3: Apoyarse de los Fragment
//4: Nomenclatura <></>
//5: img siempre se cierra
//6: class = className
//7: for = htmlFor



export default App;
