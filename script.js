document.addEventListener('DOMContentLoaded', function() {
    

    
    const viewNewsButton = document.getElementById('viewNewsBtn'); 

    
    const newsSection = document.getElementById('latest-news-target'); 

    
    if (viewNewsButton && newsSection) {
        
        
        viewNewsButton.addEventListener('click', function(event) {
            
            
            event.preventDefault(); 
            
            
            newsSection.scrollIntoView({
                behavior: 'smooth' 
            });
        });
        
        console.log("Smooth scroll feature enabled.");
    } else {
        
        console.warn("Could not find required elements for smooth scroll (viewNewsBtn or latest-news-target).");
    }
});

 function openMatchTab(tabId, element) {
    
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("match-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    
    var tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    
    document.getElementById(tabId).style.display = "block";
    
    
    element.classList.add("active");
}


document.addEventListener('DOMContentLoaded', function() {
    
    var initialButton = document.querySelector('.tab-button');
    var initialContent = document.querySelector('.match-tab-content');

    if (initialButton && initialContent) {
        
        var tabcontent = document.getElementsByClassName("match-tab-content");
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        
        initialContent.style.display = "block";
        initialButton.classList.add('active');
    }
});