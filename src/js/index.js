function setLoading(isLoading) {
    const btnSpan = document.getElementById('generate-btn')

    if (isLoading) {
        btnSpan.innerHTML = 'Gerando Background ...'
    } else {
        btnSpan.innerHTML = 'Gerar Background Mágico'
    }

}

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.form-group')
    const textArea = document.getElementById('description')

    form.addEventListener('submit', async function (event) {
        event.preventDefault()

        const description = textArea.value.trim()

        if(!description){
            return
        }

        setLoading(true)

        try{

            const response = await fetch('link do n8n', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({description})
            })


        }catch{

        }finally{

        }

    })
})