export function ContactForm() {
  return (
    <form>
      <div>
        <h2 className="text-2xl font-bold text-slate-80 mb-2">Contato</h2>
        <p className="text-lg text-neutral-500">
          Por favor, preencha suas informações para contato.
        </p>
      </div>

      <label htmlFor="name">Nome completo</label>
      <input type="text" id="name" name="name" title="Nome completo" />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" title="E-mail" />
      <label htmlFor="phone">Telefone</label>
      <input type="tel" id="phone" name="phone" title="Telefone" />

      <button>Anterior</button>
      <button>Próximo</button>
    </form>
  );
}
