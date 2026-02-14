import Container from "@/components/shared/Container";

export default function HomePage() {
  return (
    <main>
      <section className="bg-brand-light py-20">
       <Container>
         <h1 className="text-brand-primary text-4xl font-semibold">
          Welcome to Islam Web App
        </h1>

        <button className="mt-6 bg-brand-secondary text-white px-6 py-3 rounded-lg">
          Explore
        </button>
       </Container>
      </section>
    </main>
  );
}
