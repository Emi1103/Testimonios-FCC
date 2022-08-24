import "./App.css";
import Testimonio from "./Componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1> Esto es lo que dicen nuestros alumnos sobre 
        nuestro curso: </h1>
      
        <Testimonio
        nombre='Josefina Manes'
        pais='Argentina'
        imagen='2'
        cargo='Ingeniera de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané 
        la confianza de que podía programar trabajando a 
        través de los cientos de horas de lecciones 
        gratuitas en este BootCamp. Dentro de un año tuve 
        un trabajo de seis cifras como ingeniera de 
        software. Este Bootcamp cambió mi vida.' />
      
      <Testimonio 
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='1'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para 
      aprender JavaScript. He tomado muchos cursos,
      pero este curso fue el que se quedó. Estudiar 
      JavaScript, así como estructuras de datos y
      algoritmos. Este BootCamp me dió las habilidades y la confianza 
      que necesitaba para conseguir el trabajo de mis 
      sueños como ingeniero de software en Spotify.' />

<Testimonio 
      nombre='Sofía Sanchez'
      pais='Argentina'
      imagen='3'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='Este BootCamp fue la puerta de entrada 
      a mi carrera como desarrollador de software. El 
      plan de estudios bien estructurado llevó mis 
      conocimientos de programación de un nivel 
      principiante total a un nivel muy seguro. Era todo 
      lo que necesitaba para conseguir mi primer trabajo 
      de desarrollador en una empresa increíble.' /> 

      </div>
    </div>
  );
}

export default App;
