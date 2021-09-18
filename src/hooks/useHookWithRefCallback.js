import { useCallback, useRef } from 'react'

export const useHookWithRefCallback = (callback) => {
  const ref = useRef(null)
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node !== null) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
        callback(node);
    }

    // Save a reference to the node
    ref.current = node
  }, [callback])

  return setRef;
}