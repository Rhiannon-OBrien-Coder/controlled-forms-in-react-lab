const BookShelf = () => {
    const [books, setBooks] = useState([
        { title: 'Ice Planet Barbarians', author: 'Ruby Dixon'},
        { title: 'Hell Followed With Us', author: 'Andrew Joseph White'}
    ])

    const handleInputChange = () => {
    }

    return (
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          {/* Form will go here */}
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
    )
  };

  export default Bookshelf