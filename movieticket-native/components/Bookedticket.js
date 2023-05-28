import { ScrollView, View, Text, Button, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRCode from 'react-native-qrcode-svg';

export default function Bookedticket({ route, navigation }) {

    const movie = useSelector(state => state.form.movie);
    const city = useSelector(state => state.form.city);
    const date = useSelector(state => state.form.date);
    const theatre = useSelector(state => state.form.theatre);
    const seats = useSelector(state => state.form.seats);
    const seatnbr = useSelector(state => state.form.seatnbr);


    // console.log(citt);

    const qrCodeTexts = [];
    qrCodeTexts.push(movie);
    qrCodeTexts.push(city);
    qrCodeTexts.push(date);
    qrCodeTexts.push(theatre);
    qrCodeTexts.push(seats);
    qrCodeTexts.push(seatnbr);

    const QRCodeGenerator = ({ texts }) => {
        const text = texts.join('\n'); // Join array elements with a newline character

        return (
            <View>
                <QRCode value={text} />
            </View>
        );
    };


    return (
        <View>
            <Text><b>Your Ticket</b></Text>
            <br></br>
            <View style={styles.container}>
                <QRCodeGenerator texts={qrCodeTexts} />
            </View>
            <View style={styles.data}>
                <Text><b>Movie name: </b><b>{movie}</b></Text>
                <Text><b>Place: </b><b>{city}</b></Text>
                <Text><b>Date: </b><b>{date}</b></Text>
                <Text><b>Theatre: </b><b>{theatre}</b></Text>
                <Text><b>No. of tickets: </b><b>{seats}</b></Text>
                <Text><b>Seat number: </b><b>{seatnbr}</b></Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    data: {
        textAlign: 'left',
        // paddingLeft: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});