//          Json file...
            

const jsonData = {
        "articles": [
          {
            "id": 1,
            "title": "New Study Reveals Surprising Health Benefits of Coffee",
            "date": "2024-10-15",
            "category": "Health",
            "content": "A new study published this week has found that drinking coffee may have numerous health benefits. The study, conducted over ten years, tracked the health outcomes of 10,000 participants who consumed coffee regularly...",
            "views": 150,
            "wordCount": 500
          },
          {
            "id": 2,
            "title": "Tech Giants Announce Collaboration on AI Safety Standards",
            "date": "2024-11-01",
            "category": "Technology",
            "content": "In a groundbreaking move, several major tech companies have come together to develop common standards for artificial intelligence safety. This collaboration aims to address ethical and security concerns around the rapid development of AI...",
            "views": 300,
            "wordCount": 650
          },
          {
            "id": 3,
            "title": "Local Art Fair Brings Creativity to the Community",
            "date": "2024-09-22",
            "category": "Arts",
            "content": "This year's local art fair saw a record attendance as artists and creators gathered to display their works. From paintings to sculptures and everything in between, the fair offered a vibrant display of community creativity...",
            "views": 85,
            "wordCount": 400
          },
          {
            "id": 4,
            "title": "Experts Predict Economic Trends for 2025",
            "date": "2024-10-05",
            "category": "Finance",
            "content": "With 2025 on the horizon, financial experts have released their predictions for economic trends that may shape the upcoming year. Topics range from inflation rates and job markets to the potential impact of technological advancements...",
            "views": 220,
            "wordCount": 700
          },
          {
            "id": 5,
            "title": "Climate Change and the Future of Renewable Energy",
            "date": "2024-11-02",
            "category": "Environment",
            "content": "As climate change continues to be a pressing global issue, renewable energy sources are becoming increasingly important. Experts believe that the shift to renewable energy could not only mitigate environmental impacts but also drive economic growth...",
            "views": 400,
            "wordCount": 800
          },
          {
            "id": 6,
            "title": "Breakthroughs in Cancer Research Offer New Hope",
            "date": "2024-08-30",
            "category": "Health",
            "content": "Recent breakthroughs in cancer research have led to promising new treatments that may improve survival rates for several types of cancer. Researchers are optimistic about these advancements, though caution that more studies are needed...",
            "views": 130,
            "wordCount": 550
          },
          {
            "id": 7,
            "title": "Guide to Traveling on a Budget in 2025",
            "date": "2024-10-20",
            "category": "Travel",
            "content": "With travel becoming more accessible post-pandemic, many people are looking for ways to explore the world on a budget. From tips on finding affordable accommodations to advice on saving money on flights, this guide is perfect for travel enthusiasts...",
            "views": 90,
            "wordCount": 450
          },
          {
            "id": 8,
            "title": "The Rise of Electric Vehicles in the Automotive Industry",
            "date": "2024-09-15",
            "category": "Automotive",
            "content": "Electric vehicles are gaining popularity worldwide as consumers seek eco-friendly alternatives to traditional gasoline-powered cars. Automakers are racing to meet this demand by introducing a variety of new electric models to the market...",
            "views": 250,
            "wordCount": 600
          },
          {
            "id": 9,
            "title": "How Meditation Can Improve Mental Health",
            "date": "2024-11-04",
            "category": "Health",
            "content": "In a fast-paced world, meditation is increasingly recognized as a powerful tool for managing stress and improving mental health. Studies suggest that regular meditation can lead to reduced anxiety, better focus, and improved emotional regulation...",
            "views": 175,
            "wordCount": 500
          },
          {
            "id": 10,
            "title": "The Impact of Social Media on Modern Relationships",
            "date": "2024-10-12",
            "category": "Society",
            "content": "Social media has changed the way people connect, but what impact does it have on relationships? Experts say that while social media can strengthen bonds, it can also create misunderstandings and increase anxiety among users...",
            "views": 205,
            "wordCount": 550
          },
          {
            "id":11,
            "title":"The Rise of Electric Vehicles in the Automotive Industry",
            "date": "2024-10-13",
            "category":"Arts",
            "content": "consectetur adipisicing elit. Error dolor veniam ea nisi nemo recusandae ipsa optio perferendis alias, cumque, reiciendis quasi commodi velit, unde mollitia repellat cupiditate ab? Eveniet!",
            "views": 590,
            "wordCount":600
          },
          {
            "id":12,
            "title":"The Rise of Electric Vehicles in the Automotive Industry",
            "date": "2024-10-15",
            "category":"Arts",
            "content": "consectetur adipisicing elit. Error dolor veniam ea nisi nemo recusandae ipsa optio perferendis alias, cumque, reiciendis quasi commodi velit, unde mollitia repellat cupiditate ab? Eveniet!",
            "views": 100,
            "wordCount":300
          }
        ]

};

async function fetchArticles() {
    try {
        const articles = jsonData.articles; // Use the local JSON data
        displayArticles(articles);
        displayMostPopular(articles);

        // Sorting functionality
        document.getElementById('sort-select').addEventListener('change', (event) => {
            const sortBy = event.target.value;
            const sortedArticles = [...articles].sort((a, b) => {
                if (sortBy === 'popularity') {
                    return b.views - a.views;
                } else if (sortBy === 'date') {
                    return new Date(b.date) - new Date(a.date);
                }
                return 0;
            });
            displayArticles(sortedArticles);
        });
    } catch (error) {
        console.error("Unable to fetch articles:", error);
    }
}

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'col-md-4';
        const readingTime = Math.ceil(article.wordCount / 200);

        articleCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.content.substring(0, 100)}...</p>
                    <p class="card-text text-secondary">Views: ${article.views} | Reading Time: ${readingTime} min</p>
                    <a href="#" class="btn btn-info">Read More</a>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleCard);
    });
}

function displayMostPopular(articles) {
    const popularTitle = document.getElementById('popular-title');
    const mostPopularArticle = articles.reduce((max, article) => article.views > max.views ? article : max);
    if (mostPopularArticle) {
        popularTitle.style.display = 'block';
        document.getElementById('popular-article').textContent = mostPopularArticle.title;
    }
}

// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredArticles = jsonData.articles.filter(article => 
        article.title.toLowerCase().includes(searchInput) || 
        article.category.toLowerCase().includes(searchInput)
    );
    displayArticles(filteredArticles);
    document.getElementById('popular-title').style.display = filteredArticles.length ? 'none' : 'block';
});

// Theme toggle with localStorage persistence
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = isDarkMode ? '🔆' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Apply theme on load based on localStorage
window.addEventListener('load', () => { 
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').textContent = '🔆';
    }
});

// Load articles initially
fetchArticles();
