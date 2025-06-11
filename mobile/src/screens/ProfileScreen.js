import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    school: user?.school || '',
    major: user?.major || '',
    year: user?.year?.toString() || '',
    bio: user?.bio || ''
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    });

    if (!result.canceled) {
      // TODO: Upload image to server
      console.log(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    try {
      // TODO: Update profile on server
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              user?.profilePicture
                ? { uri: user.profilePicture }
                : require('../assets/default-avatar.png')
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.name}>
          {user?.firstName} {user?.lastName}
        </Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>School Information</Text>
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Text style={styles.editButton}>
              {isEditing ? 'Cancel' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>

        {isEditing ? (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="School"
              value={profileData.school}
              onChangeText={(text) =>
                setProfileData({ ...profileData, school: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Major"
              value={profileData.major}
              onChangeText={(text) =>
                setProfileData({ ...profileData, major: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Year"
              value={profileData.year}
              keyboardType="numeric"
              onChangeText={(text) =>
                setProfileData({ ...profileData, year: text })
              }
            />
            <TextInput
              style={[styles.input, styles.bioInput]}
              placeholder="Bio"
              value={profileData.bio}
              multiline
              onChangeText={(text) =>
                setProfileData({ ...profileData, bio: text })
              }
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.info}>
            <Text style={styles.infoText}>School: {user?.school}</Text>
            <Text style={styles.infoText}>Major: {user?.major}</Text>
            <Text style={styles.infoText}>Year: {user?.year}</Text>
            <Text style={styles.infoText}>Bio: {user?.bio}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    color: '#666'
  },
  section: {
    padding: 20
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  editButton: {
    color: '#2196F3',
    fontSize: 16
  },
  form: {
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  info: {
    gap: 10
  },
  infoText: {
    fontSize: 16,
    color: '#333'
  },
  signOutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f44336',
    borderRadius: 8,
    alignItems: 'center'
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
}); 