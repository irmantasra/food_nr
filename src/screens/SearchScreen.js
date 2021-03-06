import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price);
    };
    
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList
                    title='Cost effective'
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title='Bit pricier'
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title='Big spender'
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;