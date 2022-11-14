# Chat Realtime using Websocket

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/jonatafsa/chat-websocket?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jonatafsa/chat-websocket?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/jonatafsa/chat-websocket?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/jonatafsa/chat-websocket?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/jonatafsa/chat-websocket?style=for-the-badge)

<img src="https://raw.githubusercontent.com/jonatafsa/chat-websocket/master/public/example-bg.jpeg" alt="exemplo imagem">

> O projeto é feito usando Websocket para inserção e atualização dos dados do chat em tempo real para todos os usuários conectados ao back-end. Atualmente com login genérico para autenticação, onde o usuário ao logar abre o chat, e se conecta ao servidor Websocket, ambos o servidores, de autenticação e de webscoket rodam na mesma pora, porém o servidor de autentição é um servidor HTTP criado com o `< nodejs - Express >`.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Servidor HTTP para registro
- [x] Web server
- [x] Autenticação
- [ ] Guardar chat no banco de dados
- [ ] Registar usuário no banco de dados
- [ ] Autenticação com Token JWT
- [ ] Chat entre usuários

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->

- Você instalou a versão estável mais recente do `<nodejs / npm >`
- Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Instalando <Chat Websocket>

Para instalar o <Chat Websocket>, siga estas etapas, faça isso em cada um dos branchs desse repostório `< front-end | back-end >`:

```
npm i
```

## ☕ Usando <Chat Websocket>

Para usar <Chat Websocket>, siga estas etapas:

```
npm run dev
```

## 📫 Contribuindo para <Chat Websocket>

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

Para contribuir com <Chat Websocket>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <Chat Websocket> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
