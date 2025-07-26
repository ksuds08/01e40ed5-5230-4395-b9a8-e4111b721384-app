document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobRole = document.getElementById('jobRole').value;
    const skills = document.getElementById('skills').value;

    fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobRole, skills }),
    })
    .then(response => response.json())
    .then(data => {
        const resumeOutput = document.getElementById('resume-output');
        resumeOutput.querySelector('div').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        resumeOutput.classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
});