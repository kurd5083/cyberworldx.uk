import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PrivacyPolicy from '../pages/Policy/PrivacyPolicy';
import RefundPolicy from '../pages/Policy/RefundPolicy';
import ShippingPolicy from '../pages/Policy/ShippingPolicy';
import TermsService from '../pages/Policy/TermsService';
import PaymentPolicy from '../pages/Policy/PaymentPolicy';
import MainLayout from "../layouts/MainLayout";
import GameInfo from "../pages/GameInfo/GameInfo";
import Contacts from '../pages/Contacts/Contacts';
import Cart from '../pages/Cart/Cart';
import About from '../pages/About/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/games/game/:id', element: <GameInfo /> },
      { path: '/cart', element: <Cart /> },
      { path: '/terms_service', element: <TermsService /> },
      { path: '/privacy_policy', element: <PrivacyPolicy /> },
      { path: '/refund_policy', element: <RefundPolicy /> },
      { path: '/shipping_policy', element: <ShippingPolicy /> },
      { path: '/about', element: <About /> },
      { path: '/payment_policy', element: <PaymentPolicy /> },
      { path: '/contacts', element: <Contacts /> },
    ],
  }
], {
  future: {
    v7_startTransition: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
    v7_relativeSplatPath: true,
    v7_partialHydration: true,
    v7_fetcherPersist: true
  }
});