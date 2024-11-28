import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, // Disables the default header
        tabBarButton: HapticTab, // Custom button for haptic feedback
        tabBarBackground: TabBarBackground,
        tabBarPosition: 'top', // Moves the tab bar to the top
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Ensures transparency on iOS to show blur effect, no arrow
            backgroundColor: 'transparent', // No background color that could create a dropdown arrow
          },
          default: {
            backgroundColor: 'transparent', // Ensures no background that could introduce an arrow
          },
        }),
      }}>
      {/* Tab for Brødrene Eirvik */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Brødrene Ervik',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wrench" color={color} />,
        }}
      />
      
      {/* Tab for Tjenester */}
      <Tabs.Screen
        name="Kontakt"
        options={{
          title: 'Kontakt',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wrench" color={color} />,
        }}
      />
    </Tabs>
  );
}