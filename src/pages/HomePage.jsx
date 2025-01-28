import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

function HomePage() {
    const slides = [
        { url: "http://localhost:3000/img-inception.jpg", title: "inception" },
        { url: "http://localhost:3000/img-interstellar.jpg", title: "interstellar" },
        { url: "http://localhost:3000/img-the_godfather.jpg", title: "the_godfather" },
        { url: "http://localhost:3000/img-matrix.jpg", title: "matrix" },
        { url: "http://localhost:3000/img-titanic.jpg", title: "titanic" },
    ]

    return (
        <>
            <section>
                <h1>Welcome</h1>
                <div>
                    {/* provides slides array as props */}
                    <ImageSlider slided={slides} />
                    <Link to={"/movies"} className="btn" >Search for Movies</Link>
                </div>

            </section>
        </>
    )
}

export default HomePage;