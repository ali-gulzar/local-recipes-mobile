import React from 'react';
import { Text, NativeBaseProvider } from 'native-base';

export default function App() {
    return (
        <NativeBaseProvider>
            <Text>Something</Text>
        </NativeBaseProvider>
    );
}
