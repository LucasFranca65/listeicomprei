import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import LastPurchase from '../../components/LastPurchase'
import ListPurchase from '../../components/ListPurchase'

const lists = [
    {
        id: 1,
        name: "Compras Maio",
        date: "01/05/2023",
        qtdItens: 123,
        total: "2923,15"
    },
    {
        id: 2,
        name: "Compras Junho",
        date: "17/06/2023",
        qtdItens: 53,
        total: "523,15"
    },
    {
        id: 3,
        name: "Mercado Agosto",
        date: "03/08/2023",
        qtdItens: 79,
        total: "823,45"
    },
    {
        id: 4,
        name: "Churrasco dia 15",
        date: "15/08/2023",
        qtdItens: 25,
        total: "223,15"
    },
    {
        id: 5,
        name: "Mercado Setembro",
        date: "10/09/2023",
        qtdItens: 72,
        total: "727,19"
    },
    {
        id: 6,
        name: "Mercado Outubro",
        date: "15/10/2023",
        qtdItens: 69,
        total: "725,19"
    },
    {
        id: 7,
        name: "Compras Maio",
        date: "01/05/2023",
        qtdItens: 123,
        total: "2923,15"
    },
    {
        id: 8,
        name: "Compras Junho",
        date: "17/06/2023",
        qtdItens: 53,
        total: "523,15"
    },
    {
        id: 9,
        name: "Mercado Agosto",
        date: "03/08/2023",
        qtdItens: 79,
        total: "823,45"
    },
    {
        id: 10,
        name: "Churrasco dia 15",
        date: "15/08/2023",
        qtdItens: 25,
        total: "223,15"
    },
    {
        id: 11,
        name: "Mercado Setembro",
        date: "10/09/2023",
        qtdItens: 72,
        total: "727,19"
    },
    {
        id: 12,
        name: "Mercado Outubro",
        date: "15/10/2023",
        qtdItens: 69,
        total: "725,19"
    },
    {
        id: 13,
        name: "Mercado Outubro",
        date: "15/10/2023",
        qtdItens: 69,
        total: "725,19"
    },
    {
        id: 14,
        name: "Mercado Outubro",
        date: "15/10/2023",
        qtdItens: 69,
        total: "725,19"
    },
    {
        id: 15,
        name: "Mercado Outubro",
        date: "15/10/2023",
        qtdItens: 69,
        total: "725,19"
    }
]

export default function Home() {
    return (
        <View style={styles.container}>

            <Header UserName="Lucas França" UserImage="" />
            <LastPurchase valueList="890,50" nameList="Compras dia 15" />
            <Text style={styles.label}>Minhas Listas</Text>
            <FlatList
                data={lists}
                keyExtractor={(item) => String(item.id)}
                style={styles.list}
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => <ListPurchase data={item} />} />
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        paddingBottom: 20
    },
    label: {
        fontSize: 18,
        marginStart: 14,
        marginTop: 15,
        marginBottom: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#4F4F4F'
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
