// 1. Import statements ( if needed )
import './App.css';
import PortfolioCard from './components/PortfolioCard';

// 2. Component Function (always start with capital letter)
function App(){

  

  return(
    <div className='App'>
      <PortfolioCard/>
    </div>
  );
} 

export default App;


/*

PortfolioCard(main container)
- Header(title section)
- Avatar(profile image)
- PersonalInfo(name, role, location)
- Bio(description text)

*/