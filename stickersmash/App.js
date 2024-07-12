import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View className="bg-[#25292e] h-screen w-screen flex items-center justify-center flex-1 container">
      <View className="flex-1 pt-16"><ImageViewer placeholderImageSource={PlaceholderImage} /></View>
      <View className="flex-[1/3] items-center">
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

