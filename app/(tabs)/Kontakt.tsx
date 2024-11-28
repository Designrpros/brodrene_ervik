import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ExternalLink } from '@/components/ExternalLink';

const { width, height } = Dimensions.get('window');

export default function KontaktScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >
      {/* Background Image */}
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/CarpenterBG1.jpg')}
          style={styles.backgroundImage}
        />

        {/* Overlay Content */}
        <View style={styles.overlay}>
          {/* Top Section: Profile Image */}
          <View style={styles.topImageContainer}>
            <Image
              source={require('@/assets/images/Avatar.jpg')} // Ensure the path is correct
              style={styles.topImage}
            />
          </View>

          {/* Profile and Contact Information */}
          <View style={styles.profileContactContainer}>
            {/* Contact Information */}
            <View style={styles.contactInfo}>
              <ThemedText style={styles.contactName}>Helge</ThemedText>
              <ThemedText style={styles.contactText}>
                En trygg snekker med mye erfaring.
              </ThemedText>
              <ThemedText style={styles.contactDetail}>Telefon: +47 123 45 678</ThemedText>
              <ThemedText style={styles.contactDetail}>E-post: helge@snikkeren.no</ThemedText>
              <ExternalLink href="https://www.snikkeren.no">
                <ThemedText style={styles.contactDetail}>Nettside: www.snikkeren.no</ThemedText>
              </ExternalLink>
            </View>
          </View>

          {/* Additional Information */}
          <View style={styles.additionalInfo}>
            <ThemedText style={styles.infoText}>
              • Jeg kjøpte en vingård i Piemonte og pusset den opp, samtidig som jeg hadde tre små barn. Det var en helt spesiell tid!
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • På Føynland kjøpte jeg et hus som jeg pusset opp over 15 år. Det var mye jobb, men jeg fikk også vært hjemme med barna i den perioden, noe jeg setter stor pris på.
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • I 5 år jobbet jeg med skadedyrkontroll i Tønsberg. Der lærte jeg mye om å takle uforutsette utfordringer.
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • De siste 5 årene har jeg brukt mye tid på private oppdrag for familie og venner. Det har vært givende å hjelpe de nærmeste med prosjektene deres.
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • Under pandemien bygde jeg faktisk min egen hytte. Det var en drøm som gikk i oppfyllelse, og en fin måte å holde meg opptatt på.
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • Nå tar jeg kurs i «lafting». Det er både lærerikt og en fin måte å utfordre meg selv på.
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • Jeg fikk også være med litt i team Otto på Sinnasnekkerne. Det var skikkelig moro og en opplevelse for livet!
            </ThemedText>
            <ThemedText style={styles.infoText}>
              • Byggmester Terje er min faste samarbeidspartner. Vi utfyller hverandre godt i prosjektene vi tar på oss.
            </ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    width: '100%',
    height: height, // Ensure the container takes up the full screen height
  },
  backgroundImage: {
    width: '100%',
    height: height, // Make sure the background image covers the entire height
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: a semi-transparent overlay
  },
  topImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  profileContactContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  contactInfo: {
    alignItems: 'flex-start', // Align text to the left
  },
  contactName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Black title text
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  additionalInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  infoHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000', // Black title text
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});