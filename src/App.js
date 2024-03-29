import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected ] = useState(false);

  const [categories] = useState([
      {
          name: "commercial",
          description: "Photos of grocery stores, food trucks, and other commercial projects",
      },
      {
          name: "portriats",
          description: "Portriats of people in my life"
      },
      {
          name: "food",
          description: "Delicious delicacies"
      },
      {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
      },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} >
      </Nav>
      <main>
        <div>
          {/* if(!contactSelected) {
                <>
                  <Gallery currentCategory={currentCategory}></Gallery>
                  <About></About>
                </> 
              } else {
                  <ContactForm></ContactForm>
              }
              same as below statement */}
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory} ></Gallery>
              <About></About>
            </>  
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
