import HeadlineTag from "./nav";
import Introductions from "./part";

const WebsiteNavBar = () => {
    return (
        <div className="w-full bg-black min-h-[0vh] lg:min-h-[195vh] pt-16 pb-12">
            <HeadlineTag />
            <Introductions />
        </div>
    )
};

export default WebsiteNavBar;