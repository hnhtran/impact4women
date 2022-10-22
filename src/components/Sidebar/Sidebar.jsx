import './Sidebar.css'
import { DashboardPic } from '../DashboardPic/DashboardPic'
import { Link } from 'react-router-dom'

export const Sidebar = ({handleDashboardClick}) => {

  return (
    <>
      <ul className='sidebarlist'>
        <Link to='/dashboard' className='sidebarlink'>
        <li>
          <svg className='svg-icon' width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.9786 17.2132L20.7625 0.383302C20.6386 0.261796 20.4913 0.165398 20.3293 0.0996266C20.1672 0.0338548 19.9934 0 19.8179 0C19.6424 0 19.4687 0.0338548 19.3066 0.0996266C19.1445 0.165398 18.9973 0.261796 18.8733 0.383302L1.65721 17.2132C1.15565 17.7039 0.871429 18.3704 0.871429 19.0655C0.871429 20.5089 2.071 21.6824 3.54643 21.6824H5.36041V33.6915C5.36041 34.4153 5.9581 35 6.69791 35H17.1429V25.8408H21.8242V35H32.938C33.6778 35 34.2754 34.4153 34.2754 33.6915V21.6824H36.0894C36.8 21.6824 37.4813 21.4085 37.9828 20.9137C39.0236 19.8915 39.0236 18.2355 37.9786 17.2132Z" fill="currentColor" />
          </svg>
          {/* <img src="img/homeicon.svg" alt="dashboardicon" className='svg-icon'/> */}
          Dashboard
        </li>
        </Link>
        <li>
          <svg className='svg-icon' width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.346 20.083V41.9689L19.8835 42.6992L0.871338 33.2282V9.49378L19.8835 0L38.8957 9.49378V26.473H35.9708V12.7801L21.346 20.083ZM19.8835 3.28631L14.3764 6.0249L28.567 13.1909L34.1655 10.4066L19.8835 3.28631ZM18.4211 38.7054V20.083L3.79629 12.7801V31.4025L18.4211 38.7054ZM5.60153 10.4066L19.8835 17.527L25.3221 14.834L11.1087 7.66805L5.60153 10.4066ZM30.1209 38.1577V35.2365H44.7456V38.1577H30.1209ZM30.1209 29.3942H44.7456V32.3154H30.1209V29.3942ZM24.271 44V41.0788H27.1959V44H24.271ZM24.271 32.3154V29.3942H27.1959V32.3154H24.271ZM24.271 38.1577V35.2365H27.1959V38.1577H24.271ZM21.346 38.7054H21.3689H21.346ZM30.1209 44V41.0788H44.7456V44H30.1209Z" fill="currentColor" />
          </svg>
          {/* <img src="img/producticon.svg" alt="producticon" className='svg-icon'/> */}
          Product</li>
        <li className='sublist'>Add New Item</li>
        <li className='sublist'>Stocktake</li>
        <li className='sublist'>Move to Production</li>
        <li>
          <svg className='svg-icon' width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.74916 7.79488H8.63546V13.641H28.067V7.79488H31.9533V17.5385H35.8396V7.79488C35.8396 5.65128 34.0907 3.89744 31.9533 3.89744H23.8309C23.0148 1.63692 20.8773 0 18.3512 0C15.8251 0 13.6877 1.63692 12.8715 3.89744H4.74916C2.61169 3.89744 0.862858 5.65128 0.862858 7.79488V35.0769C0.862858 37.2205 2.61169 38.9744 4.74916 38.9744H16.4081V35.0769H4.74916V7.79488ZM18.3512 3.89744C19.42 3.89744 20.2944 4.77436 20.2944 5.84616C20.2944 6.91795 19.42 7.79488 18.3512 7.79488C17.2825 7.79488 16.4081 6.91795 16.4081 5.84616C16.4081 4.77436 17.2825 3.89744 18.3512 3.89744Z" fill="currentColor" />
            <path d="M35.8395 20.4619L25.1716 31.1799L19.3228 25.3337L16.408 28.2568L25.1716 37.026L38.7543 23.385L35.8395 20.4619Z" fill="currentColor" />
          </svg>
          {/* <img src="img/itemdispatchicon.svg" alt="itemdispatchicon" className='svg-icon'/> */}
          Item Dispatch</li>
        <li className='sublist'>Dispatch Form</li>
        <li>
          <svg className='svg-icon' width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.2994 18.37L21.5944 23.8333H12.5967V22H19.9118C20.0746 21.9999 20.2342 21.9549 20.3739 21.8696C20.5135 21.7844 20.6278 21.6622 20.7046 21.516C20.7814 21.3698 20.8179 21.2052 20.8101 21.0395C20.8023 20.8739 20.7506 20.7135 20.6604 20.5755L19.0624 18.1335C18.7346 17.6308 18.2898 17.2186 17.7676 16.9336C17.2455 16.6486 16.6622 16.4996 16.0698 16.5H1.79953C1.32227 16.5 0.864548 16.6932 0.52707 17.037C0.189593 17.3808 0 17.8471 0 18.3333V29.3333C0 30.3058 0.379186 31.2384 1.05414 31.9261C1.7291 32.6137 2.64453 33 3.59906 33H20.9447C21.7142 33.0002 22.4749 32.8328 23.1757 32.509C23.8765 32.1852 24.5012 31.7125 25.0081 31.1227L35.9906 18.3333L33.3777 17.446C32.5228 17.1557 31.6102 17.0882 30.7231 17.2496C29.8361 17.411 29.0028 17.7962 28.2994 18.37ZM31.0563 8.04833C31.8679 7.19583 32.37 6.017 32.37 4.71533C32.37 3.41367 31.8679 2.23483 31.0563 1.38233C30.6459 0.94596 30.1531 0.598576 29.6076 0.361034C29.0621 0.123492 28.4752 0.000690501 27.8819 1.1809e-07C27.8819 1.1809e-07 25.6433 -0.00550032 23.3939 2.35767C21.1445 -0.00550032 18.9059 1.1809e-07 18.9059 1.1809e-07C18.3128 0.000768468 17.726 0.123426 17.1806 0.360631C16.6351 0.597835 16.1423 0.944712 15.7315 1.3805C14.9199 2.23483 14.4178 3.41183 14.4178 4.7135C14.4178 6.01517 14.9199 7.19583 15.7315 8.0465L23.3939 16.5L31.0563 8.04833Z" fill="currentColor" />
          </svg>
          {/* <img src="img/recipienticon.svg" alt="recipienticon" className='svg-icon'/> */}
          Recipient</li>
        <li className='sublist'>Add Recipient</li>
        <li>
          <svg className='svg-icon' width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.37428C0 1.95968 2.28667 0 5.10417 0H21.1458C23.9662 0 26.25 1.95968 26.25 4.37428V4.99918H27.3642C28.1771 4.9992 28.9739 5.19333 29.6653 5.55978C30.3567 5.92624 30.9152 6.45052 31.2783 7.07384L34.5392 12.6604C34.8426 13.1813 35.0004 13.7555 35 14.3376V22.4963C35 23.4907 34.5391 24.4444 33.7186 25.1475C32.8981 25.8507 31.7853 26.2457 30.625 26.2457H28.9829C28.6606 27.3199 27.9306 28.2718 26.9079 28.9515C25.8851 29.6311 24.6276 30 23.3333 30C22.0391 30 20.7816 29.6311 19.7588 28.9515C18.736 28.2718 18.006 27.3199 17.6837 26.2457H14.3996C14.067 27.3523 13.302 28.3279 12.232 29.01C11.1621 29.692 9.8518 30.0393 8.51939 29.994C7.18698 29.9487 5.9129 29.5135 4.90937 28.761C3.90583 28.0085 3.23343 26.984 3.00417 25.8582C2.10887 25.5119 1.34921 24.9515 0.816338 24.2443C0.283464 23.5372 1.31967e-05 22.7132 0 21.8714V4.37428ZM26.25 7.49877V12.4979H31.1821L28.6679 8.18865C28.5467 7.98132 28.3605 7.80698 28.1303 7.68514C27.9 7.56331 27.6348 7.49877 27.3642 7.49877H26.25ZM8.75 22.4963C7.97645 22.4963 7.23459 22.7597 6.68761 23.2284C6.14062 23.6972 5.83333 24.333 5.83333 24.9959C5.83333 25.6588 6.14062 26.2946 6.68761 26.7634C7.23459 27.2321 7.97645 27.4955 8.75 27.4955C9.52355 27.4955 10.2654 27.2321 10.8124 26.7634C11.3594 26.2946 11.6667 25.6588 11.6667 24.9959C11.6667 24.333 11.3594 23.6972 10.8124 23.2284C10.2654 22.7597 9.52355 22.4963 8.75 22.4963ZM20.4167 24.9959C20.4167 25.6588 20.724 26.2946 21.2709 26.7634C21.8179 27.2321 22.5598 27.4955 23.3333 27.4955C24.1069 27.4955 24.8487 27.2321 25.3957 26.7634C25.9427 26.2946 26.25 25.6588 26.25 24.9959C26.25 24.333 25.9427 23.6972 25.3957 23.2284C24.8487 22.7597 24.1069 22.4963 23.3333 22.4963C22.5598 22.4963 21.8179 22.7597 21.2709 23.2284C20.724 23.6972 20.4167 24.333 20.4167 24.9959Z" fill="currentColor" />
          </svg>
          {/* <img src="img/suppliericon.svg" alt="suppliericon" className='svg-icon'/> */}
          Supplier</li>
        <li className='sublist'>Add Supplier</li>
      </ul>
    </>
  )
}
