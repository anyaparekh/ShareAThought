import { View, Text } from "react-native";

export interface NoteCardProps {
    noteTitle: string;
    noteBody: string;
    bgColor: string;
    textColor: string;
}

function NoteCard({noteTitle, noteBody, bgColor, textColor}: NoteCardProps) {
    return (
        <View className={`rounded-xl px-4 py-5 w-[80%] bg-[${bgColor}] my-3`}>
            <Text className={`font-bold justify-start pb-2 text-[${textColor}] font-montserrat`}>{noteTitle}</Text>

            return <Text className={`text-[${textColor}] font-montserrat`}>{noteBody}</Text>
        </View>
    )
}

export default NoteCard;