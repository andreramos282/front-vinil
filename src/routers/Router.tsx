import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import HomePage fr../pages/Home.pageHome";
import NotFound from "../pages/NotFound";

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