import { ScrollView, View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { useGetAllMoviesQuery } from '../features/APISlice'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function Latestmovies({ navigation }) {

    const { data, error, isLoading } = useGetAllMoviesQuery()

    const navigateToDetails = (id) => {
        navigation.navigate('Moviedetails', { id });
    };


    return (
        <View style={styles.wrapp}>
            <View style={styles.container}>
                <Text style={styles.logo}>Buy Entertainment</Text>
                <TextInput style={styles.search} placeholder='Search'></TextInput>
            </View>
            {data &&
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {data.map((dt) => (
                            <View>
                                <Text>{dt.moviename}</Text>
                                <Button style={{ textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', alignItems: 'center' }} title='Details'
                                    onPress={() => navigateToDetails(dt.id)}>
                                </Button>

                            </View>

                        ))}
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        padding: '10 px',
        border: 'solid 1px green'

    },
    wrapp: {
        height: '95vh',
        width: '100 %',
        display: 'flex',
        overflow: 'scroll',
    },
    logo: {
        height: '35px',
        width: '250px',
        color: 'red', 
        fontSize: 22,
        fontWeight: 'bold',
    },
    search: {
        textAlign: 'center',
        float: 'right',
        cursor: 'text',
        backgroundcolor: 'rgb(255, 255, 255)',
        border: '1px solid rgb(238, 238, 238)',
        borderradius: '4px',
        height: '35px',
        width: '130px',
    }
};

