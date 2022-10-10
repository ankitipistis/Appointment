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
    HStack,
    Checkbox,
    WarningOutlineIcon,
    isEmptyObj
} from "native-base";
import { StyleSheet, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import WavyHeader from '../components/WavyHeader';
// import validator from 'validator';

const SignInScreen = ({ navigation }) => {
    const [formData, setData] = React.useState([]);
    const [errors, setErrors] = React.useState([]);
    const [errorspwd, setErrorsPwd] = React.useState([]);

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");

    // const [emailError, setEmailError] = useState('');


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

    // const validateEmail = (e) => {
    //     var email = e.target.value

    //     if (validator.isEmail(email)) {
    //         setEmailError('Valid Email :)')
    //     } else {
    //         setEmailError('Enter valid Email!')
    //     }
    // }

    // const validateMail = () => {
    //     setErrors([])
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (!mail) {
    //         setErrors({
    //             ...errors,
    //             mail: 'Mail is required'
    //         });
    //         return false;
    //     }
    //     else if (mail.match(mailformat)) {
    //         setErrors({
    //             ...errors,
    //             mail: 'Invalid Email'
    //         });
    //         return false;
    //     }
    //     return true;

    // };

    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');
        validatePwd() ? console.log('Submitted') : console.log('Validation Failed');

        // validateMail() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return (
        <NativeBaseProvider>
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
                            <Input placeholder="Enter Email" onChange={(e) => validateEmail(e)} />
                            {/* <Text>{emailError}</Text> */}
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