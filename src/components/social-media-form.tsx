export function SocialMediaForm() {
  return (
    <form className="grid grid-cols-2 grid-rows-[auto, auto, auto] gap-7">
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

      <div className="col-span-2 flex justify-between items-center mt-4">
        <button className="text-lg text-indigo-600 border border-indigo-600  hover:text-white hover:bg-indigo-600 transition-all duration-200 px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer">
          Anterior
        </button>
        <button className="text-lg text-white bg-indigo-600 hover:bg-indigo-800 transition-all duration-200 border px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer">
          Próximo
        </button>
      </div>
    </form>
  );
}
