
import { checkUrl } from "./URL_checker"

const post_call = async (url = '', data = {}) => {
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(response)
    return await response.json()
  }

async function event_handler(event) {
    event.preventDefault()

    let form_url = document.getElementById('name').value
    console.log(form_url)
    if(checkUrl(form_url)){
    const returned_data = await post_call('http://localhost:8081/test-url', {
      form_url
    })
    console.log(returned_data)
    document.getElementById('text').innerHTML = JSON.stringify(returned_data.text)
    document.getElementById('score_tag').innerHTML = JSON.stringify(returned_data.score_tag)
    document.getElementById('agreement').innerHTML = JSON.stringify(returned_data.agreement)
    document.getElementById('subjectivity').innerHTML = JSON.stringify(returned_data.subjectivity)
    document.getElementById('confidence').innerHTML = JSON.stringify(returned_data.confidence)
    document.getElementById('irony').innerHTML = JSON.stringify(returned_data.irony)
}else{
    alert('false URL')
}
}

export { event_handler }