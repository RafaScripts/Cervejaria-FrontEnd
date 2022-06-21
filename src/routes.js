import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Funcionarios from "./pages/funcionarios";
import Createfuncionario from "./pages/createFuncionario";
import Editarfuncionario from "./pages/editarFuncionario";
import Equipe from "./pages/equipe";
import CreateEquipe from "./pages/createEquipe";
import EditarEquipe from "./pages/editarEquipe";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Funcionarios} />
                <Route path={'/funcionario/create'} component={Createfuncionario} />
                <Route path={'/funcionario/edit'} component={Editarfuncionario} />
			<Route path={'/equipe'} exact component={Equipe}/>
                <Route path={'/equipe/create'} component={CreateEquipe} />
                <Route path={'/equipe/edit'} component={EditarEquipe} />
            </Switch>
        </BrowserRouter>
    );
}



