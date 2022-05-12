
import React, { useState } from "react";
import { View, Button, Text, Dimensions, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { BarChart } from "react-native-chart-kit";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { firebase } from "@react-native-firebase/auth";


/*const expenseName = firestore().collection('expenseInfo').doc('d').get("name");
const expenseCost = firestore().collection('expenseInfo').doc('d').get("amount");
const data = [expenseName, expenseCost];*/


const SpendingPage = () => {

    const db = firebase.firestore()

    db.collection('expenseTest').get().then(querySnapshot => {
            const labels = []
            snapshot.docs.forEach((doc) => {
                labels.push({...doc.data('Category')})
            });
        })

    db.collection('expenseTest').get().then(querySnapshot => {
            const costs = []
            snapshot.docs.forEach((doc) => {
                costs.push({...doc.data('Cost')})
            });
        })
    

    return (


        <View >
            <Text style={{
                alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 30,
                marginTop: 10, marginBottom: 0, left: 10, marginLeft: 110, marginRight: 98, borderRadius: 50
            }}>
                Spending View Visual+List</Text>

            <BarChart
                data={{
                  //labels: ["Food", "Entertainment", "Transportation", "Shopping"],
                 // labels: data[expenseName],
                    labels,
                    datasets: [
                        {
                            costs
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                fromZero

                yAxisLabel="$"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#a95aec",
                    backgroundGradientFrom: "#a95aec",
                    backgroundGradientTo: "#a95aec",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>




    );


};

export default SpendingPage;