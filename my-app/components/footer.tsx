// Lab I.10.3.
import { Text, View } from 'react-native';
import { footerStyles } from '@/styles/footerStyles';

export function Footer() {
  return (
    <View style={footerStyles.footerContainer}>
      <Text style={footerStyles.footerText}>2026 Warsaw University of Technology</Text>
    </View>
  );
}