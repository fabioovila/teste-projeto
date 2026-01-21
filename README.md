# 🔖 Save For Later - Extensão para o Chrome

Um gerenciador de links minimalista inspirado na função "Assistir mais tarde" do YouTube, desenvolvido como projeto de conclusão para o **CS50x, curso online de Harvard**.

---

### 🔍 Como instalar localmente:
1. Faça o download deste repositório.
2. Abra o Chrome e acesse `chrome://extensions/`.
3. Ative o **"Modo do desenvolvedor"** no canto superior direito.
4. Clique em **"Carregar sem compactação"** e selecione a pasta do projeto.
## 💡 Inspiração
Muitas pessoas utilizam a barra de favoritos do Chrome para salvar páginas que pretendem ler apenas uma vez, o que acaba poluindo a organização do navegador. Este projeto resolve esse problema oferecendo um espaço temporário e dedicado para links que você deseja acessar depois.

---

## 🚀 Funcionalidades
* **Salvar com um clique:** Captura automaticamente o título e a URL da aba ativa.
* **Persistência Local:** Os links são salvos no armazenamento local do navegador.
* **Exclusão Individual:** Remova links específicos após a leitura.
* **Limpeza Total:** Opção de deletar toda a lista de uma só vez (via clique duplo para segurança).
* **Design Harvard-inspired:** Estilização baseada na paleta de cores da universidade.

---

## 🛠️ Estrutura do Projeto

* `manifest.json`: Arquivo de metadados essencial que define as permissões e configurações da extensão.
* `index.html`: A estrutura visual do popup da extensão.
* `styles.css`: Contém toda a personalização visual e layout.
* `script.js`: O "cérebro" do projeto, contendo:
    * **Event Listeners:** Gerenciam os cliques nos botões de salvar e deletar.
    * **Render:** Uma função dinâmica que reconstrói a lista visual sempre que um link é adicionado ou removido.

---

## 🎨 Escolhas de Design
Durante o desenvolvimento, percebi que apenas salvar não era suficiente. A experiência do usuário (UX) exigia uma forma de gerenciar o conteúdo:
1.  **Botão Delete Individual:** Adicionado para permitir que o usuário limpe a lista conforme termina suas leituras.
2.  **Botão Delete Universal:** Implementado para facilitar a limpeza total, economizando cliques.
3.  **Segurança:** O botão de apagar tudo exige um **clique duplo**, evitando que o usuário perca seus links por acidente.

---

## 🧠 Aprendizado e Desafios
Este projeto foi um marco importante na minha jornada de programação. Antes do CS50, minha experiência com HTML e JavaScript era limitada. 
* **Superação:** Enfrentei dificuldades iniciais com manipulação de DOM e lógica assíncrona, mas através da documentação do Chrome e tutoriais, consegui implementar as funcionalidades desejadas e entender melhor como funciona a programação Web em HTML, CSS e JavaScript.
* **Próximos Passos:** Com a base sólida do CS50, meu próximo objetivo é cursar o *CS50's Web Programming with Python and JavaScript*, me preparar para a disciplina de programação web na minha universidade e desenvolver mais projetos para alimentar meu Github.

