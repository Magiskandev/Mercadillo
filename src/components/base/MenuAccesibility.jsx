import React from 'react'

function MenuAccesibility() {
    return (
        <div className="d-flex content-accessibility-nav align-items-center
                justify-content-center position-fixed">
            <div>
                <button className="bton-accessibility mr-3">
                    <i class="fas fa-eye icon-nav-accessibility"></i>
                </button>
                <button className="bton-accessibility mr-3">
                    <i class="fas fa-plus icon-nav-accessibility"></i>
                </button>
                <button className="bton-accessibility mr-3">
                    <i class="fas fa-minus icon-nav-accessibility"></i>
                </button>
                <button className="bton-accessibility mr-3">
                    <i class="fas fa-mouse icon-nav-accessibility"></i>
                </button>
                <button className="bton-accessibility mr-5">
                    <i class="fas fa-volume-up icon-nav-accessibility"></i>
                </button>
            </div>
            <div className="d-flex align-items-center">
                <h2 className="txt-accessibility mr-3">Accesibilidad</h2>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default MenuAccesibility
