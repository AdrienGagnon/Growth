import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Video from "./Video";

function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Video />
				<Testimonials />
				<Pricing />
				<FAQ />
				<Footer />
			</main>
		</>
	);
}

export default Home;
