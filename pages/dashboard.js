import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  // const [session] = useSession()
  const router = useRouter()
  const { data: session } = useSession()
  console.log({ session })





  return <div className="site-wrap">

    <nav className="site-nav">

      <div className="name">
        Welcome
      </div>

      <ul>
        <li className="active"><a href="#">Deals</a>

        </li>
        <li><a href="#0">Activities</a></li>
        <li><a href="#0">Asset Libraries</a></li>
        <li><a href="#0">Funds</a></li>
        <li><a href="#0">Investors</a></li>
        <li><a href="#0">Reports</a></li>
      </ul>

      <div className="note">
        <h3>Your Monthly Report</h3>
        <p>Get the info about all your deals, pros, cons. And build your roadmap.</p>
      </div>

    </nav>

    <main>

      <header>
        <div className="breadcrumbs">
          <a href="#0/">Home</a>
        </div>

        <h1 className="title">Pipeline</h1>

        <nav className="nav-tabs" id="nav-tabs">
          <a href="#0" className="active">
            Deals
            <span>14</span>
          </a>
          <a href="#0">
            Library
            <span>24</span>
          </a>
          <a href="#0">
            Search Library
          </a>
        </nav>
      </header>

      <div className="content-columns">

        <div className="col">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="col">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="col">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="col">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>

      </div>

    </main>

  </div>
}
