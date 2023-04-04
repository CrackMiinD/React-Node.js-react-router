import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import App from './App'
import NotFound from "./shared/NotFound";
import Login from "./pages/Login/Login"
import { Product } from "./pages/products/Product";
import { ProductView } from "./pages/products/ProductView";
import { Transactions } from "./pages/transactionHistory/transaction";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Nesting routes => Here the things in app will appear in all pages
        children: [
            {
                path:"/transaction",
                element: <Transactions />,
            }
            ,
            {
                path:"/productView",
                element: <ProductView />,
            }
            ,
            {
                path:"/product",
                element: <Product />,
            }
            ,
            {
                path:"/",
                element: <Login />,
            }
            ,
            
           
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
        ]
    },
    {
        // WILD CARD ROUTE => The route that will appear to user if he write any
        // other text in the url
        path: '*',
        element: <NotFound />,
    }

]);