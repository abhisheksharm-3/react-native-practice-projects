import { Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  return (
    <Image source={imageSource} className="w-[320px] h-[440px] rounded-2xl" />
  );
}

