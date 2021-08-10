import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderColor: 'black',
    elevation: 5,
    flex: 1,
    padding: 10,
  },
  description: {
    fontSize: 20,
  },
  image: {
    height: 300,
    marginVertical: 15,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  noImage: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1.25,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
    padding: 100,
    width: '100%',
  },
  title: {
    fontSize: 25,
  },
});
