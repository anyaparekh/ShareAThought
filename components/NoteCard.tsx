import { View, Text } from "react-native";

export interface NoteCardProps {
    noteTitle: string;
    noteBody: string[];
    bgColor: string;
    textColor: string;
}

function NoteCard(props: NoteCardProps) {
    return (
        <View className={`rounded-xl px-4 py-5 min-w-[80%] bg-[${props.bgColor}] my-3`}>
            <Text className="font-bold justify-start pb-2 text-[#F1E0C5] font-montserrat">{props.noteTitle}</Text>
            {props.noteBody.map((e, i) => {
                return <Text className={`text-[${props.textColor}] font-montserrat`} key={i}>{e}</Text>
            })}
        </View>
    )
}

export default NoteCard;