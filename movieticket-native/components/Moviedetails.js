import { ScrollView, View, Text, Button, TextInput, Image } from 'react-native'
import React from 'react'
import { useGetMovieByIdQuery } from '../features/APISlice'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { setCityy, setDatee, setTheatree, setSeatss, setSeatNbrs, setMoviee } from '../features/formSlice';

const Stack = createNativeStackNavigator()

export default function Moviedetails({ route, navigation }) {

    const { id } = route.params;
    const { data, error, isLoading } = useGetMovieByIdQuery(id)
    const dispatch = useDispatch();

    const navigateToDetails = (id, name) => {
        dispatch(setMoviee(name));
        console.log(name);
        navigation.navigate('Ticketbook', { id });
    };

    return (
        <View>
            <View>
                {/* <Text>Details Screen ID: {id}</Text> */}
                {data &&
                    <Image source={{ uri: data.image_url }} style={{
                        width: 200,
                        height: 200,
                        flexDirection: 'row',
                        resizeMode: 'contain',
                        borderRadius: 10
                    }} ></Image>
                }
                {data &&
                    <View style={{ textAlign: 'left', paddingLeft: 40 }} >
                        <Text><b>Movie Name: </b>{data.moviename}</Text>
                        <Text><b>Release Date: </b>{data.release_date}</Text>
                        <Text><b>Duration: </b>{data.duration}</Text>
                        <Text><b>Rating: </b>{data.ratings}</Text>
                    </View>
                }
                {data &&
                    <View>
                        <Button title='Book Now' onPress={() => navigateToDetails(data.id, data.moviename)} ></Button>
                    </View>
                }
            </View>
        </View>
    )
}