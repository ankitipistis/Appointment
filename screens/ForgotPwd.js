import React from 'react';
import {
    Heading,
    NativeBaseProvider,
    Pressable,
    VStack,
    Button,
    Image,
    FormControl,
    Input,
    Text,
    Center,
    Box,
    Link,
    HStack
} from "native-base";
import { StyleSheet, View, Dimensions } from 'react-native';

import WavyHeader from '../components/WavyHeader';
import { MaterialIcons } from '@expo/vector-icons';


const PasswordScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <WavyHeader customStyles={styles.svgCurve} />
            <Center w="100%">
                <Box style={styles.Box1}>
                    <MaterialIcons name="lock" size={150} color="white" />
                </Box>
                <Heading mt="5">Forgot Password?</Heading>
                <Text textAlign="center" mt="2" >Please enter your Email address to{'\n'}recieve a verification code. </Text>

                
            </Center>

            <Box w="80%" margin="auto" marginTop={10}>
                    <FormControl>
                        <FormControl.Label>Email Address</FormControl.Label>
                        <Input />
                    </FormControl>
                    <Button mt="20" colorScheme="indigo">
                            Send Email
                        </Button>
                </Box>
        </NativeBaseProvider>
    );
};
export default PasswordScreen;

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width

    },
    Box1: {
        marginTop: 250,
        paddingTop: 20,
        backgroundColor: "#8b5cf6",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 90,
    }
});