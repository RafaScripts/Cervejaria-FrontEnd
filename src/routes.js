import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Funcionarios from "./pages/funcionarios";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Funcionarios} />
            </Switch>
        </BrowserRouter>
    );
}