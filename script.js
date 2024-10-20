//tabs logic
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {
            t.classList.remove('active');
            t.querySelector('.tab-content').style.display = 'none';
        });
        tab.classList.add('active');
        tab.querySelector('.tab-content').style.display = 'flex';
    });
});

document.querySelector('.tab-content').style.display = 'flex';
for (let i = 1; i < tabs.length; i++) {
    tabs[i].querySelector('.tab-content').style.display = 'none';
}

// iframes
function showIframe(url, section) {
    const iframe = document.getElementById(section + '-iframe');
    
    iframe.src = url;
    
    iframe.style.display = 'block';
}

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const url = this.getAttribute('data-url');  
        const section = this.getAttribute('data-section'); 
        
        showIframe(url, section);
    });
})



lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fitImagesInViewport': true
  })

  
  function showSketch(url) {
    document.getElementById('sketch-frame').src = url;}
