import FooterPart from "@/FooterPage/FooterPart";
import VideoPlayOverlay from "./iconAroundTheWorld";
import OurTrader from "./Trade/OurTrader";
import WhyPickIndices from "./whyFunded";

const AllUsers = () => {
    return (
        <div className="  bg-[rgb(16,10,40)] pt-10  ">
            <VideoPlayOverlay />

            <WhyPickIndices />

            <OurTrader />

            <FooterPart />
        </div>
    )
};

export default AllUsers