import { useState } from "react"

const Contact = () => {

  const [intitutional, setIntitutional] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataEntries = event.target.elements;
    const data = {
      type: dataEntries.type.value,
      name: dataEntries.name.value,
      mail: dataEntries.mail.value,
      phone: dataEntries.phone.value,
      description: dataEntries.description.value
    };
    console.log(data);
  };

  return (
    <section className={"w-full lg:px-16 px-8 py-32 align-middle place-content-evenly text-primary font-open"} >
      <div className="flex lg:flex-row flex-col justify-evenly items-center">
        <div className="lg:w-2/5 w-full">
          <h1 className="text-3xl font-bold my-4 lg:text-left text-center">Contacto</h1>
          <p className="my-4 lg:text-left text-center">¿Tienes alguna propuesta institucional? ¿Algúna duda con respecto a compras? ¿Algún comentario o sugerencia? Estamos disponibles para escucharle atentamente.</p>
          <ul className="my-4 flex flex-col lg:items-start items-center">
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="envelope" color="#CE1126"/>samuelcastro@eltrolley.com</li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="phone" type="solid" color="#CE1126"/>(+57) 320-6348134</li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="world" color="#CE1126"/>Bogotá, Colombia</li>

          </ul>
        </div>
          <form className="lg:w-auto w-full" onSubmit={handleSubmit}>
            {/* Tipo de Consulta */}
            <h5 className="text-xl font-bold lg:text-start text-center">Tu consulta es:</h5>
            <div className="my-4 form-control flex flex-row gap-4 lg:justify-normal justify-center">
              <input type="radio" name="type" value='personal' aria-label="Personal" className="btn" onClick={()=> setIntitutional(false)}/>
              <input type="radio" name="type" value='institucional' aria-label="Institucional" className="btn" onClick={()=> setIntitutional(true)}/>
            </div>
            { intitutional && <p className="mb-4 transition-all text-secondary text-sm text-center">Recuerda que el mínimo de compra son 50 unidades</p> }
            {/* Nombre y Apellido */}
            <label className="form-control w-auto">
              <div className="label">
                <span className="label-text">Nombre y Apellido</span>
              </div>
              <input type="text" placeholder="Tu nombre y apellido" name="name" className="input input-bordered w-full" />
            </label>
            <div className="flex lg:flex-row flex-col">
              {/* Email */}
              <label className="form-control w-full lg:max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input type="mail" placeholder="tumail@mail.com" name="mail" className="input input-bordered w-full lg:max-w-xs max-w-full" />
              </label>
              {/* Telefono */}
              <label className="form-control w-full lg:max-w-xs">
                <div className="label">
                  <span className="label-text">Teléfono</span>
                </div>
                <input type="tel" placeholder="(+11) 111-111-1111" name="phone" className="input input-bordered w-full lg:max-w-xs max-w-full" />
              </label>
            </div>
            {/* Especificaciones */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Especificaciones</span>
              </div>
              <textarea name="description" className="textarea textarea-bordered min-h-36 max-h-36" placeholder="Mi consulta es..."></textarea>
            </label>
            <input type="submit" value="Enviar" className="btn btn-primary w-full mt-4" />
          </form>
      </div>
    </section>
  )
}

export default Contact