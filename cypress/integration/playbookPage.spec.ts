describe('Funcionalidade: Acesso e manipulação do Playbook na Growth Station', () => {
    it('Cenário: Acesso de um usuário administrador', () => {
      // Dado que o usuário é um administrador
      // E que esteja na página de login da Growth Station
      cy.visit('https://client.stg.growthstation.app/login')
  
      // E preencha o campo de email com um email válido
      cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
  
      // E preencha o campo de senha com uma senha válida
      cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
  
      // E clique no botão de entrar
      cy.contains('button', 'Entrar').click()
  
      // Quando ele acessar a página do Playbook
      cy.contains('button', 'Conteúdo').click()
      cy.contains('p', 'O overview completo da operação e seus processos.').click()
      cy.url().should('include', '/playbook')

      // Então ele deve ser capaz de visualizar as informações do Playbook
      cy.get('span:contains("Bem vindx à nossa equipe de vendas. Este é o documento que vai guiar seu trabalho e te ajudar a ser um profissional top performer.")').should('be.visible');


      // E deve ser capaz de editar as informações do Playbook
      cy.get('button[title="Modo de edição"]').should('be.visible').click();
    })

    it('Cenário: Pesquisa por palavras-chave', () => {
        // Dado que o usuário esteja na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // E preencha o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E preencha o campo de senha com uma senha válida
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E clique no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // E acesse a página do Playbook
        cy.contains('button', 'Conteúdo').click()
        cy.contains('p', 'O overview completo da operação e seus processos.').click()
        cy.url().should('include', '/playbook')

        // Quando ele inserir uma palavra-chave no campo de pesquisa
        cy.get('input[placeholder="Pesquisar..."]').click().type('glossário')
        
        // Então somente os tópicos que contêm a palavra-chave devem ser exibidos
        cy.contains('p', '2. Glossário').should('be.visible').click()
        cy.contains('p', '3. A Empresa Teste 3333').should('not.exist')
        
      })

    it('Cenário: Navegação pelos tópicos', () => {
        // Dado que o usuário esteja na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // E preencha o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E preencha o campo de senha com uma senha válida
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E clique no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // E acesse a página do Playbook
        cy.contains('button', 'Conteúdo').click()
        cy.contains('p', 'O overview completo da operação e seus processos.').click()
        cy.url().should('include', '/playbook')

        // Quando ele clicar em um tópico na barra lateral esquerda
        cy.contains('p', '8. Inteligência comercial (IC)').click()
        
        // Então ele deve ser redirecionado para a parte do Playbook referente ao tópico selecionado
        cy.url().should('include', '/playbook?section=8-inteligencia-comercial-ic')
        
      })

    it('Cenário: Edição de dados por um usuário administrador', () => {
        // Dado que o usuário é um administrador
        // E que esteja na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // E preencha o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E preencha o campo de senha com uma senha válida
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E clique no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // E acesse a página do Playbook
        cy.contains('button', 'Conteúdo').click()
        cy.contains('p', 'O overview completo da operação e seus processos.').click()
  
        // Quando ele habilitar o modo de edição 
        cy.get('button[title="Modo de edição"]').click();

        // E ele editar algumas informações
        cy.contains('h1', 'Introdução').next().click();
        cy.contains('h1', 'Introdução').next().type('.');

        // Então as informações devem ser salvas automaticamente
        // E quando ele atualizar a pagina
        cy.wait(2000);
        cy.reload();

        // Então as informações editadas devem ser exibidas corretamente
        cy.contains('h2', '1.1. Manifesto.').should('be.visible')


        // clear
        cy.get('button[title="Modo de edição"]').click();
        cy.contains('h1', 'Introdução').next().click();
        cy.focused().type('{backspace}');
        cy.get('button[title="Modo de visualização"').click();
      })

})