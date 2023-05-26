import { Fade } from "react-awesome-reveal"

const HeroSection = () => {
  return (
    <>
    <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/src/assets/img/hero-img.svg" alt="" className="object-contain sm:h-72 md:ml-16 md:w-100 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Emprende
				<span className=" text-orange-600">Now</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Emprende al siguiente nivel junto a nosotros
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 mb-5 sm:space-x-4 lg:justify-start">
				<Fade className="flex flex-col ">
				<a rel="noopener noreferrer" href="https://github.com/Sebastianidm" className="px-8 py-3  text-lg font-semibold rounded mb-2 bg-orange-600 text-gray-900">Siguenos</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3  text-lg font-semibold  border rounded border-gray-100 mb-2">Contáctanos</a>
				</Fade>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default HeroSection