import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="h-[25%] w-full bg-[#25292e] rounded-tr-2xl rounded-tl-2xl absolute bottom-0">
        <View className="h-[16%] bg-[#464C55] rounded-tr-xl rounded-tl-xl px-5 flex-row items-center justify-between">
          <Text className="text-white text-lg">Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
