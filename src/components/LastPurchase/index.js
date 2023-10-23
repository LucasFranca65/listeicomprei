import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';

export default function LastPurchase({ valueList, nameList }) {
    return (
        <View style={styles.container} >
            <View style={styles.item}>
                <TouchableOpacity style={styles.contentLastPur}>
                    <Text style={styles.nameListTitle}>Lista mais recente</Text>
                    <Text style={styles.nameList}>{nameList}</Text>
                    <View style={styles.valueContent}>
                        <Text style={styles.Current}>R$ </Text>
                        <Text style={styles.Value}>{valueList}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contentLastPur}>
                <TouchableOpacity style={styles.contentAddList} >
                    <Text>Adicionar</Text>
                    <View style={styles.iconAddList}>
                        <AntDesign name='plussquareo' size={27} color={"#000"} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DADADA',
        marginTop: -35,
        marginStart: 18,
        marginEnd: 18,
        paddingTop: 20,
        paddingBottom: 20,
        paddingStart: 18,
        paddingEnd: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 99,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentLastPur: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    nameList: {
        fontSize: 22,
        color: '#4F4F4F'
    },
    valueContent: {
        flexDirection: 'row'
    },
    Value: {
        fontSize: 22,
        color: '#2E8B57'
    },
    Current: {
        color: '#4F4F4F',
        fontSize: 22,
    },
    contentAddList: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 5,
        borderRadius: 10

    },
    nameListTitle: {
        fontSize: 10
    }


})