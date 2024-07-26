
import { render } from 'react-dom';
import './App.css';

function App() {

    function FrequentlyAskedQuestion({
        question,
        answer,
      }) {
        return (
          <details className="faq">
            <summary>{question}</summary>
            <div className="answer">
              {answer}
            </div>
          </details>
        );
      }
      
      render(
        <FrequentlyAskedQuestion
          question="What does “CSS” stand for?"
          answer="Cool Styling Strategy"
        />
      );
 
}


export default App
