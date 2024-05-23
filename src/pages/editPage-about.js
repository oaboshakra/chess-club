import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/editPage.css';

function EditAbout() {

    const [items, setItems] = useState([
        {id: 1, title: 'President'},
        {id: 2, title: 'Secretary'},
        {id: 3, title: 'Member'},
        {id: 4, title: 'Member'},
    ]);

    const handleEdit = (itemId) => {
        console.log(itemId);
        window.location.href = `/editForm-about?itemId=${itemId}`;
    };

    const handleDelete = (itemId) => {
        console.log(itemId);
        window.location.href = `/editForm-about?itemId=${itemId}`;
    };

    return (
        <div className='editPage-container'>
            <div className='title'>
                <Link to='../adminLanding' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}><button>Back</button></Link>
                <h1>Edit Members</h1>
            </div>
            <div className='editing-container'>
                {items.map(item => (
                    <div key = {item.id} className='item'>
                        <h3>{item.title}</h3>
                        <div className='buttons-container'>
                            <Link to={`/editForm-about?itemId=${item.id}`}>
                                <button>Edit</button>
                            </Link>
                            <Link to={``}>
                                <button>Delete</button>
                            </Link>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    );

};

export default EditAbout;