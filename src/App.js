import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import FormularioSoma from "./components/FormularioSoma";
import FormularioSub from "./components/FormularioSub";
import FormularioMult from "./components/FormularioMult";
import FormularioDiv from "./components/FormularioDivo";
import FormularioMedia from "./components/FormularioMedia";
import FormularioCelsius from "./components/FormularioCelsius";
import FormularioFarenheit from "./components/FormularioFarenheit";
import FormularioCalculator from "./components/FormularioCalculator";
import FormularioRetangulo from "./components/FormularioRentangulo";
import FormularioPerimetro from "./components/FormularioPerimetro";
import FormularioRaio from "./components/FormularioRaio";
import FormularioBase from "./components/FormularioBase";
import FormularioValorM from "./components/FormularioValorM";
import FormularioKm from "./components/FormularioKm";
import FormularioIMC from "./components/FormularioIMC";
import FormularioPreco from "./components/FormularioPreco";
import FormularioCapital from "./components/FormularioCapital";
import FormularioComposto from "./components/FormularioComposto";
import FormularioMes from "./components/FormularioMes";




function App() {
  return(
    <div>
    <Titulo nome="Joao" sobrenome="uu aa"/>
    <Titulo nome="Pedro" sobrenome="Bagli"/>
    <Contador/>
    <FormularioSoma/>
    <FormularioSub/>
    <FormularioMult/>
    <FormularioDiv/>
    <FormularioMedia/>
    <FormularioCelsius/>
    <FormularioFarenheit/>
     <FormularioCalculator/>
    <FormularioRetangulo/>
    <FormularioPerimetro/>
    <FormularioRaio/>
    <FormularioBase/>
    <FormularioValorM/>
    <FormularioKm/>
    <FormularioIMC/>
    <FormularioPreco/>
    <FormularioCapital/>
    <FormularioComposto/>
    <FormularioMes/>
    </div>
    );
  }

export default App;