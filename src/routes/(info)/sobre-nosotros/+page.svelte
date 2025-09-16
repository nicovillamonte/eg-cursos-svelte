<h1>Sobre nosotros</h1>

<section>

  <div class="img-big">
    <img
        src="https://lh3.googleusercontent.com/Q3O8HkIoZfu0puyRZcJ6esUqLyVFzH4gI2lLOjxGllLHTdpRT0WE9V5k4TusgPcFCmyCgBoW05ivPk5yX5Og-PSmN7hAiMIUkykkYE9aheUwhn-k3C2XMgvVWh8BvGte8ARU4zEbE2uMatapasQ9IEBegL0ROMf4WSC7qvnsHjkFWIdozKLh7A=w1280"
        alt="img2"
      />
  </div>

  <article class="about-us">
    <p>
      Nos apasiona la tecnología, la docencia, los asados (y las comidas en general), honrar la
      amistad y respetar a las personas...
    </p>
    <p>
      De izquierda a derecha: Juli, Juan, Rodri, Guille. Sentados: Nico Villamonte, Jorgito y Fer.
      Nico Viotti no salió en la foto pero está, siempre está.
    </p>
  </article>

  <img
  class="img-small"
  src="https://lh5.googleusercontent.com/C8i067-RODwE4jwz98eAmgQYaQHIox-AlloNu6ZOGKsXOj-FD6G82rKwzaKaHfGTyQZtx8gUsTty26ctTS-s8p_mUNkfifPqQ7AycN9imIolJiYmOIFxqu6wVDEd3LRY0X6HZ0bJCOFJbnCKIiar3Ru6vyXcbCJNDqqI65gq_H6hdmmPlMvlzw=w1280"
  alt="img1"
/>
</section>

<style>

  h1 {
    text-align: center;
    margin-top: 1rem;
    font-size: 2.5rem;
    color: #333;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 3fr;
    gap: 1rem;
    padding: 0 10rem;
  }

  .img-big {
    grid-column: 1;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .about-us {
    grid-column: 2;
    grid-row: 1;
  }

  .img-small {
    grid-column: 2;
    grid-row: 2 / 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>