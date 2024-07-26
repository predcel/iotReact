import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Avatar } from '@rneui/themed';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';

export default function Living() {
    return (
        <ScrollView>
            
            <View style={estilos.basicStyle}>
                <Text>Bienvenido a la APP</Text>
            </View>            
        </ScrollView>

    );
}

const estilos = StyleSheet.create({
    contentView: {
        flex: 1,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    basicStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    renglon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 50,
    }
});