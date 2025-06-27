// Zodiac signs data
        const zodiacSigns = [
            { name: "Capricorn", start: [12, 22], end: [1, 19], emoji: "♑" },
            { name: "Aquarius", start: [1, 20], end: [2, 18], emoji: "♒" },
            { name: "Pisces", start: [2, 19], end: [3, 20], emoji: "♓" },
            { name: "Aries", start: [3, 21], end: [4, 19], emoji: "♈" },
            { name: "Taurus", start: [4, 20], end: [5, 20], emoji: "♉" },
            { name: "Gemini", start: [5, 21], end: [6, 20], emoji: "♊" },
            { name: "Cancer", start: [6, 21], end: [7, 22], emoji: "♋" },
            { name: "Leo", start: [7, 23], end: [8, 22], emoji: "♌" },
            { name: "Virgo", start: [8, 23], end: [9, 22], emoji: "♍" },
            { name: "Libra", start: [9, 23], end: [10, 22], emoji: "♎" },
            { name: "Scorpio", start: [10, 23], end: [11, 21], emoji: "♏" },
            { name: "Sagittarius", start: [11, 22], end: [12, 21], emoji: "♐" }
        ];

        // Gen Z traits
        const genZTraits = [
            "Independent", "Skeptical", "Adaptable", "Tech-savvy", "Entrepreneurial",
            "Authentic", "Inclusive", "Creative", "Pragmatic", "Resilient",
            "Socially conscious", "Ambitious", "Self-reliant", "Open-minded", "Resourceful"
        ];

        // Flowers and colors
        const aestheticPairs = [
            { flower: "Moonlit Orchid", color: "Lavender Dusk" },
            { flower: "Starlight Peony", color: "Rose Gold" },
            { flower: "Twilight Jasmine", color: "Midnight Blue" },
            { flower: "Dawn Chrysanthemum", color: "Soft Coral" },
            { flower: "Ethereal Lily", color: "Pearl White" },
            { flower: "Mystic Rose", color: "Deep Burgundy" },
            { flower: "Celestial Dahlia", color: "Silver Mist" },
            { flower: "Enchanted Iris", color: "Amethyst Purple" },
            { flower: "Whispering Magnolia", color: "Sage Green" },
            { flower: "Dreaming Poppy", color: "Golden Amber" },
            { flower: "Sacred Lotus", color: "Blush Pink" },
            { flower: "Phantom Tulip", color: "Stormy Grey" }
        ];

        // Constellations with stories
        const constellations = [
            {
                name: "🦢 The Silent Swan",
                story: "Glides through twilight skies, carrying dreams between worlds. Those blessed by the Silent Swan move with grace through life's mysteries, finding beauty in quiet moments."
            },
            {
                name: "🌙 The Crescent Keeper",
                story: "Guards the secrets of the night, whispering ancient wisdom to those who listen. The Crescent Keeper bestows intuition and the ability to see beyond the veil."
            },
            {
                name: "⭐ The Wandering Phoenix",
                story: "Rises from stardust, eternal and radiant. Those under this constellation are blessed with resilience and the power to transform any ending into a beautiful beginning."
            },
            {
                name: "🦋 The Twilight Butterfly",
                story: "Dances between dimensions, painting the sky with cosmic colors. This constellation grants its children the gift of transformation and ethereal beauty."
            },
            {
                name: "🌺 The Blooming Crown",
                story: "A circle of celestial flowers that blooms once every thousand years. Those guided by this constellation are natural leaders who inspire growth in others."
            },
            {
                name: "🕊️ The Whispering Dove",
                story: "Carries messages between souls across the universe. This constellation blesses its children with deep empathy and the ability to heal hearts with words."
            },
            {
                name: "🦌 The Mystic Stag",
                story: "Roams the cosmic forests, leading lost souls to their destiny. Those born under this sign are natural guides and protectors of the innocent."
            },
            {
                name: "🌊 The Eternal Wave",
                story: "Flows through the cosmos, bringing change and renewal. This constellation grants its children the wisdom to embrace life's ebbs and flows with grace."
            }
        ];

        function getZodiacSign(birthdate) {
            const date = new Date(birthdate);
            const month = date.getMonth() + 1;
            const day = date.getDate();

            for (let sign of zodiacSigns) {
                const [startMonth, startDay] = sign.start;
                const [endMonth, endDay] = sign.end;

                if (
                    (month === startMonth && day >= startDay) ||
                    (month === endMonth && day <= endDay) ||
                    (startMonth > endMonth && (month === startMonth || month === endMonth))
                ) {
                    return sign;
                }
            }
            return zodiacSigns[0]; // Default to Capricorn
        }

        function getRandomElements(array, count) {
            const shuffled = array.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }

        function generateVibeReport(name, birthdate) {
            const zodiac = getZodiacSign(birthdate);
            const traits = getRandomElements(genZTraits, 3);
            const aesthetic = aestheticPairs[Math.floor(Math.random() * aestheticPairs.length)];
            const constellation = constellations[Math.floor(Math.random() * constellations.length)];

            const descriptions = [
                `${name} — a ${aesthetic.flower.toLowerCase()} kissed by ${aesthetic.color.toLowerCase()}. Your aura whispers of quiet rebellion and ancient wisdom. As a ${zodiac.name}, you ${getZodiacDescription(zodiac.name)}.`,
                `${name} — like a ${aesthetic.flower.toLowerCase()} blooming in ${aesthetic.color.toLowerCase()} twilight. Your essence dances between worlds, carrying the spirit of ${traits[0].toLowerCase()} grace. As a ${zodiac.name}, you ${getZodiacDescription(zodiac.name)}.`,
                `${name} — a mystical being wrapped in ${aesthetic.color.toLowerCase()} dreams and ${aesthetic.flower.toLowerCase()} petals. Your soul carries the wisdom of ages. As a ${zodiac.name}, you ${getZodiacDescription(zodiac.name)}.`
            ];

            return {
                name,
                description: descriptions[Math.floor(Math.random() * descriptions.length)],
                flower: aesthetic.flower,
                color: aesthetic.color,
                zodiac: `${zodiac.emoji} ${zodiac.name}`,
                traits: traits.join(", "),
                constellation
            };
        }

        function getZodiacDescription(sign) {
            const descriptions = {
                "Aries": "blaze trails with fierce determination",
                "Taurus": "find beauty in life's simple pleasures",
                "Gemini": "weave stories from stardust and moonbeams",
                "Cancer": "nurture dreams with tender devotion",
                "Leo": "shine with the radiance of a thousand suns",
                "Virgo": "craft perfection from cosmic chaos",
                "Libra": "balance the stars with ethereal grace",
                "Scorpio": "dive deep into life's hidden mysteries",
                "Sagittarius": "chase horizons beyond mortal sight",
                "Capricorn": "climb mountains made of moonlight",
                "Aquarius": "pour wisdom like celestial rain",
                "Pisces": "swim through oceans of infinite dreams"
            };
            return descriptions[sign] || "carry the magic of the cosmos";
        }

        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Set max date to today
            document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];
            
            document.getElementById('vibeForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value.trim();
                const birthdate = document.getElementById('birthdate').value;
                
                // Validation
                if (!name) {
                    alert('Please enter your name ✨');
                    return;
                }
                
                if (!birthdate) {
                    alert('Please select your birthdate 🌙');
                    return;
                }
                
                console.log('Generating report for:', name, birthdate); // Debug log
                
                const report = generateVibeReport(name, birthdate);
                
                console.log('Generated report:', report); // Debug log
                
                // Populate results
                document.getElementById('resultName').textContent = report.name;
                document.getElementById('resultDescription').textContent = report.description;
                document.getElementById('flowerTrait').textContent = report.flower;
                document.getElementById('colorTrait').textContent = report.color;
                document.getElementById('zodiacTrait').textContent = report.zodiac;
                document.getElementById('genZTraits').textContent = report.traits;
                document.getElementById('constellationName').textContent = report.constellation.name;
                document.getElementById('constellationStory').textContent = report.constellation.story;
                
                // Show results with animation
                const resultCard = document.getElementById('resultCard');
                setTimeout(() => {
                    resultCard.classList.add('show');
                    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            });
        });