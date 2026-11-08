// Edite aqui suas informações pessoais. Tudo no site é lido deste arquivo.

export const profile = {
  name: 'Victor Matheus',
  photo: '/foto.webp', // arquivo em /public
  role: 'Desenvolvedor Back-end',
  headline:
    'Desenvolvo APIs e sistemas utilizando Node.js, TypeScript e PostgreSQL, buscando escrever código organizado, eficiente e fácil de manter.',
  location: 'Brasil',
  status: 'Disponível para estágio / primeiro emprego',
  about: [
    'Sou estudante de Engenharia de Software, atualmente no 6º semestre, e meu foco é desenvolvimento back-end. Gosto de entender como os sistemas funcionam por baixo: modelagem de dados, regras de negócio, APIs e integrações.',
    'Também transito pelo full-stack, consumindo as APIs que construo em interfaces com React. Estou em busca da minha primeira oportunidade profissional para crescer em um time e entregar software de qualidade.',
  ],
  links: {
    email: 'victormtdev@gmail.com',
    github: 'https://github.com/VictormtDev',
    linkedin: 'https://www.linkedin.com/in/victormtdev/',
    cv: '', // ex.: '/curriculo.pdf' (coloque o arquivo em /public)
  },
}

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Back-end', items: ['Node.js', 'TypeScript', 'APIs REST'] },
  { title: 'Banco de dados', items: ['PostgreSQL', 'SQL'] },
  { title: 'Front-end', items: ['React'] },
  { title: 'Ferramentas', items: ['Git', 'GitHub'] },
]
