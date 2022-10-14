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
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';

import WavyHeader from '../components/WavyHeader';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const LogInScreen = ({ navigation }) => {

    const [mail, setMail] = useState("");
    const [errorsmail, setErrorsMail] = React.useState([]);

    const [errorspwd, setErrorsPwd] = React.useState([]);
    const [pwd, setPwd] = useState("");

    const validatePwd = () => {    // Password validation
        setErrorsPwd([])
        if (!pwd) {
            setErrorsPwd({
                ...errorspwd,
                pwd: 'Password is required'
            });
            return false;
        }
        else if (pwd.length < 6) {
            setErrorsPwd({
                ...errorspwd,
                pwd: 'Password is too short'
            });
            return false;
        }

        return true;
    };

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
        navigation.navigate('Business', { title: 'Business' })
        return true;
    };

    const onSubmit = () => {
        validatePwd() ? console.log('Submitted') : console.log('Validation Failed');
        validateMail() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return (
        <NativeBaseProvider>
            <HideKeyboard>
                <View>
                    <WavyHeader customStyles={styles.svgCurve} />
                    <Center w="100%">
                        <Box safeArea p="2" py="9" w="90%" maxW="300" top="40" >

                            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                                color: "warmGray.50"
                            }}>
                                Welcome
                            </Heading>
                            <Heading mt="1" _dark={{
                                color: "warmGray.200"
                            }} color="coolGray.600" fontWeight="medium" size="xs">
                                Sign in to continue!
                            </Heading>

                            <VStack space={3} mt="5">
                                <FormControl>
                                    <FormControl.Label>Email ID</FormControl.Label>
                                    <Input placeholder="Enter Email" onChangeText={(value) => setMail(value)} />
                                    {'mail' in errorsmail ? <Text>
                                        {errorsmail.mail}
                                    </Text> : ""}

                                </FormControl>

                                <FormControl>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input type="password" placeholder="Enter Password" onChangeText={(value) => setPwd(value)} />
                                    {'pwd' in errorspwd ? <Text>
                                        {errorspwd.pwd}
                                    </Text> : ""}
                                    <Text color="indigo.500" fontWeight="medium" fontSize="sm" right="2" alignSelf="flex-end" top="2" onPress={() => {
                                        navigation.navigate('PasswordScreen', { title: 'ForgotPassword' })
                                    }}>  Forgot Password?</Text>
                                </FormControl>

                                <Button mt="2" colorScheme="indigo" onPress={onSubmit}   >
                                    Sign in
                                </Button>

                                <HStack mt="6" justifyContent="center">
                                    <Text fontSize="sm" color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }}>
                                        I'm a new user.{" "}
                                    </Text>
                                    <Text color="indigo.500" fontWeight="medium" fontSize="sm" right="2" onPress={() => {
                                        navigation.navigate('SignInScreen', { title: 'SignIn' })
                                    }}>  Sign Up</Text>

                                </HStack>

                            </VStack>
                        </Box>
                    </Center>
                </View>
            </HideKeyboard>
        </NativeBaseProvider>
    );
};
export default LogInScreen;

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width

    }
});