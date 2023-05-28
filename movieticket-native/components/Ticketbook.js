import { ScrollView, View, Text, Button, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGetMovieByIdQuery } from '../features/APISlice'
import { useDispatch, useSelector } from 'react-redux';
import { setCityy, setDatee, setTheatree, setSeatss, setSeatNbrs } from '../features/formSlice';

const Stack = createNativeStackNavigator()

export default function Ticketbook({ navigation, route }) {

    const { id } = route.params;
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetMovieByIdQuery(id)
    const [myArray, setMyArray] = useState([]);
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [theatre, setTheatre] = useState('');
    const [seats, setSeats] = useState('');
    const [seatnbr, setSeatNbr] = useState('');


    const handleCity = (text) => {
        setCity(text);
    };
    const handleDate = (text) => {
        setDate(text);
    };
    const handleTheatre = (text) => {
        setTheatre(text);
    };
    const handleSeats = (text) => {
        setSeats(text);
    };
    const handleSeatNbr = (text) => {
        setSeatNbr(text);
    };

    const handleData = () => {
        dispatch(setCityy(city));
        // console.log(city);
        dispatch(setDatee(date));
        dispatch(setTheatree(theatre));
        dispatch(setSeatss(seats));
        dispatch(setSeatNbrs(seatnbr));
        navigation.navigate('Bookedticket');
    };



    return (
        <View style={styles.container}>
            {data &&
                <Text style={styles.titl}>{data.moviename}</Text>
            }
            <View style={styles.row}>
                <Text style={styles.label}><b>City:</b></Text>
                <TextInput style={styles.input} value={city} placeholder='Enter the city name' onChangeText={handleCity} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}><b>Date:</b></Text>
                <TextInput style={styles.input} value={date} placeholder=' dd/mm/yyyy' onChangeText={handleDate} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}><b>Theatre:</b></Text>
                <TextInput style={styles.input} value={theatre} placeholder='Enter the theatre name' onChangeText={handleTheatre} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}><b>How many tickets ?</b></Text>
                <TextInput style={styles.input} value={seats} placeholder='Numbers 1 to 6' onChangeText={handleSeats} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}><b>Seat numbers</b></Text>
                <TextInput style={styles.input} value={seatnbr} placeholder='(A1-A10) to (Z1-Z10)' onChangeText={handleSeatNbr} />
            </View>
            <Button title='Submit' onPress={() => handleData()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
    },
    titl: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 10
    }
});







