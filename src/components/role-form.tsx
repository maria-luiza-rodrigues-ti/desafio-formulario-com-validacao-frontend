export function RoleForm() {
  return (
    <form>
      <label htmlFor="role">Cargo pretendido</label>
      <select name="role" id="role" title="Selecione o cargo pretendido">
        <option value="">Selecione</option>
        <option value="front-end-developer">Desenvolvedor Front-end</option>
        <option value="back-end-developer">Desenvolvedor Back-end</option>
        <option value="full-stack-developer">Desenvolvedor Full-stack</option>
        <option value="mobile-developer">Desenvolvedor Mobile</option>
        <option value="software-developer">Desenvolvedor de Software</option>
        <option value="software-engineer">Engenheiro de Software</option>
        <option value="software-architect">Arquiteto de Software</option>
        <option value="ux-ui-designer">UX/UI Designer</option>
        <option value="system-analyst">Analista de Sistemas</option>
        <option value="programmer-analyst">Analista Programador</option>
        <option value="devops-engineer">DevOps Engineer</option>
        <option value="data-engineer">Engenheiro de Dados</option>
        <option value="qa-engineer">QA Engineer</option>
        <option value="scrum-master">Scrum Master</option>
        <option value="product-owner">Product Owner</option>
      </select>

      <button>Anterior</button>
      <button>Próximo</button>
    </form>
  );
}
