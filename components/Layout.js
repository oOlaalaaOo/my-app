import '../styles/index.css'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Kitty Knows</title>
      </Head>
      { props.children }
    </div>
  )
}

export default Layout
