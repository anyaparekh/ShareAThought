import React from "react";
import { TextInput, Text, View } from "react-native";

export type TextInputProps = {
  title: string;
  placeholder: string;
  input: string;
};

const TextInputField: React.FC<TextInputProps> = ({
  title,
  placeholder,
  input,
}) => {
  return (
    <View className="">
      <Text className="bg-[#F8F0E2] rounded-[24px] border border-[#342A21]">
        {title}
      </Text>
      <TextInput
        value={input}
        placeholder={placeholder}
        keyboardType="email-address"
      />
    </View>
  );
};

export default TextInputField;
