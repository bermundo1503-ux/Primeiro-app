/*
 * Segundatela.tsx
 * Esta é a nossa segunda tela didática.
 * Ela recebe dados ds primeira tela usando props.
 */
 
//Importamos useState para crontolar se a mensagem extra será exibida ou não.
import { useState } from "react";
 
// Importamos componentes visuais básicos do React Native
 
import{
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// aqui definimos o "formato" das props que esta tela espera receber.
//Props são os dados passados de um componenrete pai para um componente filho.
type SegundaTelaProps = {
    //"nome" vem da tela inicial (App.tsx)
    nome: string;
    //"AoVoltar" é a função que a segunda tela pode chamar para voltar.
    aoVoltar: () => void;
};

// Componente funcional da segunda tela
//Repare que recebemos as props como parâmetro da função.
function SegundaTela({ nome, aoVoltar }: SegundaTelaProps) {
 //useState para controlar se a mensagem esta escondida ou não.
 //Começa como false:inicialmente a mensagem não é recebida.
    const [mensagemRecebida, setMensagemRecebida] = useState(false);

 //esta função é chamada quando o usuariario toca o botão.
 const aoPressionarMostrarMensagem = () => {
    //Atualizamos o estado para true e o React re-renderiza a tela.
    setMensagemRecebida(true);
 }