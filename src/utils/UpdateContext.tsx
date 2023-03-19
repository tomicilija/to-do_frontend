import React, { useState } from 'react'

export const UpdateContext = React.createContext({
  updated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUpdated: (active: boolean) => {},
})

export const UpdateProvider = ({ children }: any) => {
  const [updated, setUpdated] = useState(false)

  return <UpdateContext.Provider value={{ updated, setUpdated }}>{children}</UpdateContext.Provider>
}
