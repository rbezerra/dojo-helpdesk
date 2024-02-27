import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        alias quasi et sed tenetur dolorum. Voluptatum modi id nihil minus, vero
        nemo nesciunt quo? Itaque, quos! Minima voluptatibus placeat dolor!
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          amet, at, nam libero illo assumenda odit accusantium eos corrupti
          obcaecati quaerat quisquam atque facilis reiciendis, deserunt est
          possimus vero voluptatibus.
        </p>
      </div>
      <div className="card">
        <h3>New website live!!!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          amet, at, nam libero illo assumenda odit accusantium eos corrupti
          obcaecati quaerat quisquam atque facilis reiciendis, deserunt est
          possimus vero voluptatibus.
        </p>
      </div>
    </main>
  );
}
