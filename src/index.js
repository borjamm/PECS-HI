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
                const i = document.createElement('i');
                i.classList.add('arrow');
                i.classList.add('down');
                linkShowMore.append(i);
            } else {
                while(linkShowMore.firstChild) { 
                    linkShowMore.removeChild(linkShowMore.firstChild); 
                }
                linkShowMore.textContent = 'Ver menos';
                const i = document.createElement('i');
                i.classList.add('arrow');
                i.classList.add('up');
                linkShowMore.append(i);
            }
        });
    }
});
