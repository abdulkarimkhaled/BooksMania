/**
 * React Native App
 * Everthing starts from the EntryPoint
 */
import React from 'react';
import { StatusBar, Platform, LogBox } from 'react-native';
import Navigator from './navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query'
import AppStyles from './config/styles';
const client = new QueryClient();
const ProviderComp = () => {
    return (
        <QueryClientProvider client={client} >
            <StatusBar backgroundColor={AppStyles.Color.LIGHT_GRAY} barStyle="dark-content" />
            <Navigator />
        </QueryClientProvider>
    )
}

export default function Entrypoint() {
    if (Platform.OS === 'ios') {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: AppStyles.Color.LIGHT_GRAY }} >
                <ProviderComp />
            </SafeAreaView>
        )
    } else {
        return (
            <ProviderComp />
        )
    }


}
