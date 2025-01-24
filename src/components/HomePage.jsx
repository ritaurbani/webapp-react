import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <section>
                <h1>Welcome</h1>
                <p>Write a review here</p>
                <Link to={"/movies"} className="btn" >Search for Movies</Link>
            </section>
        </>
    )
}

export default HomePage;