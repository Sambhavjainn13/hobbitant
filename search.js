document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.querySelector('.search-container input');
    
    // Sample hobby data
    const hobbies = [
        { name: 'Photography', category: 'art' },
        { name: 'Watercolor Painting', category: 'art' },
        { name: 'Guitar', category: 'music' },
        { name: 'Italian Cooking', category: 'cooking' },
        { name: 'Pottery', category: 'craft' }
    ];
    
    // Sample tutors data
    const tutors = [
        { name: 'Sarah Johnson', expertise: 'Painting' },
        { name: 'Mike Chen', expertise: 'Photography' },
        { name: 'Emma Davis', expertise: 'Cooking' }
    ];
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        if (query.trim() === '') return;
        
        // In a real app, this would search an actual database
        const hobbyResults = hobbies.filter(hobby => 
            hobby.name.toLowerCase().includes(query)
        );
        
        const tutorResults = tutors.filter(tutor => 
            tutor.name.toLowerCase().includes(query) || 
            tutor.expertise.toLowerCase().includes(query)
        );
        
        // Display results (simplified for this example)
        alert(`Found ${hobbyResults.length} hobbies and ${tutorResults.length} tutors matching "${query}"`);
    });
    
    // Allow search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});