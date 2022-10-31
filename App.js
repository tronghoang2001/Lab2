/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import listIcon from './data/listIcon';

const App = () => {
  const renderListIcon = item => {
    return (
      <TouchableOpacity key={item.id} style={styles.buttonIcon}>
        <Icon style={styles.icon} name={item.nameIcon} />
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{listIcon?.map(renderListIcon)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonIcon: {
    backgroundColor: '#FE9953',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icon: {
    fontSize: 40,
  },
});

export default App;

// export default function App() {
//   useEffect(() => {
//     const endpoint = 'https://countries.trevorblades.com/graphql';
//     const headers = {
//       'content-type': 'application/json',
//     };
//     const graphqlQuery = {
//       query: `query{
//         country(code:"BR"){
//           name
//           code
//           native
//         }
//       }`,
//       variables: {},
//     };

//     const options = {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(graphqlQuery),
//     };
//     fetch(endpoint, options)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//       });
//   }, []);

//   return <View></View>;
// }
