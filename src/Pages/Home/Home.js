import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Countdown from "../../Components/Countdown/Countdown";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <div className="timmer">
        <div className="title">
          <h1>Generative AI</h1>
          <p>
            Powered by <span>The Times of India</span>
          </p>
        </div>
        <div className="timmer-clock">
          <Countdown/>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h5>What is generative AI, and why is it suddenly everywhere?</h5>

          <p>
            Even amidst the most dismal tech-turndown, Generative AI is creating
            waves in the Silicon Valley by making it possible for anyone to
            create new, original illustrations and text by simply sending a few
            instructions to a computer program. Beginning in January 2021,
            advances in AI research resulted in a slew of deep-learning models
            capable of generating original images from simple text prompts,
            effectively extending the human imagination. In 2022, Meta pushed
            releases of both Blenderbot and Cicero, while OpenAI ended the year
            with a bang with the release of ChatGPT. Generative AI has already
            created a paradigm shift and is here to stay but like any other
            automated systems trained on historical data and internet images, it
            also comes with risks that have yet not been resolved. It’ll be
            interesting to see how this technology progresses in the coming
            time.
          </p>
        </div>
        <div className="video">
          <iframe
            className="ifram-video"
            src="https://www.youtube.com/embed/SVcsDDABEkM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      <div className="quiz-start-btn">
        <a href="/quiz">
          Start Quiz
        </a>
      </div>
    </div>
  );
};

export default Home;
