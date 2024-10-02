import { View, Text } from "react-native";
import axios from 'axios';
import { BASE_URL } from "@env";
import React, { useState, useEffect } from 'react'; 
import NoteCard from './NoteCard'; 

    // [
    //     {
    //         title: 'First Note',
    //         body: 'This is the first note'
    //     },
    //     {
    //         title: 'Second Note',
    //         body: 'This is the second note'
    //     }
    // ]

interface Note {
    title: string;
    body: string;
}

function Dashboard() {
    const [notes, setNotes] = useState<Note[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/Notes`).then((response) => {
            setNotes(response.data);
            console.log(response.data);
            setIsLoading(false); 
            setError(false);
        }).catch(() => { setError(true) });
    }, []); 

    if(isLoading) {
        return <Text>Loading...</Text>
    }

    var bgColor = ["bg-[#71816D]", "bg-[#F1E0C5]", "bg-[#7F715F]"];
    var textColor = ["text-[#FFFFF]", "text-[#342A21]", "text-[#F1E0C5]"];
    
    return (
        (!isLoading && !error && notes) ? 
            (notes.map((note, index) => <NoteCard noteTitle={note.title} noteBody={note.body} bgColor={bgColor[index % 3]} textColor={textColor[index % 3]} />))
            :
            <Text>Dashboard!</Text>
    ); 
}

export default Dashboard; 


    
    // Passing configuration object to axios
    // axios({
    //     method: 'get',
    //     url: `${BASE_URL}/api/notes`,
    // }).then((response) => {
    //     console.log(response.data);
    // });

    // Invoking the get method to perform a GET request