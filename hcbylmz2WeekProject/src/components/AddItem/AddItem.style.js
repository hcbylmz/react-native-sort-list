import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between',
padding:20,
},
  inputContainer: {flex:1,},
  listContainer: {flex: 2,},

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
    marginBottom: 10,
    paddingBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  showItemPrice: {

  },
});
