import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultCard from './ResultCard';

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) return null;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Result', {
                                id: item.id
                            })}
                        >
                            <ResultCard {...item}/>
                        </TouchableOpacity>
                    );
                }}
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

export default withNavigation(ResultsList);