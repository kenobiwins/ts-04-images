import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarStyle,
} from './Searchbar.styled';

interface IProps {
  onSubmit: (searchQuery: string) => Promise<void>;
}

export const Searchbar = ({ onSubmit }: IProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    setSearchQuery(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery.trim());
  };
  return (
    <SearchbarStyle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInput}
        />
      </SearchForm>
    </SearchbarStyle>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
