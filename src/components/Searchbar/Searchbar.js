import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from '../icon/Icon';
import { SurchBarWrapper } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormButton } from './Searchbar.styled';
import { SearchFormButtonLabel } from './Searchbar.styled';
import { SearchFormInput } from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    searchImage: '',
  };
  handleInputName = e => {
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
      <SurchBarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel></SearchFormButtonLabel>
            <Icon name="search" fill="gray" width="30px" height="30px" />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            value={searchImage}
            autoFocus
            onChange={this.handleInputName}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SurchBarWrapper>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
