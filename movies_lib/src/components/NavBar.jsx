
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css"
import { useState } from 'react';

const NavBar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");


    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> The MoviesLib
                </Link>
            </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Busque um filme...' value={search} onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <button type='submit'><BiSearchAlt2 /></button>
            </form>
        </nav>



    )
}

export default NavBar;