# Documentação e Compartilhamento - Growth Machine

Neste repositório, você encontrará os scripts de teste e códigos de teste automatizado relacionados ao projeto **Growth Machine**. A seguir, detalharei como configurar e executar esses testes, bem como fornecerei informações sobre os testes manuais escritos em BDD.

## Configuração

### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

1. [Node.js](https://nodejs.org/) (versão 20.11.28 ou superior)
2. [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

### Instalação das Dependências

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/growthmachine.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd growthmachine
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Executando os Testes Automatizados

Os testes automatizados estão localizados na pasta `cypress/integration`. Eles foram escritos em TypeScript e incluem os arquivos `loginPage.spec.ts` e `playbook.spec.ts`.

Para executar os testes, você pode utilizar os seguintes comandos:

```bash
npx cypress open (abrir a ferramenta do cypress)
```

```bash
npx cypress run (rodar os testes no terminal)
```

## Testes Manuais em BDD

Os roteiros de testes manuais em BDD estão disponíveis nos arquivos `bdd-login-page.txt` e `bdd-Playbook.txt`. Eles fornecem instruções detalhadas dos testes manuais.

## Ignorando Arquivos

O arquivo `.gitignore` oculta as pastas `cypress/fixtures`, `cypress/support`, `node_modules` e `cypress.env.json`.
