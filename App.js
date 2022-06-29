import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { fetchRecipes } from './src/api/localRecipe';
import { Flex, Box, Text, FAB } from '@react-native-material/core';
import Icon from '@expo/vector-icons/Entypo';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);

    const getImage = async () => {
        // TODO: allow smaller height and width images
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setLoading(true);
            try {
                const response = await fetchRecipes(result);
                console.log(response.data)
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
    };

    return (
        <Flex fill style={styles.app}>
            <Box style={styles.titleContainer}>
                <Text style={styles.title}>Zish</Text>
            </Box>
            <FAB variant="extended" icon={<Icon name="image"/>} label="Open Gallery" onPress={getImage}/>
        </Flex>
    );
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#0369a1',
    },
    titleContainer: {
        height: 100,
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        marginLeft: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});
