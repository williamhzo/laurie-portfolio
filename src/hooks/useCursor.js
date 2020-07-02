import React, { useState } from 'react'

const useCursor = () => {
  const [cursor, setCursor] = useState(null)

  return { cursor, setCursor }
}

export default useCursor
