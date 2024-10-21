import { ContactForm } from "./components/contact-form";

export function App() {
  return (
    <main className="bg-tone-200 max-w-[70%] mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-3">
        Cadastro membros
      </h1>
      <p className="text-lg text-center text-neutral-500 mb-11 max-w-xl mx-auto">
        Por favor, preencha o formulário abaixo para se cadastrar como membro do
        projeto Frontend Fusion.
      </p>

      <section className="shadow-container rounded-[34px] p-9">
        <div>
          <span>1</span>
          <span></span>
          <span>2</span>
          <span>3</span>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
