import { Component } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Icon from '../icon/Icon';
class Searchbar extends Component {
  state = {
    searchImage: '',
  };
  handleInputName = e => {
    // console.log(e.currentTarget.value);
    this.setState({
      searchImage: e.currentTarget.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      return toast.warn('поисковая строка пуста!');
    }
    this.props.onSearch(this.state.searchImage);
    this.setState({
      searchImage: '',
    });
  };
  render() {
    const { searchImage } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>
              <Icon name="search" fill="gray" width="30px" height="30px" />
            </span>
          </button>

          <input
            type="text"
            autoComplete="off"
            value={searchImage}
            autoFocus
            onChange={this.handleInputName}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
