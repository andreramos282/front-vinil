import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Home.page";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router