import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons"

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


export default function Header({ UserName, UserImage }) {
    return (
        <View style={styles.constainer}>
            <View style={styles.contentHeader}>
                <Text style={styles.textHeaderUser}>{UserName}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconHeaderUser}>
                    <Feather name='user' size={27} color={"#FFF"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: "#FF4500",
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 50
    },
    contentHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textHeaderUser: {
        color: "#FFF",
        fontSize: 24
    }, iconHeaderUser: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})