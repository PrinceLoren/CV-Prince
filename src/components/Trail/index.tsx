import { a, useTransition } from '@react-spring/web'

import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

export const Trail: FC = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
    },
    enter: [{ opacity: 1, height: 60, innerHeight: 60 }],
    leave: [{ innerHeight: 0 }, { opacity: 0, height: 0 }],
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Tymur']), 1000))
    ref.current.push(setTimeout(() => set(['Ti']), 2000))
    ref.current.push(setTimeout(() => set(['Pidor']), 3000))
    ref.current.push(setTimeout(() => set(['Da Da', 'Ty', 'Pidor']), 4250))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div>
      {transitions(({ innerHeight, ...rest }, item) => (
        <a.div style={rest} onClick={reset}>
          <a.div style={{ overflow: 'hidden', height: innerHeight }}>
            <h1>{item}</h1>
          </a.div>
        </a.div>
      ))}
    </div>
  )
}
