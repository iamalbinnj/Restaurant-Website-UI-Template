import CardCarousel from "../CardCarousel/CardCarousel";

export default function Dishes() {
    return (
        <div className="container max-w-screen-2xl mx-auto xl:px-24 my-20">
            <div className="text-left">
                <p className="small-heading">Special Dishes</p>
                <h2 className="main-heading md:w-[500px]">Standout Dishes From Our Menu</h2>
            </div>
            <CardCarousel />
        </div>
    )
}