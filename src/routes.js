import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Funcionarios from "./pages/funcionarios";
import Createfuncionario from "./pages/createFuncionario";
import Editarfuncionario from "./pages/editarFuncionario";
import Equipe from "./pages/equipe";
import CreateEquipe from "./pages/createEquipe";
import EditarEquipe from "./pages/editarEquipe";
import Home from "./pages/home";
import Login from "./pages/login";
import Clientes from "./pages/clientes";
import CreateCliente from "./pages/createCliente";
import EditarCliente from "./pages/editarCliente";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Login} />
                <Route path={'/home'} component={Home} />
                <Route path={'/funcionario/create'} component={Createfuncionario} />
                <Route path={'/funcionario/edit'} component={Editarfuncionario} />
			    <Route path={'/equipe'} exact component={Equipe}/>
                <Route path={'/equipe/create'} component={CreateEquipe} />
                <Route path={'/equipe/edit'} component={EditarEquipe} />
                <Route path={'/cliente'} exact component={Clientes} />
                <Route path={'/cliente/create'} component={CreateCliente} />
                <Route path={'/cliente/edit'} component={EditarCliente} />
            </Switch>
        </BrowserRouter>
    );
}



