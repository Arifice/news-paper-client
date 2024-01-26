import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center  shadow-2xl">
            <div>
                <button className="btn btn-lg lg:w-44 btn-warning">Breaking News</button>
            </div>
            <Marquee speed={150} pauseOnHover={true}>
                <h1 className="text-red-600 space-x-10 text-2xl bg-base-100 font-bold">
                ***<span > Ukraine war latest: Kyiv shot down PoW plane, Putin claims in first remarks on crash</span> 
                ***<span>IRCC announces cap on admissions for international students</span>
                ***<span>Middle East latest: ICJ rules Israel will face genocide investigation; UN staff sacked over Israeli claims they took part in ...</span>
                ***<span>Pakistan: Decision on forced returns of Afghan refugees must be reversed immediately</span>
                
                ***</h1>

            </Marquee>
        </div>
    );
};

export default BreakingNews;