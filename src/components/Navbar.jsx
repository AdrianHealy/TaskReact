import React from 'react';

const Navbar = () => {
    return (
        <div>
            
            <div style={{display:"flex", justifyContent:"space-around",alignItems:'center', fontSize:"25px"}}>
            <img style={{width:"100px"}} src="https://i.pinimg.com/originals/bc/74/df/bc74dfa567cb89529e51a730ef1306c0.jpg" alt="logo" />
            <div>Команда</div>
            <div>Игры</div>
            <div>Трансляции</div>
            <input style={{height:"30px"}} type="text" name="" placeholder='Поиск' />
            </div>
        </div>
    );
};

export default Navbar;