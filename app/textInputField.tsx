import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";

export type TextInputProps = {
  title: string;
  placeholder: string;
};

const TextInputField: React.FC<TextInputProps> = ({ title, placeholder }) => {
  const [text, setText] = useState("");
  return (
    <View className="flex flex-col w-3/4 h-20">
      <Text className="text-[#7F715F] text-xl h-6">{title}</Text>
      <TextInput
        className="bg-[#F8F0E2] text-base my-3 py-3 px-4 rounded-[24px] border border-[#342A21]"
        onChangeText={(newText) => setText(newText)}
        placeholder={placeholder}
        placeholderTextColor="#C9B79C"
        keyboardType="default"
      />
    </View>
  );
};

export default TextInputField;
