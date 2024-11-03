import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
    const coffeeCards = useLoaderData();
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffeeCards.slice(0, 6).map(coffeeCard => <CoffeeCard key={coffeeCard.id} coffeeCard={coffeeCard}></CoffeeCard>)
                }
            </div>
            <div className="mt-10">
              <Link className="btn btn-warning" to="/coffees">Show All Coffees</Link>
            </div>
        </div>
    );
};

export default CoffeeCards;