import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const CategoryCoffeeCards = () => {
    const { categoryName } = useParams();
    const coffeeCards = useLoaderData();
    const [categoryCoffeeCards, setCategoryCoffeeCards] = useState([]);
    useEffect(() => {
        const newCategoryCoffeeCards = [...coffeeCards].filter((coffeeCard)=>coffeeCard.category===categoryName);
        setCategoryCoffeeCards(newCategoryCoffeeCards)
    }, [categoryName, coffeeCards])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                categoryCoffeeCards.map((coffeeCard)=><CoffeeCard key={coffeeCard.id} coffeeCard={coffeeCard}>

                </CoffeeCard>)
            }
        </div>
    );
};

export default CategoryCoffeeCards;