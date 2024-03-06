import '../../sass/layout/_tags.scss'

function Tags({ tags }) {
    const listTags = tags.map((listTags) => (
      <li key={listTags}>{listTags}</li>
    ))
    return <ul className="tags-container">{listTags}</ul>
  }
  
  export default Tags