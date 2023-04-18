import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import CompLink from './Component/CompLink/CompLink';
import Home from './Component/Home/Home';
import { Route, useLocation } from 'react-router-dom';
import AboutMeTwo from './Component/AboutMeTwo/AboutMeTwo';
import Resume from './Component/Resume/Resume';
import Portfolio from './Component/Portfolio/Portfolio';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import { withRouter } from 'react-router-dom';
import RBlog from './Component/RBlog/RBlog';

function App(props) {
  return (
    <div className='App'>
      <AboutMe />
      <section className='App-Section'>
        <Route exact path='/' component={Home} />
        <Route path='/AbouteMe' component={AboutMeTwo} />
        <Route path='/cowboy' component={Resume} />
        <Route path='/envelope' component={Contact} />
        <Route path='/briefcase' component={Portfolio} />
        <Route exact path='/book' component={Blog} />
        <Route exact path='/book/:name' component={RBlog} />
      </section>
      <CompLink />
    </div>
  );
}

export default withRouter(App);
