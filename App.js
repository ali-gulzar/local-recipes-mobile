import React, { useState } from 'react';
import { Text, NativeBaseProvider, Box, Fab, Spinner } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { fetchRecipes } from './src/api/localRecipe';

export default function App() {
    const [loading, setLoading] = useState(false);
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
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
    };

    return (
        <NativeBaseProvider>
            <Box flex={1} backgroundColor="coolGray.700">
                <Box height={100}>
                    <Text position="absolute" bottom={0} left={0} fontSize="3xl" color="white" marginLeft={5} bold>
                        Zish
                    </Text>
                </Box>
                {loading && <Spinner color="indigo.500" accessibilityLabel="Loading" />}
            </Box>
            <Fab shadow={4} size="sm" label="Open Gallery" marginLeft={2} marginBottom={2} onPress={getImage} />
        </NativeBaseProvider>
    );
}
