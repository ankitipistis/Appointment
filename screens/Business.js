import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

// import WavyHeader from '../components/WavyHeader';
import { Flex, Spacer, VStack, Box, ScrollView, Heading, Center, Divider, Button, NativeBaseProvider, Menu, Pressable, HamburgerIcon } from "native-base";
const Business = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Box flex="1" safeAreaTop>
                <ScrollView>
                    <VStack space={2.5} w="100%" px="1">
                        {/* <Heading size="md" marginTop="10" textAlign="center">Set up your Account</Heading> */}
                        <Flex direction="row" mb="2.5" mt="10" justifyContent="space-between" width="90%" margin="auto"  >

                            <Heading fontSize='3xl' bottom="2" color="coolGray.600">Dashboard</Heading>
                            <Menu w="190" trigger={triggerProps => {
                                return <Pressable {...triggerProps}>
                                    <HamburgerIcon bottom="1" size="7" />
                                </Pressable>;
                            }}>
                                <Menu.Group title="Menu">
                                    <Menu.Item>Home</Menu.Item>
                                    <Menu.Item>Activity</Menu.Item>
                                    <Menu.Item>History</Menu.Item>
                                </Menu.Group>
                                <Divider mt="3" w="100%" />
                                <Menu.Group title="About">
                                    <Menu.Item>About Us</Menu.Item>
                                    <Menu.Item>Contact Us</Menu.Item>
                                    <Menu.Item  onPress={() => {
                                        navigation.navigate('LogInScreen', { title: 'LogInScreen' })
                                    }}>Log Out</Menu.Item>

                                </Menu.Group>
                            </Menu>
                            {/* <Ionicons name="notifications" size={24} color="blue" /> */}

                        </Flex>
                        <Divider />
                        <Flex direction="column" mt="5" width="90%" margin="auto">
                            <Heading fontSize='2xl' fontWeight="normal">Hello, <Heading>Ankit Raj</Heading></Heading>
                            <Text>Check Your activities in this Dashboard.</Text>
                        </Flex>
                        <Flex direction="row" width="90%" margin="auto" mt="10" justifyContent="space-between">

                            <Box >
                                <Flex direction='column' alignItems="center">
                                    <Box style={styles.box1}>
                                        <AntDesign name="wallet" size={41} color="white"   />
                                    </Box>

                                    <Text style={{ color: "#737373", textAlign: "center", top: 4 , fontSize: 16}}>Wallet</Text>
                                </Flex>
                            </Box>

                            <Box >
                                <Flex direction='column' alignItems="center">
                                    <Box style={styles.box2}>
                                        <FontAwesome name="send" size={40} color="white" />
                                    </Box>

                                    <Text style={{ color: "#737373", textAlign: "center" , top: 4, fontSize: 16}}>Transfer</Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Flex direction='column' alignItems="center">
                                    <Box style={styles.box3}>
                                        <MaterialIcons name="credit-card" size={50} color="white" />
                                    </Box>

                                    <Text style={{ color: "#737373", textAlign: "center", top: 4, fontSize: 16 }}>Add Fund</Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Divider mt="2" />

                        <Box backgroundColor="blue.700" borderRadius="15" width="95%" margin="auto" >
                            <Flex direction='row' width="90%" margin="auto" justifyContent="space-between" padding="8">

                                <Heading color="white" fontSize="lg" right="5">Current Balance</Heading>
                                <AntDesign name="caretright" size={24} color="#1e3a8a" />
                                <Text style={{ color: "white", fontSize: 15, left: 15 }} >Rs 10300.00</Text>


                            </Flex>
                        </Box>

                        <Divider mt="2" />


                        <Flex direction='row' width="90%" margin="auto" justifyContent="space-between">
                            <Heading>Recent Activity</Heading>
                            <Text style={{ top: 3, color: "blue" }} >View All</Text>
                        </Flex>
                    </VStack>
                    <Divider mt="2" />

                    <VStack space={2.5} w="100%" px="1">
                        <Flex direction='column' width="95%" margin="auto" mt="2" justifyContent="space-between">
                            <Box height="120" borderWidth="1" padding="2" borderColor="coolGray.200" borderRadius="10" marginBottom="2">
                                <Flex direction='column' justifyContent="space-between" height="full" ml="2">
                                    <Heading fontSize="lg" color="coolGray.500">Payment to Suman Kumar</Heading>
                                    <Text style={styles.Text1}>Sep 10</Text>
                                    <Text style={styles.Text2}>Rs 500</Text>
                                    <Box style={styles.boxOnSuccess}><Text style={styles.TextOnSuccess}> Success </Text></Box>
                                </Flex>
                            </Box>
                            <Box height="120" borderWidth="1" padding="2" borderColor="coolGray.200" borderRadius="10" marginBottom="2">
                                <Flex direction='column' justifyContent="space-between" height="full" ml="2">
                                    <Heading fontSize="lg" color="coolGray.500">Payment to Avinash Chouhan</Heading>
                                    <Text style={styles.Text1}>Aug 28</Text>
                                    <Text style={styles.Text2}>Rs 25000</Text>
                                    <Box style={styles.boxOnProcess}><Text style={styles.TextOnProcess}> Processing </Text></Box>
                                </Flex>
                            </Box>
                            <Box height="120" borderWidth="1" padding="2" borderColor="coolGray.200" borderRadius="10" marginBottom="2">
                                <Flex direction='column' justifyContent="space-between" height="full" ml="2">
                                    <Heading fontSize="lg" color="coolGray.500">Payment to Abhishek Kumar</Heading>
                                    <Text style={styles.Text1}>Aug 19</Text>
                                    <Text style={styles.Text2}>Rs 700</Text>
                                    <Box style={styles.boxOnSuccess}><Text style={styles.TextOnSuccess}> Success </Text></Box>
                                </Flex>
                            </Box>
                            <Box height="120" borderWidth="1" padding="2" borderColor="coolGray.200" borderRadius="10" marginBottom="2">
                                <Flex direction='column' justifyContent="space-between" height="full" ml="2">
                                    <Heading fontSize="lg" color="coolGray.500">Payment to Book Store</Heading>
                                    <Text style={styles.Text1}>Aug 7</Text>
                                    <Text style={styles.Text2}>Rs 1000</Text>
                                    <Box style={styles.boxOnFailed}><Text style={styles.TextOnFailed}> Failed </Text></Box>
                                </Flex>
                            </Box>
                            <Box height="120" borderWidth="1" padding="2" borderColor="coolGray.200" borderRadius="10" marginBottom="2">
                                <Flex direction='column' justifyContent="space-between" height="full" ml="2">
                                    <Heading fontSize="lg" color="coolGray.500">Payment to Rana Singh</Heading>
                                    <Text style={styles.Text1}>July 23</Text>
                                    <Text style={styles.Text2}>Rs 2500</Text>
                                    <Box style={styles.boxOnSuccess}><Text style={styles.TextOnSuccess}> Success </Text></Box>
                                </Flex>
                            </Box>


                        </Flex>
                    </VStack>
                </ScrollView>
            </Box>
        </NativeBaseProvider>

    );
}
export default Business;

