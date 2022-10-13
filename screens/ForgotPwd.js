import React, { useState } from 'react';
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

    const [mail, setMail] = useState("");
    const [errorsmail, setErrorsMail] = React.useState([]);

    // Email Validation Section 

    function isValidEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
    }

    const validateMail = () => {
        setErrorsMail([])
        if (!mail) {
            setErrorsMail({
                ...errorsmail,
                mail: 'Mail is required'
            });
            return false;
        }
        else if (!isValidEmail(mail)) {
            setErrorsMail({
                ...errorsmail,
                mail: 'Invalid Email'
            });
            return false;
        }
        return true;

    };

    const onSubmit = () => {
        validateMail() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return (
        <NativeBaseProvider>
            <WavyHeader customStyles={styles.svgCurve} />
            <Center w="100%">
                <Box style={styles.Box1}>
                    <MaterialIcons name="lock" size={150} color="white" />
                </Box>
                <Heading mt="2">Forgot Password?</Heading>
                <Text textAlign="center" mt="1" >Please enter your Email address to{'\n'}recieve a verification code. </Text>


            </Center>

            <Box w="80%" margin="auto" marginTop={6}>
                <FormControl>
                    <FormControl.Label>Email Address</FormControl.Label>
                    <Input placeholder="Enter Email" onChangeText={(value) => setMail(value)} />
                    {'mail' in errorsmail ? <Text>
                        {errorsmail.mail}
                    </Text> : ""}
                </FormControl>
                <Button mt="35%" colorScheme="indigo" onPress={onSubmit}>
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
        marginTop: 200,
        paddingTop: 20,
        backgroundColor: "#8b5cf6",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 90,
    }
});