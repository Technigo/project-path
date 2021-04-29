import React, { useEffect, useState } from 'react'
import UserForm from './UserForm.js'
import { useSelector } from 'react-redux';
import Loader from "react-loader-spinner";

import Description from './Description'
import Directions from './Directions'
import GoBack from './GoBack'
import History from './History'

const Container = () => {
  const actions = useSelector(store => store.labyrinth.actions)
  const history = useSelector(store => store.labyrinth.history)
  const error = useSelector(store => store.labyrinth.error)
  const loading = useSelector(store => store.labyrinth.loading)
  
  const backgroundImage = "/assets/labyrinth-Background.jpg"

  const [showActions, setShowAction] = useState(false)

  useEffect(() => {
    setShowAction(false)
    if (actions && actions.description) {
      const currentMessageLength = actions.description.length
      setTimeout(() => {
        setShowAction(true)
      }, currentMessageLength * 112)
    }

  }, [actions])

  return (
    <div className="container" style={{backgroundImage }}>

      {error && <h1>Something went wrong, reason: {error}</h1>}
      {actions && !error
        ? <>
          {loading &&
            <div className="loader">
              <Loader
                type="BallTriangle"
                color="brown"
                height={100}
                width={100}
                timeout={1000} //3 secs
              />
            </div>
          }
          {!loading &&< Description />}
          {!loading && showActions && <Directions />}
          <History />
          {history.length > 0 && showActions && !loading && <GoBack />}
        </>
        : <UserForm />}

    </div>
  )
}

export default Container