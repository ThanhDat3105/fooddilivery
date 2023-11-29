import "./resAddress.scss"

import { AiFillPhone } from "react-icons/ai"
import { HiMail } from "react-icons/hi"

interface Props {
  size: string
}

export default function RestaurantAddress(props: Props) {
  return (
    <div className={`res_address ${props.size}`}>
      <header className="title">
        <h4>About The Burger Cafe</h4>
      </header>
      <div className="address">
        <iframe className="map_address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.911979195195!2d106.6992361751452!3d10.741267089405328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9f3dca0849%3A0xbc2310161c791201!2sD&#39;Maris%20Buffet%20-%20CN%20Lotte%20Mart%20Qu%E1%BA%ADn%207!5e0!3m2!1svi!2s!4v1697694476492!5m2!1svi!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer className="contact">
        <div className="phone">
          <div className="logo_phone">
            <AiFillPhone />
          </div>
          <div className="phone_info">
            <div className="name_phone">
              phone
            </div>
            <div className="number_phone">
              (000) 123 765 9988
            </div>
          </div>
        </div>
        <div className="email">
          <div className="logo_email">
            <HiMail />
          </div>
          <div className="email_info">
            <div className="name_email">
              email
            </div>
            <div className="address_email">
              contact@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
