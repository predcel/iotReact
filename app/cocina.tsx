import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from "react-native";
import { Avatar } from '@rneui/themed';
import { Text } from '@rneui/themed';

export default function Cocina() {
    return (
        <ScrollView>
            <View style={estilos.renglon}>
                <Avatar
                    size={200}
                    rounded
                    icon={{ name: 'kitchen', type: 'material', color: '#009688' }}
                    containerStyle={{
                        borderColor: 'grey',
                        borderStyle: 'solid',
                        borderWidth: 3,
                    }} />
            </View>            
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    basicStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    header: {
        backgroundColor: "#2089ff",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10,
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 1,
        marginBottom: 10,
        paddingHorizontal: 20
    },
    view: {
        margin: 10,
    },
    espacioDerecho: {
        marginRight: 10
    },
    espacioIzquierdo: {
        marginLeft: 10
    },
    renglon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 30,
    }
});