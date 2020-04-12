import * as React from "react";
import {
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import './app.pcss'
import routes from './routes2';
import StickyFooter from "./components/StickyFooter";

export default function App() {
    const myRef = React.createRef<any>();
    return (
        <div>
            <BrowserRouter>
                <div id="router-wrapper" ref={myRef}>

                    {routes.map((route, index) => <Link key={index} to={route.path} >{route.label}</Link>)}

                    <Switch>
                        {routes.map((route, index) => <Route key={index} exact path={route.path} component={route.component} />)}
                    </Switch>
                </div>
                <StickyFooter main={myRef} children={<div>here's sticky footer</div>}></StickyFooter>
            </BrowserRouter>
        </div>

    );
}
