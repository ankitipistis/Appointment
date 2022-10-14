import React, { useState } from 'react';
import {
    Heading,
    NativeBaseProvider,
    VStack,
    Button,
    FormControl,
    Input,
    Text,
    Center,
    Box,
    Checkbox,
} from "native-base";
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import WavyHeader from '../components/WavyHeader';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SignInScreen = ({ navigation }) => {
    const [formData, setData] = React.useState([]);

    const [name, setName] = useState("");
    const [errors, setErrors] = React.useState([]);

    const [mail, setMail] = useState("");
    const [errorsmail, setErrorsMail] = React.useState([]);

    const [pwd, setPwd] = useState("");
    const [errorspwd, setErrorsPwd] = React.useState([]);


    const validate = () => {
        setErrors([])
        if (!name) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        }
        else if (name.length < 3) {
            setErrors({
                ...errors,
                name: 'Name is too short'
            });
            return false;
        }

        return true;
    };

    // Email validation section 

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
        navigation.navigate('LogInScreen', { title: 'LogInScreen' })
        return true;

    };

    // Password validation Section

    const validatePwd = () => {     
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


    const onSubmit = () => {

        validate() ? console.log('Submitted') : console.log('Validation Failed');
        validatePwd() ? console.log('Submitted') : console.log('Validation Failed');
        validateMail() ? console.log('Submitted') : console.log('Validation Failed');

    };

    return (
        <NativeBaseProvider>
            <HideKeyboard>
                <View>
                    <WavyHeader customStyles={styles.svgCurve} />
                    <Center w="100%">
                        <Box safeArea p="2" w="90%" maxW="290" py="8" top="40" >
                            <Heading size="lg" color="coolGray.800" _dark={{
                                color: "warmGray.50"
                            }} fontWeight="semibold">
                                Welcome {name}
                                {formData.map((result) => {
                                    return (
                                        <b>{result}</b>
                                    )
                                }
                                )}
                                {formData}
                            </Heading>
                            <Heading mt="1" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="medium" size="xs">
                                Sign up to continue!
                            </Heading>
                            <VStack space={3} mt="5">

                                {/* Name Input Field  */}

                                <FormControl isRequired>
                                    <FormControl.Label>Name</FormControl.Label>
                                    <Input placeholder="Enter Name" onChangeText={(value) => setName(value)} />
                                    {'name' in errors ? <Text>
                                        {errors.name}
                                    </Text> : ""}
                                </FormControl>

                                {/* Email Input Field  */}

                                <FormControl isRequired>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input placeholder="Enter Email" onChangeText={(value) => setMail(value)} />
                                    {'mail' in errorsmail ? <Text>
                                        {errorsmail.mail}
                                    </Text> : ""}
                                </FormControl>

                                {/* Password Input Field  */}

                                <FormControl isRequired>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input type="password" placeholder="Enter Password" onChangeText={(value) => setPwd(value)} />
                                    {'pwd' in errorspwd ? <Text>
                                        {errorspwd.pwd}
                                    </Text> : ""}
                                </FormControl>

                                <FormControl isRequired >
                                    <FormControl.Label>Confirm Password</FormControl.Label>
                                    <Input type="password" placeholder="password" />
                                </FormControl>

                                <Checkbox size="sm" value="tnc" justifyContent="center" mb="4">
                                    I agree to Terms and conditions
                                </Checkbox>

                                <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                                    Sign up
                                </Button>

                            </VStack>
                        </Box>
                    </Center>
                </View>
            </HideKeyboard>
        </NativeBaseProvider>
    );
};
export default SignInScreen;

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width

    }
});