import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import './style.css'

class Aside extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <aside className="masterhead" style={{ background: theme.ui, color: theme.syntax }}>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
                <nav>
                    <ul className="navbar-list">
                        <li>
                            <NavLink exact to="/">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path x='0' y='19px' d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
                                    </g>
                                </svg>
                                <span>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to="/books">
                                <svg viewBox="0 0 522.912 422.912">
                                    <g className="xxx">
                                        <path d="M370.176,67.584h-25.6V15.36c-0.266-8.37-6.99-15.094-15.36-15.36H86.528C59.382,0,37.376,22.006,37.376,49.152V373.76    c0,27.146,22.006,49.152,49.152,49.152h283.648c8.483,0,15.36-6.877,15.36-15.36V82.944    C385.536,74.461,378.659,67.584,370.176,67.584z M215.552,230.912l-36.864-30.208c-5.039-3.037-11.345-3.037-16.384,0    l-36.864,30.208V98.304h90.112V230.912z M313.856,67.584H86.528c-10.18,0-18.432-8.252-18.432-18.432    c0-10.18,8.252-18.432,18.432-18.432h227.328V67.584z" />
                                    </g>
                                </svg>
                                <span>Books</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName='active' to="/music">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.963 415.963">
                                    <path d="M328.712,264.539c12.928-21.632,21.504-48.992,23.168-76.064c1.056-17.376-2.816-35.616-11.2-52.768  c-13.152-26.944-35.744-42.08-57.568-56.704c-16.288-10.912-31.68-21.216-42.56-35.936l-1.952-2.624  c-6.432-8.64-13.696-18.432-14.848-26.656c-1.152-8.32-8.704-14.24-16.96-13.76c-8.384,0.576-14.88,7.52-14.88,15.936v285.12  c-13.408-8.128-29.92-13.12-48-13.12c-44.096,0-80,28.704-80,64s35.904,64,80,64s80-28.704,80-64V165.467  c24.032,9.184,63.36,32.576,74.176,87.2c-2.016,2.976-3.936,6.176-6.176,8.736c-5.856,6.624-5.216,16.736,1.44,22.56  c6.592,5.888,16.704,5.184,22.56-1.44c4.288-4.864,8.096-10.56,11.744-16.512C328.04,265.563,328.393,265.083,328.712,264.539z" />
                                </svg>
                                <span>Music</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName='active' to="/games">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.943 511.943">
                                    <g>
                                        <g>
                                            <path d="M492.814,240.733c-4.395-24.747-8.747-49.088-11.925-71.04c-8.427-58.347-27.733-95.296-57.365-109.824    c-30.059-14.763-56.96-0.405-60.715,1.707c-50.624,31.403-88.107,28.437-88.256,28.395l-34.773-0.128l-2.155,0.107    c-0.341,0.021-37.888,3.008-89.237-28.8c-2.987-1.685-29.973-16-59.968-1.28c-29.632,14.528-48.939,51.477-57.365,109.824    c-3.179,21.952-7.531,46.293-11.925,71.04c-20.652,116.436-31.532,188.97,4.116,211.882c6.293,4.032,13.248,6.037,20.821,6.037    c12.48,0,26.667-5.44,42.432-16.341c12.437-8.576,24.021-19.776,35.435-34.219l3.627-4.672    c15.979-20.843,40.768-51.968,109.077-51.435h42.944c0.96,0,1.877-0.021,2.816-0.021c66.539,0,90.24,30.912,105.984,51.456    l3.627,4.672c11.413,14.443,22.997,25.643,35.435,34.219c25.344,17.515,46.635,20.971,63.253,10.304    C524.345,429.704,513.465,357.17,492.814,240.733z M213.305,245.32h-21.333v21.333c0,11.776-9.536,21.333-21.333,21.333    s-21.333-9.557-21.333-21.333V245.32h-21.333c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h21.333V181.32    c0-11.776,9.536-21.333,21.333-21.333s21.333,9.557,21.333,21.333v21.333h21.333c11.797,0,21.333,9.557,21.333,21.333    S225.102,245.32,213.305,245.32z M319.971,245.32c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333    s21.333,9.557,21.333,21.333S331.747,245.32,319.971,245.32z M362.638,287.986c-11.776,0-21.333-9.557-21.333-21.333    c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333C383.971,278.429,374.414,287.986,362.638,287.986z     M362.638,202.652c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333    S374.414,202.652,362.638,202.652z M405.305,245.32c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333    s21.333,9.557,21.333,21.333S417.081,245.32,405.305,245.32z" />
                                        </g>
                                    </g>
                                </svg>
                                <span>Games</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default Aside;