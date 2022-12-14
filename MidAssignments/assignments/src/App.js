import * as React from 'react';
// import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Categories from './pages/Category/Categories';

import Navbar from './components/Admin/Navbar/Navbar';
import NewCategory from './components/Admin/News/NewCategory';
import NewBook from './components/Admin/News/NewBook';
import EditCategory from './components/Admin/Edits/EditCategory';
import Logout from './pages/LogOut/Logout';
import Signup from './pages/Signup/Signup';
import EditBook from './components/Admin/Edits/EditBook';
import ViewBook from './components/Admin/ViewDetails/ViewBook';
import ViewCategory from './components/Admin/ViewDetails/ViewCategory';
// import NavbarUsers from './components/Users/components/NavbarUsers';

function App() {
    // const [initialStateCart, dispatch] = useReducer(reducer, initialArg);

    // const initialState = {
    //     listBooks: [],
    //     totalBooks: 0,
    //     totalPrice: 0,
    // };
    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'ADD_SUCCESS':
    //             return {
    //                 ...state,
    //                 listBooks: [...state.listBooks, action.payload],
    //             };
    //         default:
    //             throw new Error();
    //     }
    // }
    return (
        <div className="App">
            <Navbar />
            {/* <NavbarUsers /> */}
            <Routes>
                {/* <Route path="/" element={<Navbar />}> */}
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category" element={<Categories />} />
                <Route path="/category/new" element={<NewCategory title="Add New Category" />} />
                <Route path="/category/editcategory/:categoryId" element={<EditCategory title="Edit Category" />} />
                <Route path="/category/viewcategory/:categoryId" element={<ViewCategory title="Category Details" />} />
                <Route path="/book" element={<Books />} />
                <Route path="/book/new" element={<NewBook title="Add New Book" />} />
                <Route path="/book/editbook/:bookId" element={<EditBook title="Edit Book" />} />
                <Route path="/book/viewbook/:bookId" element={<ViewBook title="Book Details" />} />
            </Routes>
        </div>
    );
}

export default App;
