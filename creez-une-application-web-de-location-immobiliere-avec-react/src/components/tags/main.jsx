import '../../sass/layout/_tags.scss'

function Tags({ tags }) {
    const listTags = tags.map((listTags) => (
      <span key={listTags}>{listTags}</span>
    ))
    return <div className="tags-container">{listTags}</div>
  }
  
  export default Tags