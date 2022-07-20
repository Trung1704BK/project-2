import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSearch: false,
      searchData: '',
      searchResults: [],
    };
  }

  showSearch = () => {
    this.setState({ isShowSearch: !this.state.isShowSearch });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchData: e.target.value,
    });
  };

  handleSubmitSearch(e, props) {
    e.preventDefault();
    if (!this.state.searchData) {
      return false;
    }
    props.history.push(
      `/search?query=${encodeURIComponent(this.state.searchData)}`
    );
  }

  render() {
    const { isShowSearch, searchData } = this.state;

    return (
      <div className='container'>
        <div className='header'>
          <div className='header-logout'>
            <Link to='/logout'>Logout</Link>
          </div>
          <div className='header-top'>
            <div className='top-header'>
              <div>
                <Link to='/'>
                  <img src='/picture/travel-homepage.png' alt='' />
                </Link>
              </div>
            </div>
          </div>
          <div className='main-header'>
            <nav
              class='navbar navbar-expand-lg navbar-light'
              style={{ height: 50, paddingBottom: 30 }}
            >
              <div class='form-search'>
                <div className='toggle-icon' onClick={this.showSearch}>
                  {isShowSearch ? (
                    <i class='fa-solid fa-xmark' />
                  ) : (
                    <i class='fa-solid fa-magnifying-glass' />
                  )}
                </div>

                <form className='search-box'>
                  {isShowSearch && (
                    <input
                      type='text'
                      className='text search-input'
                      value={searchData}
                      onChange={this.handleSearchChange}
                      placeholder='Search'
                    />
                  )}
                  {isShowSearch && (
                    <input
                      type='button'
                      value='Search'
                      className='btn-submit'
                      onClick={(e) =>
                        this.handleSubmitSearch(e, this.props.children.props)
                      }
                    />
                  )}
                </form>
              </div>

              <button
                class='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>

              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav mr-auto '>
                  <li class='nav-item dropdown '>
                    <Link
                      class='nav-link dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      to='/'
                    >
                      Home
                    </Link>
                    <div
                      class='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                      style={{ top: 25 }}
                    >
                      <a
                        class='dropdown-item'
                        href='https://www.w3schools.com/'
                      >
                        Action
                      </a>
                      <a class='dropdown-item' href='#'>
                        Another action
                      </a>

                      <a class='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* <section class='banner'>
            <img src='/picture/main-picture.jpg' alt='banner' />
          </section> */}
          {/* 
          <h1
            id='carouselExampleControls'
            class='carousel slide'
            data-ride='carousel'
          >
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img
                  class='d-block w-100'
                  src='/picture/main-picture.jpg'
                  alt='First slide'
                />
              </div>
              <div class='carousel-item'>
                <img
                  class='d-block w-100'
                  src='/picture/main-picture.jpg'
                  alt='Second slide'
                />
              </div>
              <div class='carousel-item'>
                <img
                  class='d-block w-100'
                  src='/picture/main-picture.jpg'
                  alt='Third slide'
                />
              </div>
            </div>
            <a
              class='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Previous</span>
            </a>
            <a
              class='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Next</span>
            </a>
          </h1> */}
        </div>
      </div>
    );
  }
}

export default Header;
