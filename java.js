
        const gamesData = [
            {
                id: 1,
                name: "Kokpar",
                description: "A thrilling equestrian sport where horseback riders compete to grab a goat carcass and carry it to a goal",
                category: "equestrian",
                era: "Ancient",
                difficulty: "Advanced",
                image: "horse",
                rules: "Two teams of riders compete to grab the kokpar (goat carcass) and carry it to their team's goal. Riders must stay mounted while wrestling opponents for possession. The team with the most goals wins. Physical contact between horses and riders is allowed, making it an intense competition.",
                equipment: "Horses trained for the sport, traditional saddles, protective gear for riders, and the kokpar itself. Modern versions may use leather sacks filled with sand instead of actual carcasses.",
                cultural: "Kokpar developed from ancient hunting practices and symbolizes the warrior spirit of nomadic Kazakhs. It was essential for training riders in strength, strategy, and horsemanship. Today, it's a major sporting event during celebrations like Nauryz."
            },
            {
                id: 2,
                name: "Kazakh Kuresi",
                description: "Traditional belt wrestling where opponents aim to throw each other to the ground using strategic grips and techniques",
                category: "wrestling",
                era: "Medieval",
                difficulty: "Intermediate",
                image: "wrestling",
                rules: "Wrestlers wear special belts and must grip their opponent's belt with both hands. The goal is to throw the opponent onto their back. Matches are best of three rounds. Leg grabs, trips, and throws are allowed, but strikes are forbidden. Victory goes to the wrestler who scores two clean throws.",
                equipment: "Special wrestling belts (kur), wrestling shorts or traditional attire, and a soft ground surface or wrestling mat.",
                cultural: "Kuresi has been practiced for over 2,000 years and was essential for building strength among nomadic warriors. It teaches discipline, respect, and physical prowess. Champions are highly respected in Kazakh society."
            },
            {
                id: 3,
                name: "Togyz Kumalak",
                description: "An ancient strategic board game played with 162 balls, requiring mathematical thinking and tactical planning",
                category: "strategy",
                era: "Ancient",
                difficulty: "Beginner",
                image: "board",
                rules: "Players take turns distributing balls from their holes into subsequent holes in a counter-clockwise direction. When the last ball lands in a hole with an even number of balls, the player captures them. The goal is to collect the most balls and create 'tuzdiks' (special holes). First to 82 balls wins.",
                equipment: "A wooden board with 18 holes (9 per player) and 162 small balls, traditionally made from sheep droppings or stones.",
                cultural: "Togyz Kumalak sharpens mathematical skills and strategic thinking. Elders played it to pass wisdom to younger generations. It's considered the intellectual counterpart to physical sports and is still played in homes and competitions today."
            },
            {
                id: 4,
                name: "Audaryspak",
                description: "Horseback wrestling where riders attempt to pull their opponent from their horse while staying mounted",
                category: "equestrian",
                era: "Ancient",
                difficulty: "Advanced",
                image: "horse",
                rules: "Two riders on horseback face each other and attempt to pull their opponent off their horse while remaining mounted. Gripping the opponent's belt, arms, or clothing is allowed. The first rider to dismount their opponent or make them touch the ground wins. Matches can be single elimination or best of three.",
                equipment: "Well-trained horses, traditional or sport saddles, and protective clothing for riders.",
                cultural: "Audaryspak trained warriors for mounted combat and developed balance and strength. It symbolizes the intimate connection between Kazakh people and their horses, central to nomadic life."
            },
            {
                id: 5,
                name: "Kyz Kuu",
                description: "A romantic horseback chase where a young man pursues a young woman, with playful consequences for winner and loser",
                category: "equestrian",
                era: "Traditional",
                difficulty: "Intermediate",
                image: "horse",
                rules: "A young woman rides ahead while a young man chases her on horseback. If he catches her before the finish line, he may kiss her. If she reaches the finish first, she can playfully whip him with a riding crop. The race tests riding skill and adds entertainment to celebrations.",
                equipment: "Two fast horses, traditional riding attire, and a riding crop (kamchi) for the woman.",
                cultural: "Kyz Kuu celebrates courtship traditions and gender dynamics in Kazakh culture. It showcases the horsemanship skills valued in both men and women and adds festive joy to weddings and celebrations."
            },
            {
                id: 6,
                name: "Alaman Baiga",
                description: "An extreme long-distance cross-country horse race spanning 25-100 kilometers across challenging terrain",
                category: "equestrian",
                era: "Ancient",
                difficulty: "Expert",
                image: "horse",
                rules: "Riders race across vast distances of steppe terrain without a marked path. The first to reach the finish line wins. There are minimal rules - riders navigate natural obstacles, rivers, and hills. Endurance of both horse and rider is tested. Races can last several hours.",
                equipment: "Endurance-trained horses, lightweight saddles, navigation skills, and provisions for the long journey.",
                cultural: "Alaman Baiga reflects the nomadic lifestyle where covering vast distances on horseback was essential. It celebrates the legendary Kazakh horses known for endurance and speed. Winners gain tremendous respect and prestige."
            },
            {
                id: 7,
                name: "Asyk Atu",
                description: "A skill-based game where players flick sheep ankle bones to hit a target, testing precision and concentration",
                category: "strategy",
                era: "Ancient",
                difficulty: "Beginner",
                image: "game",
                rules: "Players take turns flicking an asyk (sheep ankle bone) to knock down other asyks arranged as targets. Points are scored based on which side the knocked asyk lands on (each side has different values). Players compete to reach a set score first. Distance and accuracy determine success.",
                equipment: "Sheep ankle bones (asyks), which are cleaned, dried, and sometimes decorated or weighted.",
                cultural: "Asyk Atu was traditionally played by children and adults to develop hand-eye coordination and focus. The bones connect players to pastoral heritage. It remains popular in schools and festivals as a cultural teaching tool."
            },
            {
                id: 8,
                name: "Arkan Tartys",
                description: "Traditional tug-of-war where two teams pull on a rope, demonstrating collective strength and teamwork",
                category: "team",
                era: "Traditional",
                difficulty: "Beginner",
                image: "rope",
                rules: "Two teams of equal size grab opposite ends of a rope. At the signal, both teams pull with all their strength. The team that pulls the opposing team across a center line wins. Strategy involves coordination, timing, and synchronized pulling. Best of three rounds is common.",
                equipment: "A strong rope (traditionally made from horsehair or leather) and flat, stable ground.",
                cultural: "Arkan Tartys emphasizes community cooperation and collective effort, values central to nomadic life. It's played at festivals and gatherings to build unity and friendly competition between villages or groups."
            },
            {
                id: 9,
                name: "Jamby Atu",
                description: "An archery competition where mounted or standing archers shoot at targets while moving, testing precision under pressure",
                category: "equestrian",
                era: "Medieval",
                difficulty: "Advanced",
                image: "archery",
                rules: "Archers shoot at targets while riding past on horseback or from a standing position. Points are awarded based on accuracy and speed. Traditional versions use targets at varying distances. Mounted archery requires shooting while maintaining control of the horse. The highest score wins.",
                equipment: "Traditional Kazakh bows and arrows, targets (often decorated), and horses for mounted versions.",
                cultural: "Jamby Atu honed the archery skills vital for hunting and warfare. It represents the precision and discipline of Kazakh warriors. Today it preserves ancient techniques and connects participants to ancestral traditions."
            },
            {
                id: 10,
                name: "Kures on Horseback",
                description: "A combination of wrestling and horsemanship where riders grapple while maintaining control of their mounts",
                category: "equestrian",
                era: "Ancient",
                difficulty: "Expert",
                image: "wrestling-horse",
                rules: "Similar to Audaryspak but with specific wrestling techniques. Riders must use traditional belt-wrestling grips while mounted. The goal is to unbalance the opponent and make them fall or dismount. Horses must be controlled with legs only, as hands are used for wrestling. Matches have time limits.",
                equipment: "Wrestling belts, trained horses comfortable with close contact, and protective gear.",
                cultural: "This rare variant combines two major Kazakh traditions - horsemanship and wrestling. It showcases supreme skill and is performed by master athletes during major celebrations. It symbolizes the pinnacle of nomadic warrior abilities."
            }
        ];

        const gamesGrid = document.getElementById('gamesGrid');
        const searchBox = document.getElementById('searchBox');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const modal = document.getElementById('modal');
        const closeModalBtn = document.getElementById('closeModal');
        const themeToggle = document.getElementById('themeToggle');
        const noResults = document.getElementById('noResults');

        let currentFilter = 'all';
        let searchTerm = '';

        function getGameIcon(imageType) {
            const icons = {
                horse: '<svg viewBox="0 0 100 100" fill="white"><path d="M30 80 L30 50 Q30 30 50 30 Q70 30 70 50 L70 80 M50 30 L50 20 L45 10 L50 15 L55 10 Z"/><circle cx="45" cy="35" r="2"/></svg>',
                wrestling: '<svg viewBox="0 0 100 100" fill="white"><circle cx="35" cy="25" r="8"/><circle cx="65" cy="25" r="8"/><path d="M35 35 L30 60 L35 80 M35 35 L40 60 M65 35 L60 60 L55 80 M65 35 L70 60"/></svg>',
                board: '<svg viewBox="0 0 100 100" fill="white"><rect x="20" y="30" width="60" height="40" stroke="white" fill="none" stroke-width="2"/><circle cx="35" cy="45" r="4"/><circle cx="50" cy="45" r="4"/><circle cx="65" cy="45" r="4"/><circle cx="35" cy="60" r="4"/><circle cx="50" cy="60" r="4"/><circle cx="65" cy="60" r="4"/></svg>',
                game: '<svg viewBox="0 0 100 100" fill="white"><polygon points="50,20 60,40 80,45 65,60 70,80 50,70 30,80 35,60 20,45 40,40"/></svg>',
                rope: '<svg viewBox="0 0 100 100" fill="white"><path d="M20 50 Q30 40 40 50 Q50 60 60 50 Q70 40 80 50" stroke="white" fill="none" stroke-width="4"/><circle cx="20" cy="50" r="5"/><circle cx="80" cy="50" r="5"/></svg>',
                archery: '<svg viewBox="0 0 100 100" fill="white"><path d="M20 50 Q20 30 30 20 L30 80 Q20 70 20 50 Z" stroke="white" fill="white"/><line x1="70" y1="50" x2="35" y2="50" stroke="white" stroke-width="2"/><polygon points="70,50 75,48 75,52"/></svg>',
                'wrestling-horse': '<svg viewBox="0 0 100 100" fill="white"><path d="M30 80 L30 55 Q30 40 45 40 L50 30 L55 40 Q70 40 70 55 L70 80"/><circle cx="40" cy="30" r="6"/><circle cx="60" cy="30" r="6"/></svg>'
            };
            return icons[imageType] || icons.game;
        }

        function renderGames(games) {
            if (games.length === 0) {
                gamesGrid.classList.add('hidden');
                noResults.classList.remove('hidden');
                return;
            }

            gamesGrid.classList.remove('hidden');
            noResults.classList.add('hidden');

            gamesGrid.innerHTML = games.map(game => `
                <article class="game-card" data-game-id="${game.id}" tabindex="0" role="article" aria-label="${game.name}">
                    <div class="game-image" aria-hidden="true">
                        ${getGameIcon(game.image)}
                    </div>
                    <div class="game-content">
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                        <div class="game-tags" role="list">
                            <span class="tag" role="listitem">${game.era}</span>
                            <span class="tag" role="listitem">${game.difficulty}</span>
                        </div>
                        <button class="learn-more-btn" aria-label="Learn more about ${game.name}">
                            Learn More
                        </button>
                    </div>
                </article>
            `).join('');

            attachCardListeners();
        }

        function attachCardListeners() {
            const cards = document.querySelectorAll('.game-card');
            cards.forEach(card => {
                const btn = card.querySelector('.learn-more-btn');
                const gameId = parseInt(card.dataset.gameId);

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(gameId);
                });

                card.addEventListener('click', () => openModal(gameId));

                card.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(gameId);
                    }
                });
            });
        }

        function openModal(gameId) {
            const game = gamesData.find(g => g.id === gameId);
            if (!game) return;

            document.getElementById('modalTitle').textContent = game.name;
            document.getElementById('modalBody').innerHTML = `
                <div class="modal-section">
                    <p><strong>Category:</strong> ${game.category.charAt(0).toUpperCase() + game.category.slice(1)} |
                    <strong>Era:</strong> ${game.era} |
                    <strong>Difficulty:</strong> ${game.difficulty}</p>
                </div>
                <div class="modal-section">
                    <h3>Description</h3>
                    <p>${game.description}</p>
                </div>
                <div class="modal-section">
                    <h3>Rules & Gameplay</h3>
                    <p>${game.rules}</p>
                </div>
                <div class="modal-section">
                    <h3>Equipment Needed</h3>
                    <p>${game.equipment}</p>
                </div>
                <div class="modal-section">
                    <h3>Cultural Significance</h3>
                    <p>${game.cultural}</p>
                </div>
            `;

            modal.classList.add('active');
            closeModalBtn.focus();
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        closeModalBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
                currentFilter = btn.dataset.category;
                filterGames();
            });
        });

        searchBox.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterGames();
        });

        function filterGames() {
            let filtered = gamesData;

            if (currentFilter !== 'all') {
                filtered = filtered.filter(game => game.category === currentFilter);
            }

            if (searchTerm) {
                filtered = filtered.filter(game =>
                    game.name.toLowerCase().includes(searchTerm) ||
                    game.description.toLowerCase().includes(searchTerm) ||
                    game.category.toLowerCase().includes(searchTerm)
                );
            }

            renderGames(filtered);
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        });

        renderGames(gamesData);
 