import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ListPurchase({ data }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.colum}>
                <Text style={styles.label}>Nome: {data.name}</Text>
                <Text style={styles.label} >Data: {data.date}</Text>
            </View>
            <View style={styles.colum}>
                <Text style={styles.label}>Quantidade: {data.qtdItens}</Text>
                <Text style={styles.label}>Total: {data.total}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#F0E68C',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10
    },
    colum: {
        paddingStart: 10,
        paddingEnd: 10
    },
    label: {
        color: '#4F4F4F',
        fontSize: 17
    }
})