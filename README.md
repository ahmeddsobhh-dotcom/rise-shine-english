# 🌅 Rise & Shine English

**AI-Powered English Learning Platform** — A revolutionary journey to master English, guided by AI, fueled by the psychology of success.

## ✨ Features

### 📚 7-Level English Course
| Level | Lessons | Focus |
|-------|---------|-------|
| 🌱 Beginner | 5 | Greetings, numbers, colors, family, daily routines |
| 🌟 Elementary | 5 | Food, weather, shopping, directions, hobbies |
| 🔥 Intermediate | 5 | Travel, health, technology, education, entertainment |
| 💪 Advanced | 5 | News, environment, career, society, science |
| 💼 Professional | 5 | Meetings, negotiations, presentations, emails, networking |
| 🎯 Interview Prep | 5 | Self-introduction, STAR method, technical interviews |
| 🎓 Academic | 5 | Essays, research, citations, critical analysis, thesis |

Each lesson includes an interactive **multiple-choice quiz** with instant feedback and scoring.

### 🧠 AI Motivation Messages
- Daily psychology-based motivational messages
- Typing animation effect
- 10 curated messages with Arabic translations
- Auto-rotates every 15 seconds

### 🎥 Psychology & Motivation Videos
- 10 hand-picked YouTube videos on success psychology
- Categories: Mindset, Motivation, Discipline, Resilience
- Embedded video player + external watch links

### 🕌 Prayer Times (Cairo, Egypt)
- Live prayer times via **Aladhan API**
- 3-layer fallback system:
  1. ✅ API (HTTP)
  2. ✅ Mathematical calculation (Egyptian Authority method)
  3. ✅ Monthly lookup table
- Live countdown to next prayer
- Hijri date display

### 📊 Progress Dashboard
- **Streak tracking** — current streak + best streak
- **Lesson progress** — completed / 35 with progress bar
- **Quiz scores** — percentage + correct/total
- **Writing sessions** — count
- **Pronunciation scores** — latest score, average, trend (📈📉➡️), sparkline chart
- **Daily Goals** — checkable items with settings modal
- **Badges** — earned / total with Achievements modal
- **Certificate** — downloadable PDF when all 35 lessons complete
- **CSV Export** — download study statistics

### ⏱️ Pomodoro Focus Timer
- 3 modes: **Focus** (25min), **Short Break** (5min), **Long Break** (15min)
- Start / Pause / Reset controls
- Session counter + daily stats
- Browser notification on completion

### 📖 Grammar Reference
- **12 English tenses** with examples and usage
- **Common mistakes** section
- Tabbed interface (Tenses / Mistakes)

### ✍️ Writing Practice
- 3 prompt categories: **Business Email**, **Interview**, **Academic Essay**
- Real-time word/character count
- AI feedback with scoring (0-100%)
- Writing history with score trends
- Tips and suggestions per category

### 💬 English AI Tutor (Chatbot)
- Built-in chatbot for English questions
- Quick reply buttons for common topics
- Bilingual (EN/AR)

### 📖 Reading Comprehension
- 6 short stories with comprehension questions
- Difficulty levels: Easy, Medium, Hard
- Multiple-choice questions per story

### 📅 Weekly Study Planner
- Calendar-based weekly planner
- Add / edit / delete study tasks
- Navigation between weeks
- Tasks persist in localStorage

### 🎮 Vocabulary Matching Game
- Match words to their meanings
- Streak tracking + best score
- Timer-based challenge

### 🗂️ Flashcards with Spaced Repetition
- 54 vocabulary words with IPA and example sentences
- **SM-2 algorithm** for optimal review intervals
- Flip card to reveal definition
- Know / Don't Know ratings
- Due count + mastered count

### 🔊 Pronunciation Guide
- 18 words across 3 categories: **Vowels**, **Consonants**, **Diphthongs**
- IPA transcriptions + syllable breakdown
- **Web Speech API** audio playback
- Slow mode for difficult sounds
- Category filter buttons

### 🎤 Speaking Practice
- **54 sentences** across 9 courses:
  - 👋 Greetings · ☀️ Daily Life · 🛒 Shopping · ✈️ Travel
  - 💼 Work · 🎓 Academic · 📊 Business English · 🤝 Interviews · 📝 Academic Writing
- Listen / Slow / Next controls
- **Voice recording** with MediaStream API
- **Pronunciation comparison** with scoring:
  - ⏱️ Pace analysis (0-40 pts)
  - 🔊 Volume consistency (0-30 pts)
  - ⏸️ Silence ratio (0-30 pts)
- **Challenge Mode** with 3 achievement badges:
  - 🎤 First Recording (70%+)
  - 🎙️ Pronunciation Pro (5 × 70%+)
  - 🏅 Pronunciation Master (avg 80%+ across 10)
- Recording playback to compare with original

### 🏆 Achievements & Badges
| Badge | Icon | Requirement |
|-------|------|-------------|
| First Steps | 🌟 | Complete your first lesson |
| On Fire | 🔥 | Complete 5 lessons |
| Seedling | 🌱 | Complete all Beginner lessons |
| Quiz Master | 🏆 | Perfect quiz score |
| Week Warrior | 📅 | 7-day streak |
| Monthly Master | 💫 | 30-day streak |
| Writer | ✍️ | First writing exercise |
| Prolific Writer | 📝 | 5 writing exercises |
| First Recording | 🎤 | Score 70%+ on recording |
| Pronunciation Pro | 🎙️ | Score 70%+ on 5 recordings |
| Pronunciation Master | 🏅 | Avg 80%+ across 10 recordings |

### 🌙 Dark Mode
- Toggle with moon/sun icon
- Full dark theme across all sections
- Persists in localStorage

### 🌍 Language Switch (EN/AR)
- Toggle between English and Arabic
- Full RTL support for Arabic
- All content, labels, and feedback translated
- Persists in localStorage

### ⏰ Reminder System
- 30-minute study reminder notifications
- Stop button to confirm presence
- Daily scheduled browser reminders

### 🔊 Sound System
- Master volume control
- Background music toggle
- Sound effects toggle
- Slider for volume level

## 🚀 Getting Started

### Prerequisites
- A modern browser (Chrome, Edge, Firefox)
- **Optional:** Node.js for local server (`npx serve`)

### Quick Start
```bash
cd C:\tmp\nature-site
npx serve
# Open http://localhost:3000
```

Or open the file directly:
```bash
start index.html
```
*(Note: Prayer times API requires HTTP server)*

### For Recording Features
1. Open via HTTP server (required for mic access)
2. Click **🎙️ Record** in Speaking Practice section
3. **Allow microphone** when prompted by browser
4. Speak the sentence and click **⏹️ Stop**

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **Vanilla JS** | No frameworks — pure JavaScript |
| **Web Speech API** | Text-to-speech for pronunciation + speaking practice |
| **MediaStream API** | Microphone recording |
| **MediaRecorder API** | Audio capture and playback |
| **Web Audio API** | Audio analysis for pronunciation scoring |
| **Aladhan API** | Islamic prayer times |
| **YouTube API** | Psychology video embeds |

## 📁 Project Structure

```
nature-site/
├── index.html    (320 lines — HTML structure)
├── style.css     (490 lines — all styles + dark mode + RTL)
├── app.js        (1800+ lines — all JavaScript)
└── README.md     (this file)
```

## 📸 Features at a Glance

- Single-page application
- Zero external dependencies (except Google Fonts)
- Arabic / English bilingual support
- Dark mode with CSS variables
- All data persists in localStorage
- Fully responsive design
- Accessible keyboard navigation
