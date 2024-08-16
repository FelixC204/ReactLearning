import './style.css'

const MyComponent = () => {
    // const name = 'MyComponent'
    // const name = 123
    // const name = true
    // const name = null
    // const name = undefined
    // const name = ['MyComponent', 'MyComponent2']
    const name = {
      first: 'MyComponent',
      last: 'MyComponent2'
    }
    return (
      <>
        <h1 className="MyComponent">{JSON.stringify(name)}</h1>
      </>
    )
  }

  export default MyComponent