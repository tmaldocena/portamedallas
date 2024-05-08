import Card from "../Card"

const Populars = () => {
  return (
    <section className="py-12 font-open">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-primary">Los más populares</h2>
        <p className="text-center">Conoce nuestros productos más vendidos</p>
      </div>
      <div className="flex xl:flex-row flex-col gap-4 xl:px-16 px-6">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </section>
  )
}

export default Populars