const styles = StyleSheet.create({
    box1: {         // Box under Recent Activity Section
        padding: 15,
        backgroundColor: "#4338ca",
        borderRadius: 20
    },
    box2: {
        padding: 15,
        backgroundColor: "#4338ca",
        borderRadius: 20
    },
    box3: {
        padding: 10,
        backgroundColor: "#4338ca",
        borderRadius: 20
    },
    boxOnSuccess: {
        padding: 3,
        backgroundColor: "#cffafe",
        // marginTop: 3,
        borderRadius: 15,
        width: 120,
        alignSelf: "flex-end"

    },
    boxOnProcess: {
        padding: 3,
        backgroundColor: "#e0f2fe",
        // marginTop: 3,
        borderRadius: 15,
        width: 120,
        alignSelf: "flex-end"
    },
    boxOnFailed: {
        padding: 3,
        backgroundColor: "#fee2e2",
        // marginTop: 3,
        borderRadius: 15,
        width: 120,
        alignSelf: "flex-end"

    },

    Text1: {            // Text under Recent Activity Section
        fontSize: 13,
        // fontWeight: "bold",
    },
    Text2: {
        fontSize: 15,
        marginTop: 3
        // fontWeight: "bold",
    },
    TextOnSuccess: {
        color: "#10b981",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        bottom: 2
    },
    TextOnProcess: {
        color: "#38bdf8",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        bottom: 2
    },
    TextOnFailed: {
        color: "#f87171",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        bottom: 2
    }
});