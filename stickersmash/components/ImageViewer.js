import { Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} className="w-[320px] h-[440px] rounded-2xl" />
  );
}

