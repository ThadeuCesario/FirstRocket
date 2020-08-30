import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar} from 'react-native';
import api from './services/api';

/**
 * As tags dentro do React Native, não possuem valor semântico.
 * Além disso, as tags dentro do React Native não possuem estilização própria, como é o caso
 * da web.
 *
 * Todos os componentes possuem por padrão o display flex. No ReactNative nos não temos herança de
 * estilos.
 * 
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3.
 * 
 * Podemos controlar nossa statusBar (a barra que fica no top), utilizando a importação dela.
 * Pelo StatusBar e em seguida, aplicar diferentes estilos utilizando o barStyle.
 * 
 * Vamos utilizar o useEffect e também o useState para controlarmos os elementos.
 * Lembre-se que o useEffect será disparado quando a variável dentro do array no segundo parâmetro for alterado.
 * Se passarmos uma array vazio, será disparado somente uma vez, quando o elemento for carregado.
 * 
 * Lembre-se de utilizar FlatList ao invés de ScrollView! Porque a FlatList é muito mais performática.
 * 
 * SafeAreView => Todo o conteúdo será renderizado somente na área segura do mobile.
 */

export default App = _ => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => `${project.id}`}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  project: {
    color: '#fff',
    fontSize: 30,
  },
});