import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function AuthScreen() {
  const { signInWithMicrosoft } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>SkillShare</Text>
        <Text style={styles.subtitle}>Connect. Learn. Grow.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.microsoftButton}
          onPress={signInWithMicrosoft}
        >
          <Image
            source={require('../assets/microsoft-logo.png')}
            style={styles.microsoftLogo}
          />
          <Text style={styles.buttonText}>Sign in with Microsoft</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Connect with other university students to share and learn skills
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
  microsoftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center'
  },
  microsoftLogo: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  footer: {
    paddingVertical: 20
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14
  }
}); 