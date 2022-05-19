import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Funcionarios from "./pages/funcionarios";
import Createfuncionario from "./pages/createFuncionario";
import Editarfuncionario from "./pages/editarFuncionario";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Funcionarios} />
                <Route path={'/funcionario/create'} component={Createfuncionario} />
                <Route path={'/funcionario/edit'} component={Editarfuncionario} />
            </Switch>
        </BrowserRouter>
    );
}