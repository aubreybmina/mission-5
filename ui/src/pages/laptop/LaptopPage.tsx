import { useEffect, useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import { Laptop as LaptopModel } from '../../models/laptop'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const LaptopPage = () => {
  const { title } = useParams()
  // const { id } = useParams()
  // const [laptop, setLaptop] = useState<LaptopModel[]>([])

  // useEffect(() => {
  //   async function loadLaptop() {
  //     try {
  //       const response = await fetch(`/api/laptop/${id}`, {
  //         method: 'GET',
  //       })
  //       const result = await response.json()
  //       setLaptop(result)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   loadLaptop()
  // }, [])
  const [showPlusDesc, setshowPlusDesc] = useState(true)
  const [showCloseDesc, setShowCloseDesc] = useState(false)
  const [showDescription, setshowDescription] = useState(false)
  const [showPlusSpecs, setshowPlusSpecs] = useState(true)
  const [showCloseSpecs, setShowCloseSpecs] = useState(false)
  const [showSpecifications, setshowSpecifications] = useState(false)
  const [showPlusWarranty, setshowPlusWarranty] = useState(true)
  const [showCloseWarranty, setShowCloseWarranty] = useState(false)
  const [showWarranty, setshowWarranty] = useState(false)

  const handleDescription = () => {
    setshowPlusDesc(!showPlusDesc)
    setShowCloseDesc(!showCloseDesc)
    setshowDescription(!showDescription)
  }

  const handleSpecs = () => {
    setshowPlusSpecs(!showPlusSpecs)
    setShowCloseSpecs(!showCloseSpecs)
    setshowSpecifications(!showSpecifications)
  }

  const handleWarranty = () => {
    setshowPlusWarranty(!showPlusWarranty)
    setShowCloseWarranty(!showCloseWarranty)
    setshowWarranty(!showWarranty)
  }

  return (
    <>
      <div className="breadcrumbs">
        <p>Home</p>
        <ArrowRightSLineIcon />
        <p>Computers & Tablets</p>
        <ArrowRightSLineIcon />
        <p>
          <Link to="/laptop">Laptops</Link>
        </p>
        <ArrowRightSLineIcon />
        <p className="breadcrumbs__current">{title?.split('-').join(' ')}</p>
      </div>
      <div className="productpage">
        <div className="productpage__main">
          <div className="productpage__main--photos">
            <img
              src="https://www.pbtech.co.nz/imgprod/N/B/NBKASU506040__1.jpg?h=2005533558"
              alt="Laptop photo"
            />
            <div className="productpage__main--photos--icons">
              <FontAwesomeIcon
                className="productpage__main--photos--icons--scaleheart"
                icon={faScaleBalanced}
              />
              <FontAwesomeIcon
                className="productpage__main--photos--icons--scaleheart"
                icon={faHeart}
              />
            </div>
          </div>
          <div className="productpage__main--details">
            <div className="productpage__main--details--productName">
              {title?.split('-').join(' ')}
            </div>
          </div>
        </div>
        <div className="productpage__frame">
          <div className="productpage__frame--tile">
            <p>Description</p>
            {showPlusDesc === true ? (
              <FaPlus
                className="productpage__frame--tile--icon"
                onClick={handleDescription}
              />
            ) : (
              <FaTimes
                className="productpage__frame--tile--icon"
                onClick={handleDescription}
              />
            )}
          </div>
          {showDescription === true && (
            <div className="productpage__frame--info">
              <h2>Essential Features in a modern design</h2>
              <p>
                The HP ProBook 445 Laptop provides growing businesses with the
                commercial-grade performance, HP Wolf Security for Business, and
                durability in a compact design. This PC is powered by an AMD
                processor and protected with always-on security you can trust.
              </p>
              <p>
                This durable PC is equipped with HP Wolf Security for Business5
                that delivers commercial-grade performance in a compact design.
              </p>
              <h4>Designed for hybrid workstyles </h4>
              <li>
                Refined, compact design for easy mobility with the collaboration
                tools to enhance team productivity.
              </li>
              <h4>Everyday business performance</h4>
              <li>
                Drive performance with the latest AMD processor and graphics,
                long battery life, and solid-state drives.
              </li>
              <h4>Protected by HP Wolf Security </h4>
              <li>
                HP Wolf Security for Business creates a hardware-enforced,
                always-on, resilient defense.
              </li>
            </div>
          )}
        </div>
        <div className="productpage__frame">
          <div className="productpage__frame--tile">
            <p>Specifications</p>
            {showPlusSpecs === true ? (
              <FaPlus
                className="productpage__frame--tile--icon"
                onClick={handleSpecs}
              />
            ) : (
              <FaTimes
                className="productpage__frame--tile--icon"
                onClick={handleSpecs}
              />
            )}
          </div>
          {showSpecifications === true && (
            <div className="productpage__frame--info">
              <table>
                <tr>
                  <th>Operating system</th>
                  <td>Windows 11 pro</td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>
                    AMD Ryzen™ 5 5625U (up to 4.3 GHz max boost clock, 16 MB L3
                    cache, 6 cores, 12 threads)
                  </td>
                </tr>
                <tr>
                  <th>Management features</th>
                  <td>
                    HP Client Management Script Library (download); HP Driver
                    Packs (download); HP Client Catalog (download); HP
                    Manageability Integration Kit Gen4 (download); HP Image
                    Assistant Gen5 (download); HP Patch Assistant (download); HP
                    Connect for Microsoft Endpoint Manager
                  </td>
                </tr>
                <tr>
                  <th>Security management</th>
                  <td>
                    Absolute persistence module; HP DriveLock and Automatic
                    DriveLock; HP Secure Erase; HP Sure Click; HP Sure Sense;
                    BIOS Update via Network; HP Sure Admin; HP BIOSphere Gen6;
                    TPM 2.0 embedded security chip (Common Criteria EAL4+ and
                    FIPS 140-2 Level 2 Certified); HP Sure Start Gen7; HP Wake
                    on WLAN; HP Tamper Lock
                  </td>
                </tr>
                <tr>
                  <th>Graphics (integrated)</th>
                  <td>AMD Radeon™ Graphics</td>
                </tr>
                <tr>
                  <th>Ports</th>
                  <td>
                    3 SuperSpeed USB Type-A 5Gbps signaling rate; 1 SuperSpeed
                    USB Type-C® 10Gbps signaling rate (USB Power Delivery,
                    DisplayPort™ 1.4); 1 headphone/microphone combo; 1 HDMI
                    2.0b; 1 AC power (HDMI cable sold separately.)
                  </td>
                </tr>
                <tr>
                  <th>Camera</th>
                  <td>720p HD IR privacy camera</td>
                </tr>
                <tr>
                  <th>Audio</th>
                  <td>Dual stereo speakers, dual array microphones</td>
                </tr>
                <tr>
                  <th>Pointing device</th>
                  <td>
                    Clickpad with multi-touch gesture support, taps enabled as
                    default
                  </td>
                </tr>
                <tr>
                  <th>Keyboard</th>
                  <td>
                    HP Premium Keyboard - spill resistant, backlit keyboard
                  </td>
                </tr>
                <tr>
                  <th>Wireless</th>
                  <td>
                    Realtek RTL8852AE Wi-Fi 6 (2x2) and Bluetooth® 5.2 combo
                  </td>
                </tr>
                <tr>
                  <th>Power</th>
                  <td>HP Smart 65 W USB Type-C™ adapter</td>
                </tr>
                <tr>
                  <th>Battery type</th>
                  <td>HP Long Life 3-cell, 51 Wh Li-ion</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>Starting at 1.38 kg</td>
                </tr>
                <tr>
                  <th>Software included</th>
                  <td>
                    HP Connection Optimizer; HP Hotkey Support; HP MAC Address
                    Manager; HP PC Hardware Diagnostics UEFI; HP Support
                    Assistant; myHP; HP Privacy Settings; HSA Fusion for
                    Commercial; HSA Telemetry for Commercial; Touchpoint
                    Customizer for Commercial; HP Notifications; HP QuickDrop;
                    Tile™; HP Quick Touch
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
        <div className="productpage__frame">
          <div className="productpage__frame--tile">
            <p>Returns and Warranty</p>
            {showPlusWarranty === true ? (
              <FaPlus
                className="productpage__frame--tile--icon"
                onClick={handleWarranty}
              />
            ) : (
              <FaTimes
                className="productpage__frame--tile--icon"
                onClick={handleWarranty}
              />
            )}
          </div>
          {showWarranty === true && (
            <div className="productpage__frame--info">
              <h2>7 day right of exchange</h2>
              <p>
                If you change your mind after making a purchase, or realise you
                have ordered the incorrect item, you can enjoy the peace of mind
                that we offer a 7 day exchange policy.
              </p>
              <p>
                To exchange a product, goods must be sealed / unopened, with
                packaging in original condition, and accompanied by a valid
                receipt dated no more than 7 calendar days from when you request
                an exchange.
              </p>
              If there is not a suitable product that can be exchanged for your
              returned item you will be offered a credit on your account or gift
              card based on the value paid at the time of purchase.
              <p>
                Please note, items purchased on finance cannot be exchanged for
                a gift card.
              </p>
              <h3>Hassle free warranty service</h3>
              <p>
                If your product develops a fault within the manufacturer
                warranty period, you can either contact the manufacturer
                directly (some manufacturers provide a high level of warranty
                service - including free pickup or in some cases onsite repair),
                or return to one of our services centres / stores. Where the
                product has been directly imported by PB Tech, you need to
                contact us directly or present the product at any one of our
                service centres / stores together with your proof of purchase.
              </p>{' '}
              <p>
                If your product develops a fault outside of the manufacturer
                warranty or PB Tech warranty period, we offer a full repair
                service and are an authorised repair agent for leading brands
                such as Samsung, HP, Toshiba, Lenovo and more.
              </p>
              <h3>Returning a product / making a warranty claim</h3>
              <p>
                To contact the manufacturer directly to troubleshoot your
                product or to request a warranty repair, please view the list of
                manufacturer / brand warranty contacts (for products imported
                directly by PB Tech please return to us directly by completing
                our request a return form). To return a product to PB Tech
                directly, please complete our request a return form. Or view our
                returns policy for more information.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default LaptopPage
