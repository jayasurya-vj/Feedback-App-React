import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import PostPractice from "./components/PostPractice";
//not a default import so wrapped with {}
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="FeedBack" />

        <div className="container">
          <Routes>
            <Route exact path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }>

            </Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutPage />} />

            {/* path params */}
            <Route path="/post/:id/:name/*" element={<PostPractice />} />

          </Routes>

        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;