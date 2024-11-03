/* eslint-disable react/prop-types */


const CoffeeCard = ({ coffeeCard }) => {
    const { name, image, category, origin, popularity, rating, type, description } = coffeeCard;
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure className="pt-7">
                <img className="h-[250px] object-cover rounded-xl "
                    src={image}
                    alt="coffee" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col gap-1 mb-5">
                    <h2 className="card-title">{name}</h2>
                    <p className="">{description}</p>
                    <p> <span className="text-base font-semibold mr-5">Origin:</span> {origin}</p>
                    <p><span className="text-base font-semibold mr-5">Popularity:</span> {popularity}</p>
                    <p><span className="text-base font-semibold mr-5">Rating:</span> {rating}</p>
                </div>

                <button className="btn btn-primary w-full">Buy Now</button>

            </div>
        </div>
    );
};

export default CoffeeCard;