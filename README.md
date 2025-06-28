# Project Idea: EduGenie – The AI-Powered Adaptive Mentor

## 1. Description of Your Project

EduGenie is an AI-powered, adaptive learning platform that acts as a personal mentor for every student. It dynamically analyzes a student's learning style, strengths, weaknesses, and emotional state to deliver tailored lessons, interactive quizzes, and real-time feedback. EduGenie leverages cutting-edge LLMs (Groq/Hugging Face), sentiment analysis, and Retrieval-Augmented Generation (RAG) to create a truly personalized, engaging, and supportive learning journey.

## 2. Purpose

### Problem Statement
Traditional online learning platforms offer a one-size-fits-all approach, failing to adapt to individual learning needs, pace, or emotional well-being. This leads to disengagement, frustration, and suboptimal learning outcomes.

### Impact
EduGenie aims to:
- Maximize learning efficiency by tailoring content and feedback to each student.
- Boost motivation through empathetic, AI-driven support and encouragement.
- Reduce dropout rates by proactively identifying and addressing learning obstacles.

## 3. Scope

### Potential Use Cases
- K-12 and College Students: Adaptive tutoring and exam prep.
- Lifelong Learners: Personalized upskilling and reskilling.
- Teachers: AI-generated lesson plans and student progress analytics.
- Special Needs Education: Tailored support for diverse learning abilities.

### Future Scalability
- Multilingual support for global reach.
- Integration with popular LMS (e.g., Moodle, Google Classroom).
- Expansion into corporate training and professional certification.

## 4. Features Used & Integrated

1. **AI Mentor Chatbot:**  
   - Context-aware, empathetic conversation (Groq/Hugging Face LLM).
   - Explains concepts, answers questions, and adapts tone based on user sentiment.

2. **Dynamic Learning Path Generator:**  
   - Recommends content and exercises based on user performance and preferences.
   - Uses RAG to fetch the most relevant resources.

3. **Real-Time Sentiment Analysis:**  
   - Detects student frustration/confusion via chat and voice input.
   - Offers encouragement, tips, or simpler explanations as needed.

4. **Personalized Quiz Generator:**  
   - AI creates quizzes targeting weak areas.
   - Instant feedback and explanations for each answer.

5. **Progress Dashboard:**  
   - Visualizes strengths, weaknesses, and emotional trends.
   - Suggests actionable next steps.

6. **Voice Interaction:**  
   - Students can ask questions via voice (STT) and receive spoken responses (TTS).

7. **Authentication & User Profiles:**  
   - Secure login, progress tracking, and personalized recommendations.

## 5. Tech Stack Used

- **Frontend:** Vite (React), Tailwind CSS, shadcn-ui
- **AI/ML:**  
  - Groq API (LLM for chatbot and content generation)
  - Hugging Face Transformers (sentiment analysis, TTS, STT)
  - RAG for content recommendations
- **Database:** Supabase (user data, progress, quiz results)
- **Authentication:** Supabase Auth (demo accounts)
- **Hosting:** Vercel (live deployment)
- **APIs:** External content APIs (e.g., Wikipedia, Khan Academy for RAG)

## 6. Setup Instructions

### Prerequisites
- Node.js & npm (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation
```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd edugenie-ai-mentor-main

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

### Environment Variables
- Configure your API keys for Groq, Hugging Face, and Supabase in a `.env` file (see `.env.example` if available).

### Usage Guide
- Visit `http://localhost:8080` (or the port shown in your terminal) to access the app.
- Use the demo credentials (if provided) or sign up for a new account.
- Explore the AI mentor chat, personalized quizzes, and progress dashboard.

## 7. Key Features Explained
- **AI Mentor Chat:** Ask questions, get explanations, and receive encouragement.
- **Adaptive Learning Path:** Personalized recommendations and exercises.
- **Real-Time Sentiment Analysis:** The AI adapts its tone and support based on your mood.
- **Quiz Generator:** Practice weak areas with instant feedback.
- **Progress Dashboard:** Visualize your learning journey and next steps.
- **Voice Interaction:** Use voice for hands-free learning.
- **Authentication:** Secure login and personalized experience.

## 8. Live Demo
- [Live Demo Link](https://your-vercel-demo-link.com) *(replace with your actual deployment URL)*
- Demo login: `demo@edugenie.com` / `password123` *(if enabled)*

## 9. Documentation
- See the [Google Slides/PDF](#) for a full walkthrough, screenshots, and technical details.

# Why EduGenie Can Win

- **Unique Blend:** Combines adaptive content, emotional intelligence, and multimodal interaction (text + voice).
- **Strong AI Integration:** Uses both LLMs and sentiment analysis for a truly "personal" experience.
- **Compelling UI:** Modern, intuitive, and visually engaging (Tailwind + React).
- **Real-World Impact:** Addresses both academic and emotional needs—rare in current edtech.
- **Scalable & Future-Proof:** Easily extensible to new subjects, languages, and user types.

## Next Steps

1. Wireframe the UI: Focus on a clean, friendly dashboard and chat interface.
2. Set Up Vite + Supabase: Scaffold authentication and basic user flows.
3. Integrate Groq/Hugging Face: Build the AI mentor and sentiment analysis.
4. Deploy Early: Get a live link up ASAP for testing and demos.
5. Prepare Slides: Use the above structure for your documentation.

## Bonus: Presentation Pitch (30-Second Elevator)

> "Meet EduGenie, your AI-powered personal mentor. Unlike generic learning apps, EduGenie adapts to your unique style, pace, and even your mood—delivering the right lesson, quiz, or encouragement exactly when you need it. With real-time AI feedback, voice interaction, and a beautiful dashboard, EduGenie is more than a tutor—it's your learning companion for life."
