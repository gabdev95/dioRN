import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78503027?v=4';
const urlToMyGithub = 'https://github.com/gabdev95';

const App = () => {

    const hanblePressGoToGithub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Imagem do avatar do GitHub de Gabriele de Medeiros: a qual possui cabelo ondulado, está sorrindo e usa óculos de grau' style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text accessibilityLabel='Nome do usuário.' style={[style.textoGithub, style.nameGithub]}>Gabriele de Medeiros</Text>
                <Text accessibilityLabel='Nickname do usuário.' style={[style.textoGithub, style.nicknameGithub]}>gabdev95</Text>
                <Text accessibilityLabel='Descrição do usuário: Hello, world! Símbolo de mundo.' style={[style.textoGithub, style.descricaoGithub]}>Hello, world! 🌎</Text>
                <Pressable onPress={hanblePressGoToGithub}>
                    <View style={style.buttonOpenIn}>
                        <Text style={[style.textoGithub, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: 'colorGithub',
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    textoGithub: {
        color: colorFontGithub,
    },
    nameGithub: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nicknameGithub: {
        fontSize: 18,
        color: colorDarkGithub,
    },
    descricaoGithub: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonOpenIn: {
        marginTop: 10,
        backgroundColor: colorDarkGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
