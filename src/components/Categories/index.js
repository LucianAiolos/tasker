import React from 'react'
import { Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  console.log("in categories: ", categories)
  console.log('hi')
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -24, marginTop: 24}}
      renderItem={({item, index }) => {
        const selected = selectedCategory === item?.value
        const displayName = item?.label;

        return (
          <TouchableOpacity
            onPress={()=> onCategoryPress(item?.value)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {} ,
              index === 0 ? {marginLeft: 24} : null,
            ]}>
              <Text style={[styles.item, selected ? styles.selectedItem : null]}>
                {displayName}
              </Text>
            </TouchableOpacity>
        )
      }}
    />
  )
}

export default React.memo(Categories)