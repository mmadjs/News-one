


    const search = document.querySelector('.search-body');
    const input = document.querySelector('.input');
    const iconbtn = document.querySelector('.icon-search');

    iconbtn.addEventListener('click' , function(){
        
        search.classList.toggle('active');
        input.focus();
    })
    
    function barsclick(){
        let bar = document.querySelector('.bar-icon');
        let menu1 = document.querySelector('.menu1');

        // alert('hi')
        menu1.classList.toggle("active");
        // menu1.style.display='none';
        // alert('ok')
    }