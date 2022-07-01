document.form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const answer = event.target.input.value;
  
  const res = await fetch(`/js/:id`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ answer }),
  })
  
})
