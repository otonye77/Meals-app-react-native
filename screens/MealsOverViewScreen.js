import { View, FlatList, StyleSheet } from "react-native";
import MealItems from "../components/MealItems";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    const displayItems  = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData){
        return (
            <MealItems title={itemData.item.title} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
             data={displayItems}
             keyExtractor={(item) => item.id}
             renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})