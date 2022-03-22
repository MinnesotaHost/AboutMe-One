    
        const images = document.querySelectorAll('.anim');

        observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.classList.add('animate-fade-in-down');
                }
                else {
                  entry.target.classList.remove('animate-fade-in-down');
                }
            })

        })

        images.forEach(image => {
            observer.observe(image)
        })
    