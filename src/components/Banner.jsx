
import bannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="my-10 ">
            <img className="rounded-xl h-[600px] object-cover w-full" src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;