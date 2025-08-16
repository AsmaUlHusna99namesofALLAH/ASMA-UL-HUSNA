document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const azkarContent = document.getElementById('azkar-content');

    if (languageSelect && azkarContent) {
        function loadContent(language) {
            let fileName;
            if (language === 'urdu') {
                fileName = 'azkar-urdu.html';
            } else if (language === 'english') {
                fileName = 'azkar-english.html';
            }
            
            fetch(fileName)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`File not found: ${response.status} ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(data => {
                    azkarContent.innerHTML = data;
                })
                .catch(error => {
                    console.error('There was a problem loading the content:', error);
                    azkarContent.innerHTML = '<p>Content could not be loaded. Please try again later.</p>';
                });
        }

        loadContent('urdu');

        languageSelect.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            loadContent(selectedLanguage);
        });
    }
});