import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import FormularioSoma from "./components/FormularioSoma";
import FormularioSub from "./components/FormularioSub";
import FormularioMult from "./components/FormularioMult";
import FormularioDiv from "./components/FormularioDivo";
import FormularioMedia from "./components/FormularioMedia";
import FormularioCelsius from "./components/FormularioCelsius";
import FormularioFarenheit from "./components/FormularioFarenheit";

function App() {
  return(
    <div>
    <Titulo nome="diogo" sobrenome="uu aa"/>
    <Titulo nome="professora vanessa" sobrenome="claidin"/>
    <Contador/>
    <FormularioSoma/>
    <FormularioSub/>
    <FormularioMult/>
    <FormularioDiv/>
    <FormularioMedia/>
    <FormularioCelsius/>
    <FormularioFarenheit/>
    </div>
    );
  }

export default App;