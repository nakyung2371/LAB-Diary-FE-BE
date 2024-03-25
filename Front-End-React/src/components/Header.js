import React from 'react';
import '../components/Header.css'

// /, new, diary, edit 요청에서 공통으로 사용할 수 있도록 만들어 놓는 공통 컴포넌트
function Header({title, leftChild, rightChild}) {
    return (
        <div className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}</div>
            <div className="header_right">{rightChild}</div>
        </div>
    );
}

export default Header;