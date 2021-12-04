import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  addItemContainer: {
  flex:1,
    backgroundColor:'red',
  },
  buttonContainer: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  }, buttonActive: {
    backgroundColor: 'gray',
    alignItems: 'center',
    width: 80,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5,
  },
  buttonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5,
  }
});
