 
/**
 * App tsx -  Arquivo principal em React Native com TypeScript
*
* TSX significa TypeScript + JSX: escrevemos marcação com HTML dentro do JavaScript/TypeScript.
* O JSX é transformado em chamadas de função que cria o elementos de interfaces (componentes)
*
* @format
*/
 
// Importamos o hook(Componente especial substitui class no html, são funções que faz conexão) useState do React.
// Componentes funcionais a recursos do React (como estado).
 
import { useState } from "react";
 
// Importamos componentes prontos do pacote react-native
// Cada um representa um tipo de elemento na tela (caixas,texto,entrada etc...)
 
import {
  Alert,
  Button,
  StatusBar, //Barra de status do sistema (hora,bateria); podendo ajustar o estilo
  StyleSheet, //API para criar estilo de forma otimizada e tipada
  Text,
  TextInput, //Campo onde o usuario digita
  TouchableOpacity, //Area de toque com feedback visual (opacidade ao tocar)
  View //Container generico - equivalente <div> na web, agrupar o layout
 
 } from "react-native";
 
 /**
  * Componente functional App: é uma função que retorna o que deve aparecer na tela.
  * Em React Native, a árvore de componentes começa normalmente nesse arquivo
  */
 
 function App(){
   //useState cria um estado - um valor que pode mudar com o tempo.
   //Quando mudamos o estado com setNome, o React redesenha (re-renderiza) a tela.
   //useState ('') começa com string vazia: ainda não há nome digitado.
   const [name,setNome] =useState <string>('');
 
   //Função chamada sempre que o usuário altera o texto no TextInput.
   //o parámetro "texto" é conteúdo atual do campo após a digitação.
 
   const aoDigitarNome = (texto: string) => {
    //Atualiza o estado; a interface mostrará "Olá, ..." com novo valor.
    setNome(texto);
   };
   //Função do botão extra: zera o nome e o campo voltar a ser vazio (string vazia)
   const limparNome = () => {
     setNome('');
   };
 
   //return com JSX/TSX: Descrever a hierarquia visual da tela.
   return (
    //View é o container principal: ocupa a tela e centraliza o conteúdo (via estilos)
    <View style={styles.container}>  
    {/* {StatusBar com conteúdo escuro combina com o fundo claro}*/}
      <StatusBar barStyle="dark-content" />
 
      {/*{titulo em destaque}*/}
      <Text style={styles.titulo}>Meu Primeiro App</Text>
 
      {/*{Texto explicativo para inciante} */}
      <Text style={styles.texto}>Digite seu nome abaixo:</Text>
 
      {/*{TextInput é um campo de entrada. "value" liga o input ao estado (componente controlado)
      Sempre que o nome muda, o campo mostra esse valor}
      onChangeText dispara cada tecla: passamos o texto setNome via aoDigitarNome*/}
      <TextInput
      style={styles.input}
      value={name}
      onChangeText={aoDigitarNome}
      placeholder="Seu nome"
      placeholderTextColor={"#8888"}
      //Teclado com a primeira letra maiuscula (mais natural para nomes)
      autoCapitalize="words"
      />
 
      {/* {Button: Componente de botão nativo. Ao pressionar,
       abrimos um Alert para mostrar que o toque funcionou (opcional no fluxo - a saudação na tela já atualiza ao digitar)
       } */}
 
       <View style={styles.espacoBotao}>
          <Button
          title = "Mostrar saudação (alerta)" //Texto do botão
          color = "#2563eb" //Cor do botão
          onPress={() => {  //Ao clicar aciona
            Alert.alert(
              'Olá, ', name.trim()
              ? `Prazer em te conhecer, ${name.trim()}!`
              : 'Digite um nome ao campo acima',
              ) //Aciona o alert com a mensagem definida
          }}
          />
       </View>
       <Text style={styles.saudacao}>Ola, {name}</Text>
       {/*Botão extra: TouchableOpacity envolve o Text para estio customizado */}
          <TouchableOpacity
          style={styles.botaoLimpar}
          onPress={limparNome}
          activeOpacity={0.7}
          >
            <Text>Limpar Nome</Text>
          </TouchableOpacity>
 
 
    </View>
   )
   //View é semelhante a DIV
 }
 
const styles = StyleSheet.create({
  //container: preenche a tela (flex: 1) e centraliza os filhos no eixo cruzado principal
  container: {
    flex: 1,  //Usa todo o espaço disponivel no pai (a tela)
    justifyContent: 'center', // Centraliza no eixo X
    alignItems: 'center', //Centraliza no eixo Y
    paddingHorizontal: 24, //Espaço nas laterais para nao colar nas bordas
    backgroundColor: '#f5f5f5'// Fundo claro
  },
  titulo: {
    fontSize: 28,
    fontWeight: 700, //Deixar negrito
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
 
  },
  texto:{
    fontSize:16,
    color: '#333333',
    marginBottom: 12,
    textAlign: 'center',
  },
  input:{
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#cccccc', //Cor da borda
    borderRadius: 8, //Arredondamento dos cantos
    paddingHorizontal: 12, //Margem interna
    paddingVertical: 10,
    fontSize: 16,
    color: '#1a1a1a',
    backgroundColor: '#fff',
    marginBottom: 16, //Margem inferior
  },
  espacoBotao:{
    width: '100%',
    maxWidth: 320,
    marginBottom: 20,
  },
  saudacao:{
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom : 24,
    textAlign: 'center',
  },
  botaoLimpar:{
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
  }
 
})
export default App;