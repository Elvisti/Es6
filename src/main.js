class Api{
    constructor(){
        this.repositories = []

        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input')
        this.ulEl = document.getElementById('repo-list')

        this.registerHandler()
    }

    registerHandler(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
        if(loading === true){
            let loadEl = document.createElement('span')
            loadEl.appendChild(document.createTextNode('Carregando...'))
            loadEl.setAttribute('id', 'loading') // atributo para poder remover

            this.formEl.appendChild(loadEl)
        }else{
            document.getElementById('loading').remove()
        }
    }

    async  addRepository(event){
        event.preventDefault()
        const repoInput = this.inputEl.value

        if(repoInput.length === 0){
            return
        }
        
        this.setLoading()
        try {
            const response = await fetch(`https://api.github.com/repos/${repoInput}`)
            if(response.status === 200){
                const json = await response.json()
                console.log(json);
                
            
                const {name, description, owner: {avatar_url}, html_url} = json
                
                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url
                })
            }else{
                alert('Erro na requisição!')
                console.warn('Erro na requisição')
            }
            this.inputEl.value = ''
    
            this.render()
            
        } catch (error) {
            alert('Erro na requisição!')
        }
       
        this.setLoading(false)
    }

    render(){
        this.ulEl.innerHTML = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listEl = document.createElement('li')
            listEl.appendChild(imgEl)
            listEl.appendChild(titleEl)
            listEl.appendChild(descriptionEl)
            listEl.appendChild(linkEl)

            this.ulEl.appendChild(listEl)
        })
    }

}

new Api()