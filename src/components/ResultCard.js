import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultCard = ({image_url, name, rating, review_count}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: image_url}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.details}>{`${rating} Stars, ${review_count} Reviews`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginLeft: 15,
        marginVertical: 5
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    details: {
        color: '#d6d6d6'
    }
});

export default ResultCard;