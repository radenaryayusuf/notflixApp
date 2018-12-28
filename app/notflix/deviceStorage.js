import { AsyncStorage } from 'react-native'

const deviceStorage= {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch(error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    
    async getItem() {
        try{
            await AsyncStorage.getItem('id_token')
        } catch(error) {
            alert('ERROR WIll GET AsyncStorage TOken: '+ error.message)
        }
    }
};

export default deviceStorage;