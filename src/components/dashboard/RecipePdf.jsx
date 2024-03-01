import React from 'react'

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const RecipePdf = (props) => {
    console.log(props)
  return (
    <>
    <Document>
        <Page>
            <View>

            <Text >{props.recipeDetails.recipeName}</Text>
            </View>
        </Page>
    </Document>
    </>
  )
}

export default RecipePdf