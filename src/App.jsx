import FirstPage from './components/FirstPage'
import FourthPage from './components/FourthPage'
import NavHead from './components/NavHead'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
function App() {

  return (
    <div>
      <section className="h-screen w-screen">
        <NavHead />
        <FirstPage />
      </section>
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  )
}

export default App
