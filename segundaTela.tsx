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
 };

  // JSX/TSX da segunda tela
    return (
        //view principal ocupando a tela e centralizando o elementos
        <View style={styles.container}>
            {/* Titulo para orientar o usuário */}
            <text style={styles.titulo}>Segunda Tela</text>

            {/* Texto que usa o props: o nome veio da primeira tela */}
            <text style={styles.boasvindas}>Bem Vindo, {nome}</text>
            <view  style={styles.espacoBotao}>
                <Button
                    title="Mostrar mensagem"
                    color="#2563ed"
                    onPress={aoPressionarMostrarMensagem}
                />
            </view>
            {/*Renderizaçao condicional:
             só mostra a mensagem se o estado mensagemRecebida for true. */}
            {mensagemRecebida && (
                <text style={styles.mensagem}>Feliz Pascoa !!!</text>
            )}
            <view style={styles.espacoBotao}>
                <Button
                    title="Voltar"
                    color="#6b7280"
                    onPress={aoVoltar}
                />
            </view>
        </View> 
    );
}
//Estilos para a segunda tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
        },
        //titulo da tela
        titulo: {
            fontSize: 28,
            fontWeight: '700',
            color: '#111827',
            marginBottom: 20,
            textAlign: 'center',
        },
        //texto de boas vindas que mostra o nome recebido pela props
        boasvindas: {
            fontSize: 20,
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: 20,
            textAlign: 'center',
        },
    //espaco para segundo os botões dos outos elememtos
    espacoBotao: {
        width: '100%',
        maxWidth: 320,
        marginBottom: 14,
    },
    //mensagem exibida ao pressionar o botão
    mensagem: {
        fontSize: 18,
        color: '#1f2937',
        marginBottom: 18,
        textAlign: 'center',
    },
})

export default SegundaTela;