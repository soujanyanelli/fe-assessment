import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import data from "../../resources/data/data.json";

const Home = () => {
    const { article, cart, favorites } = data;
    return(
        <>
        <Header cart={cart}></Header>
        <ProductCard article={article}></ProductCard>
        </>
    )
}

export default Home