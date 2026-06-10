// Lab I.10.2.
import { Text, View } from 'react-native';
// <II.1.1.> 
import { styles } from '@/styles/HeaderStyles';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View>
      {/* <II.1.1.> Before: <Text style={{ fontSize: 24 }}>Student Application</Text>*/}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
// </II.1.1.>
}
