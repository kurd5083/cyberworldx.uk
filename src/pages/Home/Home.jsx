import styles from "./Home.module.scss";
import Offer from "../../components/Offer/Offer";
import Reviews from "../../components/Reviews/Reviews";
import Navigate from "../../components/Navigate/Navigate";
import CategoryProductsList from "../../components/CategoryProductsList/CategoryProductsList";

const categories = [
  { key: "new", title: "NEW ARRIVALS" },
  { key: "preorder", title: "PRE-ORDER COLLECTION" },
  { key: "unboxed", title: "UNBOXED SECTION" }
];

const Home = () => {


  return (
    <div>
      <Navigate />
      <Offer />
      <CategoryProductsList categories={categories} />
      <Reviews />
    </div>
  );
};

export default Home;