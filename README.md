# Lista de tarefas App

Lista de tarefas é um aplicativo desenvolvido em React Native. Ele permite aos usuários adicionar, concluir e excluir tarefas, com dados salvos localmente usando `AsyncStorage` para persistência entre sessões.

## 📋 Funcionalidades

- **Adicionar Tarefas**: Insira novas tarefas na lista.
- **Marcar como Concluída**: Altere o status de uma tarefa ao marcá-la como concluída.
- **Excluir Tarefas**: Remova tarefas da lista com facilidade.
- **Persistência de Dados**: Todas as tarefas são salvas localmente no dispositivo e carregadas automaticamente ao iniciar o aplicativo.

## 🚀 Tecnologias Utilizadas

- **React Native**
- **TypeScript**
- **AsyncStorage**: Para armazenamento local das tarefas.

## 📦 Instalação

1. Clone o repositório em seu ambiente de desenvolvimento e entre no diretório do projeto.
2. Instale as dependências do projeto com `npm install`.
3. Adicione o AsyncStorage com `npm install @react-native-async-storage/async-storage`.
4. Execute o aplicativo usando `npm start` para abrir o Expo Developer Tools. No seu dispositivo, escaneie o QR Code exibido no terminal ou na janela do Expo, ou abra o emulador Android/iOS.

## 📜 Como Usar

1. **Adicionando Tarefas**:
   - Insira o nome da tarefa desejada e toque no botão para adicioná-la à lista.

2. **Marcando como Concluída**:
   - Toque em uma tarefa para marcar ou desmarcar como concluída, alterando seu status.

3. **Excluindo Tarefas**:
   - Toque no ícone de exclusão ao lado da tarefa que deseja remover.
