describe('Funcionalidade: Validar página de login na Growth Station', () => {
    it('Cenário: Sucesso no login', () => {
      // Dado que estou na página de login da Growth Station
      cy.visit('https://client.stg.growthstation.app/login')
  
      // Quando eu preencho o campo de email com um email válido
      cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
  
      // E eu preencho o campo de senha com uma senha válida
      cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
  
      // E eu clico no botão de entrar
      cy.contains('button', 'Entrar').click()
  
      // Então eu devo ser redirecionado para a página inicial da minha conta
      cy.url().should('include', '/materials')
    })

    it('Cenário: Falha no login com email em branco', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Quando eu deixo o campo de email em branco
        // E eu preencho o campo de senha com uma senha válida
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E eu clico no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // Então eu devo ver a mensagem de erro "*E-mail ou senha inválidos"
        cy.contains('span', 'E-mail ou senha inválidos').should('be.visible')
      })

    it('Cenário: Falha no login com senha em branco', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Quando eu preencho o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E eu deixo o campo de senha em branco
        // E eu clico no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // Então eu devo ver a mensagem de erro "*E-mail ou senha inválidos"
        cy.contains('span', 'E-mail ou senha inválidos').should('be.visible')
      })

    it('Cenário: Falha no login com email inválido', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Quando eu preencho o campo de email com um email inválido
        cy.get('input[type=email]').type('email_invalido@gmail.com')
    
        // E eu preencho o campo de senha com uma senha válida
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E eu clico no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // Então eu devo ver a mensagem de erro "*E-mail ou senha inválidos"
        cy.contains('span', 'E-mail ou senha inválidos').should('be.visible')
      })

    it('Cenário: Falha no login com senha inválida', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Quando eu preencho o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E eu preencho o campo de senha com uma senha válida
        cy.get('input[type=password]').type('senha_invalida')
    
        // E eu clico no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // Então eu devo ver a mensagem de erro "*E-mail ou senha inválidos"
        cy.contains('span', 'E-mail ou senha inválidos').should('be.visible')
      })

    it('Cenário: Falha no login com email e senha em branco', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Quando eu deixo o campo de email em branco
        // E eu deixo o campo de senha em branco
        // E eu clico no botão de entrar
        cy.contains('button', 'Entrar').click()
    
        // Então eu devo ver a mensagem de erro "*E-mail ou senha inválidos"
        cy.contains('span', 'E-mail ou senha inválidos').should('be.visible')
        })

    it('Cenário: "Não é Cliente"', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')
    
        // Espionar a função window.open
        cy.window().then((win) => {
            cy.spy(win, 'open').as('windowOpen')
        })
    
        // Quando eu clico no botão "Não é Cliente"
        cy.contains('button', 'Não é cliente?').click()
    
        // Então eu devo ser redirecionado para a página principal da Growth Machine
        cy.get('@windowOpen').should('be.calledWith', 'https://www.growthmachine.com.br/', '_blank')
    })

    it('Cenário: Sucesso ao visualizar a senha', () => {
        // Dado que estou na página de login da Growth Station
        cy.visit('https://client.stg.growthstation.app/login')

        // Quando eu preencho o campo de senha
        cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
    
        // E eu clico no ícone do olho no campo de senha
        cy.get('.overflow-hidden.w-4.h-4.cursor-pointer').click()
    
        // Então eu devo ser capaz de ver a senha que digitei
        cy.get('input[type=text]').should('have.attr', 'type', 'text')
    })

    it('Cenário: Sucesso ao ocultar a senha', () => {
      // Dado que estou na página de login da Growth Station
      cy.visit('https://client.stg.growthstation.app/login')

      // E eu já cliquei no ícone do olho no campo de senha
      cy.get('input[type=password]').type(Cypress.env('USER_PASSWORD'))
  
      // Quando eu clico novamente no ícone do olho no campo de senha
      cy.get('.overflow-hidden.w-4.h-4.cursor-pointer').click()
      cy.get('.overflow-hidden.w-4.h-4.cursor-pointer').click()
  
      // Então minha senha deve voltar a ser ocultada
      cy.get('input[type=password]').should('have.attr', 'type', 'password')
    })
  
    it('Cenário: Redirecionamento para a página de recuperação de senha', () => {
      // Dado que estou na página de login da Growth Station
      cy.visit('https://client.stg.growthstation.app/login')
  
      // Quando eu clico no link "Esqueceu a senha?"
      cy.contains('a', 'Esqueceu a senha?').click()
  
      // Então eu devo ser redirecionado para a página de recuperação de senha
      cy.url().should('include', '/forgotPass')
    })

  })

describe('Funcionalidade: Recuperar senha', () => {
    it('Cenário: Solicitação de recuperação de senha com sucesso', () => {
        // Dado que estou na página de recuperação de senha da Growth Station
        cy.visit('https://client.stg.growthstation.app/forgotPass')
    
        // Quando eu preencho o campo de email com um email válido
        cy.get('input[type=email]').type(Cypress.env('USER_EMAIL'))
    
        // E eu clico no botão de enviar
        cy.contains('button', 'Enviar E-mail').click()

        // Então eu devo receber um email com instruções para redefinir minha senha
        // E eu devo ver a mensagem de sucesso "Email enviado com sucesso!"
        cy.contains('p', 'Email enviado com sucesso!').should('be.visible')
      })

    it('Cenário: Solicitação de recuperação de senha com email não registrado', () => {
        // Dado que estou na página de recuperação de senha da Growth Station
        cy.visit('https://client.stg.growthstation.app/forgotPass')
    
        // Quando eu preencho o campo de email com um email que não está registrado
        cy.get('input[type=email]').type('email_invalido@gmail.com')
    
        // E eu clico no botão de enviar
        cy.contains('button', 'Enviar E-mail').click()

        // Então eu devo ver a mensagem de erro "Usuário não encontrado"
        cy.contains('p', 'Usuário não encontrado').should('be.visible')
      })
})