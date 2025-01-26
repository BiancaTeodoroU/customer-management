import { useQuery } from "@tanstack/react-query"

export function About() {
  const { data, isFetching } = useQuery({ queryKey: ["version-app"], queryFn: async () => {
    const response = await window.api.getVersionApp();
    return response
  }})
  return (
    <div className="flex-1 flex flex-col py-12 px-10 text-white">
      <h1 className="text-white text-x1 lg:text-3x1 font-semibold mb-4">
        Página Sobre o projeto!!!
      </h1>

      <p>Projeto criado no curso <b>@sujeitoprogramador</b></p>
      <p>Versão do projeto: {!isFetching && data && data}</p>
    </div>
  )
}