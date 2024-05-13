import { useState } from "react"

const Contact = () => {

  const [intitutional, setIntitutional] = useState(false);

  return (
    <section className={"w-full px-16 py-32 align-middle place-content-evenly text-primary font-open"} >
      <div className="flex flex-row justify-evenly items-center">
        <div className="w-2/5">
          <h1 className="text-3xl font-bold my-4">Contacto</h1>
          <p className="my-4">¿Tienes alguna propuesta institucional? ¿Algúna duda con respecto a compras? ¿Algún comentario o sugerencia? Estamos disponibles para escucharle atentamente.</p>
          <ul className="my-4">
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="envelope" />samuelcastro@eltrolley.com</li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="phone" type="solid" />(+57) 320-6348134</li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="world" />Bogotá, Colombia</li>

          </ul>
        </div>
          <form>
            {/* Tipo de Consulta */}
            <h5 className="text-xl font-bold">Tu consulta es:</h5>
            <div className="my-4 form-control flex flex-row gap-4">
              <input type="radio" name="radio-10" aria-label="Personal" className="btn" onClick={()=> setIntitutional(false)}/>
              <input type="radio" name="radio-10" aria-label="Institucional" className="btn" onClick={()=> setIntitutional(true)}/>
            </div>
            { intitutional && <p className="transition-all text-secondary">Recuerda que el mínimo de compra son 50 unidades</p> }
            {/* Nombre y Apellido */}
            <label className="form-control w-auto">
              <div className="label">
                <span className="label-text">Nombre y Apellido</span>
              </div>
              <input type="text" className="input input-bordered w-full" />
            </label>
            <div className="flex flex-row">
              {/* Email */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input type="mail" placeholder="tumail@mail.com" className="input input-bordered w-full max-w-xs" />
              </label>
              {/* Telefono */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Teléfono</span>
                </div>
                <input type="tel" placeholder="(+11) 111-111-1111" className="input input-bordered w-full max-w-xs" />
              </label>
            </div>
            {/* Especificaciones */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Especificaciones</span>
              </div>
              <textarea className="textarea textarea-bordered min-h-36 max-h-36" placeholder="Mi consulta es..."></textarea>
            </label>
            <input type="submit" value="Enviar" className="btn btn-primary w-full" />
          </form>
      </div>
    </section>
  )
}

export default Contact