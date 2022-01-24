const Searchbar = onChange => {
  return (
    <header>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={onChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
