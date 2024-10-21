export function SocialMediaForm() {
  return (
    <form>
      <label htmlFor="linkedin">Linkedin</label>
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        title="Digite a url do seu perfil no Linkedin"
      />
      <label htmlFor="github">Github</label>
      <input
        type="url"
        id="github"
        name="github"
        title="Digite a url do seu perfil no Github"
      />

      <button>Anterior</button>
      <button>Próximo</button>
    </form>
  );
}
