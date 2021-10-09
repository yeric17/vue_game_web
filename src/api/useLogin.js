import {ref} from 'vue'
const CryptoJS = require("crypto-js");

let isAuthenticated = ref(false)

const useLogin = () =>{    
    const Login = async(email, password)=>{
        if(localStorage.getItem('token')){
            isAuthenticated.value = true
            return
        }
        let encrypted = EncriptPassword("0123456789abcdef0123456789abcdef",password)
        
        let url = `http://localhost/Ejercicios/public/api/users.php?email=${email}&password=${JSON.stringify(encrypted)}`
        

        let response = await fetch(url)
        
        let data = await response.json()
        
        isAuthenticated.value = data.status === 200

        if(isAuthenticated){
            localStorage.setItem('token', JSON.stringify(data.data[0]))
        }
    }
    const CreateUser = async(name, email, password)=>{
        let encrypted = EncriptPassword("0123456789abcdef0123456789abcdef",password)
        let user = {
            name: name,
            email: email,
            password: encrypted
        }
        let url = `http://localhost/Ejercicios/public/api/users.php`
        let response = await fetch(url,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })

        let data = await response.json()

        return data
    }

    const EncriptPassword = function(frase, pass){
        let salt = CryptoJS.lib.WordArray.random(256);
        let iv = CryptoJS.lib.WordArray.random(16);
    
        let key = CryptoJS.PBKDF2(frase,salt,{
            hasher: CryptoJS.algo.SHA512,
            keySize: 64/8,
            iterations: 999
        });
    
        let encrypted = CryptoJS.AES.encrypt(pass, key,{iv:iv});
    
        let data = {
            ciphertext:CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
            salt: CryptoJS.enc.Hex.stringify(salt),
            iv: CryptoJS.enc.Hex.stringify(iv)
        }
    
        return data;
    }
    return {
        isAuthenticated,
        CryptoJS,
        Login,
        CreateUser
    }
}

export default useLogin