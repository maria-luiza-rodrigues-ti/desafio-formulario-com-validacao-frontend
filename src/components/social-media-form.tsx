export function SocialMediaForm() {
  return (
    <form className="grid grid-cols-2 grid-rows-3 gap-7">
      <div className="col-span-2">
        <label
          htmlFor="linkedin"
          className="font-medium text-lg text-slate-800 block mb-5"
        >
          Linkedin
        </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          title="Digite a url do seu perfil no Linkedin"
          className="shadow-input rounded-[2.875rem] p-5 w-full"
        />
      </div>

      <div className="col-span-2">
        <label
          htmlFor="github"
          className="font-medium text-lg text-slate-800 block mb-5"
        >
          Github
        </label>
        <input
          type="url"
          id="github"
          name="github"
          title="Digite a url do seu perfil no Github"
          className="shadow-input rounded-[2.875rem] p-5 w-full"
        />
      </div>

      <div className="col-span-2 flex justify-between items-center">
        <button className="text-lg text-indigo-600 border border-indigo-600  hover:text-white hover:bg-indigo-600 transition-all duration-200 px-10 py-5 rounded-full cursor-pointer">
          Anterior
        </button>
        <button className="text-lg text-white bg-indigo-600 hover:bg-indigo-800 transition-all duration-200 border px-10 py-5 rounded-full cursor-pointer">
          Próximo
        </button>
      </div>
    </form>
  );
}
