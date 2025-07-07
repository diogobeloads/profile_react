import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import RepoList from "./components/RepoList"


function App() {

  return(
    <>
      <Perfil nomeUsuario="diogobeloads" />
      <RepoList nomeUsuario="diogobeloads"/>
      {/* <Formulario /> */}
    </>
  )
}

export default App
