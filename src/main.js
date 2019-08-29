class api {
    static async getUser (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if(response.status === 200){
                const data = await response.json()
                console.log(data);
            }else{
                console.warn('Erro na API')
            }

            
              
        } catch (error) {

            console.warn(error)   
        }
        
    }
}

api.getUser('Elvisti')