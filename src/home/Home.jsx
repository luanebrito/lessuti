
const LessutiWebsite = () => {
  return (
    <div className="font-serif text-gray-800 max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <img src="./Logo.jpg" alt="Lessuti logo" className="mx-auto" />
        <p className="text-xl">Modelagem, Costura e Bordado</p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-300 pb-2 mb-6">Curso de Modelagem e Costura</h2>
          <div className="mb-6">
            <img src="/api/placeholder/600/400" alt="Alunos trabalhando em projetos de costura" className="w-full rounded-lg shadow-md" />
          </div>
          <p className="mb-4">O curso começa com dois módulos:</p>

          <h3 className="text-2xl font-semibold mb-3">Módulo I</h3>
          <p className="mb-4">Você aprenderá os pontos iniciais para desenvolver suas habilidades de modelagem e costura. Mesmo que já saiba costurar, é importante realizar esse módulo, pois você aprenderá o nosso método de costura e modelagem.</p>
          <p className="mb-2">Você vai fazer:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Capa de almofada</li>
            <li>Porta-tesoura ou alicate</li>
            <li>Necessaire com zíper</li>
            <li>Bolsa livre</li>
          </ul>
          <div className="mb-6">
            <img src="/api/placeholder/400/300" alt="Exemplos de projetos do Módulo I" className="w-full rounded-lg shadow-md" />
          </div>

          <h3 className="text-2xl font-semibold mb-3">Módulo II</h3>
          <p className="mb-4">Iniciamos a confecção de roupas.</p>
          <p className="mb-2">Você vai fazer:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Saia reta com zíper invisível</li>
            <li>Saia godê</li>
            <li>Blusa básica sem manga</li>
            <li>Vestido reto sem manga</li>
            <li>Vestido evasê</li>
            <li>Blusa com manga</li>
            <li>Calça reta</li>
          </ul>
          <div className="mb-6">
            <img src="/api/placeholder/400/300" alt="Exemplos de roupas confeccionadas no Módulo II" className="w-full rounded-lg shadow-md" />
          </div>
          <p>Conforme o seu desenvolvimento, vamos adicionando mais modelos ao seu portfólio.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-300 pb-2 mb-6">Professora Luane</h2>
          <div className="flex flex-row-reverse gap-4">
          <div className="mb-6">
            <img src="./FotoLuane.png" alt="fotoprofessoraluane" className="w-full max-w-xs mx-auto rounded-lg shadow-md" />
          </div><div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold mb-3">Qualificações e Cursos:</h3>
          <ul className="list-disc pl-6">
            <li>Modelagem de noivas - Istituto di Moda Burgo, Milão</li>
            <li>Modelagem e costura de roupa infantil - Istituto di Moda Burgo, Milão</li>
            <li>Bordado Luneville - Lesage, Paris</li>
            <li>Bordado Alta Moda - Escola de Bordado Alta Moda, Roma</li>
            <li>Costura à mão Fashion - Universidade de Artes, Londres</li>
            <li>Modelagem (2,5 anos) - Senac, São Paulo</li>
            <li>Modelagem técnica - Shingo Sato</li>
            <li>Consultoria de Imagem - Ana Vaz e professores convidados</li>
            <li>Corte e Costura - Escola de Costura Ana Maria, Campinas-SP</li>
          </ul>
          <div className="flex justify-between w-full px-4">
            <img src="./br.png"/>
            <img src="./france.png"/>
            <img src="./italy.png"/>
            <img src="./mexico.png"/>
            <img src="./uk.png"/>
            <img src="./us.png"/>
            </div>
          </div></div>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Informações</h2>
          <p><strong>Início:</strong> 20/08</p>
          <p><strong>Horário:</strong> Terças-feiras, 13:00-16:00</p>
          <p><strong>Turmas:</strong> As aulas são em grupo, com no máximo 4 alunos e respeitamos o seu ritmo!</p>
          <p><strong>Mensalidade:</strong> R$450,00</p>
          <p><strong>Material Básico:</strong> Incluso</p>
          <p><strong>Contato:</strong> 67 998429603</p>
          <p><strong>Cidade:</strong> Dourados MS</p>
        </section>
      </main>
    </div>
  );
};



export const Home = () => (
  <LessutiWebsite />);