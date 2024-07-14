import { View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View className="w-[320] h-[68] mx-5 items-center justify-center p-1 border-[4] border-[#ffd33d] rounded-2xl">
                <Pressable className="rounded-xl w-full h-full items-center justify-center flex-row bg-white" onPress={onPress}>
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={{ marginRight: 10 }}
                    />
                    <Text className="text-base">{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View className="w-[320] h-[68] mx-5 items-center justify-center p-1">
            <Pressable className="rounded-xl w-full h-full items-center justify-center flex-row" onPress={onPress}>
                <Text className="text-white text-base">{label}</Text>
            </Pressable>
        </View>
    );
}