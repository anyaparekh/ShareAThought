import { View, Text } from "react-native";
import TextInputField from "./textInputField";

export default function Index() {
  return (
    <View className="bg-[#F8F0E2] w-full h-full justify-center items-center">
      <Text className="font-montserrat">Hello!</Text>
      <TextInputField
        title="Email Address"
        placeholder="Enter your Email Adress"
        input="hello"
      />
    </View>
  );
}
