import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TextInput, View } from 'react-native';
import styles from './styles';
import ButtonText from '../../components/ButtonText';
import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchBook from '../../config/Query/query';
import AppStyles from '../../config/styles';
import { calcHeight } from '../../config/metrics';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Start = () => {
  const [search, setSearch] = useState('')
  const { data: books, isLoading } = useQuery(search, fetchBook)

  //Render
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={styles.container}>
      <ButtonText
        buttonContainer={styles.headerContainer}
        textStyle={styles.headerText}
        text={'Agile Tech Task'}
        disabled
      />
      <TextInput
        value={search}
        onChangeText={(text) => {
          let tempText = text.replace(/[^\d ]/g, '')
          setSearch(tempText)
        }}
        placeholder={'Search Books by ISBN'}
        style={styles.searchContainer}
        keyboardType={'numeric'}
      />
      <Text style={styles.hintText} >Hint: To search for more than 1 book, separate numbers with backspace</Text>
      {!isLoading ? <FlatList
        data={books}
        contentContainerStyle={styles.contactsContainer}
        keyboardShouldPersistTaps={'handled'}
        keyExtractor={item => item.key}
        ListEmptyComponent={

          <Text style={styles.noBooksFound} >{search == '' ? 'Please enter ISBN' : 'No Books found'}</Text>
        }
        renderItem={({ item, index }) =>
          <View style={styles.bookContainer} >
            <Image style={styles.coverImage}
              resizeMode={'stretch'}
              source={{
                uri: item.covers ?
                  `https://covers.openlibrary.org/b/id/${item.covers[0]}-L.jpg` :
                  'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'
              }} />
            <View>
              <Text numberOfLines={2} style={styles.title} >{item.title}</Text>
              {item.number_of_pages && <Text style={styles.pages} >Pages: {item.number_of_pages}</Text>}
              {item.publish_date && <Text style={styles.pages} >Publish Date: {item.publish_date}</Text>}
            </View>
          </View>
        }
      /> : <ActivityIndicator style={{ marginTop: calcHeight(200) }} size={'large'} color={AppStyles.Color.WHITE} />}
    </KeyboardAwareScrollView>
  );
};
export default Start;