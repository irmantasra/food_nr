import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ResultCard from './ResultCard';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => <ResultCard {...item}/>}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;