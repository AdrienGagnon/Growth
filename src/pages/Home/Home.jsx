function Home() {
	return (
		<>
			<header>
				<div class="header__logo">
					Growth
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="17"
						height="13"
						viewBox="0 0 17 13"
						fill="none"
					>
						<path
							d="M3.41743 9.57748L13.776 2.99977"
							stroke="#4891FF"
							stroke-width="6"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<nav>
					<a href="#">Features</a>
					<a href="#">About us</a>
					<a href="#">Blog</a>
				</nav>
				<button>Log in</button>
			</header>
			<main>
				<div class="hero">
					<div class="hero__title">
						<h1>A powerful solution to grow your startup. Fast!</h1>
						<p>
							Organise, collaborate, and track progress seamlessly
							with our one-stop-shop startup growth tool.
						</p>
					</div>
					<div class="hero__btns">
						<button>Get started</button>
						<button>Book a demo</button>
					</div>
				</div>
				<div class="hero__images">
					<div class="hero__images__team">
						<div class="team__title">
							<h2>Team Capodopera</h2>
							<p>
								Grow the number of clients and reach the
								1000/day sales.
							</p>
							<span></span>
							<div>
								<img src="" alt="" />
							</div>
						</div>
					</div>
					<div class="hero__images__chart"></div>
					<div class="hero__images__call"></div>
				</div>
			</main>
		</>
	);
}

export default Home;
