// Cada projeto novo que construirmos entra nesta lista.
// Enquanto a lista estiver vazia, o site mostra a mensagem "em construção".

export type Project = {
  title: string
  description: string
  stack: string[]
  repo?: string // link do GitHub
  demo?: string // link do deploy / documentação da API
  highlights?: string[] // pontos técnicos que valem destacar
}

export const projects: Project[] = [
  // Exemplo:
  // {
  //   title: 'API de Gestão de Tarefas',
  //   description: 'API REST com autenticação JWT, testes e documentação Swagger.',
  //   stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  //   repo: 'https://github.com/SEU-USUARIO/task-api',
  //   highlights: ['Arquitetura em camadas', 'Testes de integração', 'CI no GitHub Actions'],
  // },
]
