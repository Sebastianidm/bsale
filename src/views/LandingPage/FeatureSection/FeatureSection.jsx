import { Fade } from "react-awesome-reveal";

const FeatureSection = () => {
  return (
    <>
    <div className="h-100 flex flex-col flex-wrap my-5 mx-5 lg:my-32 lg:grid lg:grid-cols-2 lg:gap-2 lg:mx-40  ">
        <section className=" my-10 md:mr-5">
          <img src="/src/assets/img/feature-section.png" alt="feature-img" className="feature-img "/>
        </section>
        <section className=" text-center text-xl my-10 md:text-left md:text-lg text-black ml-5">
          <Fade cascade>
          <p className="md:mt-5">EmprendeNow es una plataforma web diseñada especialmente para ayudar a emprendedores en su viaje empresarial. Nuestro objetivo es proporcionar una base sólida para que los emprendedores puedan vender sus productos, encontrar proveedores confiables y recibir el impulso necesario para hacer crecer sus nuevos emprendimientos.</p>
          <br />
          <p className="md:mt-5">En EmprendeNow, entendemos los desafíos que enfrentan los emprendedores en el proceso de lanzar y hacer crecer sus negocios. Por eso, hemos creado una plataforma integral que ofrece una amplia gama de servicios y recursos para apoyarlos en todas las etapas de su trayectoria emprendedora.</p>
          </Fade>
        </section>
        
    </div>
    </>
  )
}

export default FeatureSection