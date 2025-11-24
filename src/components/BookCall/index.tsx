import cl from 'classnames'
import { useCallback, useState } from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import styles from './style.module.scss'
const BookACall = () => {
  const [showIframe, setShowIframe] = useState(false)

  const handleBookCall = useCallback(() => {
    setShowIframe((prev) => !prev)
  }, [])

  return (
    <>
      {showIframe ? (
        <div className={cl(styles.iframeContainer)}>
          <button onClick={handleBookCall} className={cl(styles.closeButton)}>
            Close
          </button>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0z5vaO5P_frKAYOckB60JPl5wSFZ4DH2Ob7TFRmKRFyYFureNT2KA6Hn7Ofl4EQOoV_Vz9lH49?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      ) : null}
      <button
        className={cl(styles.openButton)}
        type="button"
        onClick={handleBookCall}
      >
        <BiCalendarEvent size={20} />
        <span>Book a call</span>
      </button>
    </>
  )
}

export default BookACall
