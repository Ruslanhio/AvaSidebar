import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from "./components/Navbar/Sidebar/Sidebar";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
                        <Route path='/avatar' element={<Sidebar state={props.state.sidebar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
