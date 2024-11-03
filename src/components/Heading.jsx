/* eslint-disable react/prop-types */


const Heading = ({title,subtitle}) => {
    return (
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <p className="">{subtitle}</p>
        </div>
    );
};

export default Heading;