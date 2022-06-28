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
import produtos from "./pages/produtos";
import EditarProduto from "./pages/editarProduto";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Login} />
                <Route path={'/home'} component={Home} />
                <Route path={'/funcionarios'} exact component={Funcionarios} />
                <Route path={'/funcionario/create'} component={Createfuncionario} />
                <Route path={'/funcionario/edit'} component={Editarfuncionario} />
			    <Route path={'/equipes'} exact component={Equipe}/>
                <Route path={'/equipe/create'} component={CreateEquipe} />
                <Route path={'/equipe/edit'} component={EditarEquipe} />
                <Route path={'/clientes'} exact component={Clientes} />
                <Route path={'/cliente/create'} component={CreateCliente} />
                <Route path={'/cliente/edit'} component={EditarCliente} />
                <Route path={'/produtos'} exact component={produtos} />
                <Route path={'/produto/create'} />
                <Route path={'/produto/edit'} component={EditarProduto} />
            </Switch>
        </BrowserRouter>
    );
}



