import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

// Get screen width to adjust image sizes dynamically
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <>
      {/* Parent View for the Hero Section */}
      <View style={styles.heroContainer}>
        {/* Swiper for Hero Section (Background) */}
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
        >
          <View style={styles.swiperSlide}>
            <Image
              source={require('@/assets/images/CarpenterBG1.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperSlide}>
            <Image
              source={require('@/assets/images/CarpenterBG2.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperSlide}>
            <Image
              source={require('@/assets/images/CarpenterBG3.jpg')}
              style={styles.swiperImage}
            />
          </View>
        </Swiper>

        {/* Title and Text on Top of the Swiper */}
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require('@/assets/images/Logo.png')}
            style={styles.logo}
          />
          <ThemedText type="title" style={[styles.subtitle, { color: 'black' }]}>
            Velkommen til
          </ThemedText>
          <ThemedText type="title" style={styles.titleText}>
            Brødrene Ervik
          </ThemedText>
        </ThemedView>
      </View>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.descriptionText}>
          Jeg tilbyr kvalitetsarbeid innen snekkerfaget. Med min erfaring som dyktig håndverker,
          kan jeg hjelpe deg med å realisere dine byggeprosjekter. Jeg utfører små reparasjoner, leverer alltid topp kvalitet!
        </ThemedText>
      </ThemedView>

      {/* Service Cards Section */}
      <ThemedView style={styles.cardsContainer}>
        <View style={styles.card}>
          <Ionicons name="hammer" size={40} color="#fff" />
          <ThemedText style={styles.cardText}>Byggeprosjekter</ThemedText>
        </View>
        <View style={styles.card}>
          <Ionicons name="construct" size={40} color="#fff" />
          <ThemedText style={styles.cardText}>Renovering</ThemedText>
        </View>
        <View style={styles.card}>
          <Ionicons name="build" size={40} color="#fff" />
          <ThemedText style={styles.cardText}>Snekkerarbeid</ThemedText>
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',  // Make it a container for absolute positioning
    height: '50vh',        // Set the height of the hero section
    width: '100%',         // Full width of the screen
  },
  swiper: {
    height: '100%',         // Make the swiper fill the hero container
    width: '100%',
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    width: '100%',          // Full width of the screen
    height: '100%',         // Full height of the swiper container
    resizeMode: 'cover',    // Ensure images cover the container area
  },
  titleContainer: {
    position: 'absolute', // Position it on top of the swiper
    top: '25%',           // Adjust the vertical position as needed
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,            // Ensure the title content appears above the swiper
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // No background color (make it transparent)
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000', // Black text color
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  descriptionText: {
    fontSize: 20,
    color: '#555',
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#333',
    padding: 100,
    borderRadius: 8,
    width: '28%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});