import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Toolbar: React.FC = () => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.toolbarText}>Brødrene Eirvik</Text>
      <Text style={styles.toolbarText}>Hjem</Text>
      <Text style={styles.toolbarText}>Tjenester</Text>
      <Text style={styles.toolbarText}>Kontakt oss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toolbarText: {
    color: '#fff',
    fontSize: 18,
  },
});