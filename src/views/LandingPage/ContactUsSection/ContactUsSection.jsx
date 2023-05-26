

const ContactUsSection = () => {
  return (
    <>
    <div className="h-100 ">
    <section className="bg-gray-800 text-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        Únete a la comunidad EmprendeNow y comienza tu viaje hacia el éxito empresarial. Rellena el formulario a continuación para formar parte de nuestra vibrante comunidad de emprendedores. Estaremos encantados de ponernos en contacto contigo y ofrecerte nuestro apoyo personalizado.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-orange-600">
            0151 000 0000
          </a>

          <address className="mt-2 not-italic">
            Viña del mar, Chile
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name"></label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nombre"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Correo Electronico</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Correo Electronico"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Numero telefonico</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Numero telefonico"
                type="tel"
                id="phone"
              />
            </div>
          </div>

         

          <div>
            <label className="sr-only" for="message">Mensaje</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Mensaje"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Enviar formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        
    </div>
    </>
  )
}

export default ContactUsSection