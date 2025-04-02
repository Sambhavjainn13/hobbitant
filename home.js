document.addEventListener('DOMContentLoaded', function() {
    const hobbyGrid = document.querySelector('.hobby-grid');
    
    const popularHobbies = [
        { name: 'Photography', icon: '📷' },
        { name: 'Painting', icon: '🎨' },
        { name: 'Guitar', icon: '🎸' },
        { name: 'Cooking', icon: '🍳' },
        { name: 'Gardening', icon: '🌱' },
        { name: 'Pottery', icon: '🏺' }
    ];
    
    popularHobbies.forEach(hobby => {
        const hobbyCard = document.createElement('div');
        hobbyCard.className = 'hobby-card';
        hobbyCard.innerHTML = `
            <div class="hobby-icon">${hobby.icon}</div>
            <h3>${hobby.name}</h3>
        `;
        hobbyGrid.appendChild(hobbyCard);
    });
});