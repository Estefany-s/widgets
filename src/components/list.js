const List = ({results}) => {
  return (
    <>
      {
        results.map((result) => 
          <div className='item' key={result.pageid}>
            <div className='right floated content'>
              <a 
                href={`https://es.wikipedia.org?curid=${result.pageid}`} 
                className='ui button'
              >
                Go
              </a>
            </div>
            <div className='content'>
              <div className='header'>{result.title}</div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default List;