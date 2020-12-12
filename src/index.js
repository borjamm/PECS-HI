window.addEventListener('load', () => {
    let pathname = window.location.pathname;
    if (pathname.includes('details')) {
        const linkShowMore = document.getElementById('show-more');
        const descriptionMoreInformation = document.getElementById('show-description');
        linkShowMore.addEventListener('click', () => {
            descriptionMoreInformation.classList.toggle('open');
            if(linkShowMore && linkShowMore.textContent === 'Ver menos') {
                while(linkShowMore.firstChild){ 
                    linkShowMore.removeChild(linkShowMore.firstChild); 
                }
                linkShowMore.textContent = 'Ver más';
                const span = document.createElement('span');
                span.classList.add('bottom');
                linkShowMore.append(span);
            } else {
                while(linkShowMore.firstChild) { 
                    linkShowMore.removeChild(linkShowMore.firstChild); 
                }
                linkShowMore.textContent = 'Ver menos';
                const span = document.createElement('span');
                span.classList.add('top');
                linkShowMore.append(span);
            }
        });
    }
});
