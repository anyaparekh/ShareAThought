import { View, Text } from "react-native";

export interface NoteCardProps {
    noteTitle: string;
    noteBody: string;
    bgColor: string;
    textColor: string;
}

// bgColor and textColor take in full tailwind string literals, eg "bg-[#71816D]". "
function NoteCard({noteTitle, noteBody, bgColor, textColor}: NoteCardProps) {
    return (
        <View className={`rounded-xl px-4 py-5 min-w-[80%] ${bgColor} my-3`}>
            <Text className={`font-bold justify-start pb-2 ${textColor} font-montserrat`}>{noteTitle}</Text>
            <Text className={`${textColor} font-montserrat`}>{noteBody}</Text>
        </View>
    )
}

export default NoteCard;