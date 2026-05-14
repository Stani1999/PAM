// Lab I.10.3.
import { Text, View } from 'react-native';
import { FooterStyles } from '@/styles/FooterStyles'

export function Footer() {
  return (
    <View style={FooterStyles.FooterContainer}>
      <Text style={FooterStyles.FooterText}>2026 Warsaw University of Technology</Text>
    </View>
  );
}