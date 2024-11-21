import "./Sidebar.css";

import SidebarIcon1 from "../assets/Sidebar-icons8_Menu_48px 1 (1).svg";
import SidebarIcon7 from "../assets/Sidebar-cart-outline 2.svg";
import { useState } from "react";

function Sidebar({
  handleHSHowCart,
  handleAccountCard,
  handleMenuCart,
  cartLength,
}) {
  const [activeSidebar, setActiveSidebar] = useState("home");

  return (
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        <div onClick={handleMenuCart}>
          <li
            onClick={() => setActiveSidebar("menu")}
            className={`sidebar-menu__items ${
              activeSidebar === "menu" ? "sidebar-menu__item" : ""
            }`}
          >
            <a
              className={activeSidebar === "menu" ? "sidebar-menu__link" : ""}
              href="#icon1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className={activeSidebar === "menu" ? "colored-icon" : ""}
              >
                <rect width="24" height="24" fill="url(#pattern0_55_4760)" />
                <defs>
                  <pattern
                    id="pattern0_55_4760"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_55_4760"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_55_4760"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRYCe3YMQ6CQBAF0BmFK3AB9Sz2Vnb2JFrZWJiQWNhYaULvBaw9jCewtWTN+LUgG6clYY2f7MBCNvD3bbNBhAcFKEABClDghwX0O/t9W+7FbI3nGSqlFkT1UOzqTRxqEN98+mYrXFMLj0iSAXb57sTlJ6B6xICASq09sAKn1EIxDwUoQAEKUOC/BfxmrirH8rSFmORJ0ag0MtRzUdW3OJfftAW7YsAIlVYzxGlsjvME1Ta/mTNxq9KO7rujPptfgVyn1shM1ZKaiBkC5XLp25DfpwAFKEABClAgFnDbBf5ajHm67fPXYreefBsFKEABClCgA4EXWNU3n/P/JRYAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </a>
          </li>
        </div>
        <li
          onClick={() => setActiveSidebar("home")}
          className={`sidebar-menu__items ${
            activeSidebar === "home" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={activeSidebar === "home" ? "sidebar-menu__link" : ""}
            href="#icon2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M9.13263 0.945681C10.7368 -0.265241 12.9853 -0.313246 14.6387 0.801667L14.8421 0.945681L22.5335 6.79147C23.3798 7.41433 23.8989 8.33963 23.9874 9.34653L24 9.58775V19.3195C24 21.8278 21.9145 23.868 19.3011 24H16.7874C15.5861 23.9772 14.6147 23.0891 14.5263 21.973L14.5137 21.8038V18.3726C14.5137 17.9994 14.2219 17.6886 13.8316 17.6274L13.7179 17.6154H10.344C9.94105 17.6274 9.61263 17.9034 9.56211 18.2634L9.54947 18.3726V21.793C9.54947 21.8638 9.53558 21.9478 9.52421 22.0078L9.51158 22.033L9.49768 22.1158C9.34737 23.1371 8.46316 23.916 7.36421 23.9892L7.2 24H4.93895C2.29895 24 0.138947 22.033 0 19.5596V9.58775C0.0113684 8.56645 0.48 7.61835 1.26316 6.95829L9.13263 0.945681ZM13.7432 2.25381C12.7832 1.52174 11.4189 1.48694 10.4084 2.1218L10.2177 2.25381L2.53768 8.1356C2.09684 8.44644 1.83158 8.91448 1.76842 9.40653L1.75453 9.59855V19.3195C1.75453 20.9157 3.06821 22.2238 4.73684 22.3198H7.2C7.47789 22.3198 7.71789 22.141 7.75453 21.889L7.78105 21.673L7.79368 21.6118V18.3726C7.79368 17.0885 8.82947 16.0444 10.1558 15.9472H13.7179C15.0682 15.9472 16.1672 16.9325 16.2695 18.1926V21.8038C16.2695 22.0558 16.4589 22.273 16.7116 22.3198H19.0598C20.7524 22.3198 22.1293 21.0849 22.2303 19.5116L22.2442 19.3195V9.59855C22.2303 9.0837 22.0042 8.60245 21.6126 8.24362L21.4484 8.1104L13.7432 2.25381Z"
                fill="#EA7C69"
                className={activeSidebar === "home" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("discount")}
          className={`sidebar-menu__items ${
            activeSidebar === "discount" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={activeSidebar === "discount" ? "sidebar-menu__link" : ""}
            href="#icon3"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4387 1.39562L15.6666 1.60813L16.5651 2.50656C16.8737 2.81371 17.2785 3.00309 17.7091 3.04563L17.895 3.05479H19.18C21.1847 3.05479 22.824 4.6225 22.9386 6.5986L22.945 6.81979V8.10354C22.945 8.54078 23.0957 8.96113 23.3677 9.29536L23.4916 9.43313L24.3901 10.3316C25.8045 11.7396 25.8677 13.9912 24.5719 15.4751L24.4029 15.6565L23.4924 16.5669C23.1862 16.8739 22.9967 17.279 22.9541 17.7091L22.945 17.8948V19.181C22.945 21.1857 21.3774 22.8239 19.4012 22.9384L19.18 22.9448H17.895C17.4593 22.9448 17.0384 23.0962 16.704 23.3689L16.5662 23.4932L15.6689 24.3892C14.2624 25.8053 12.0092 25.8681 10.5247 24.5718L10.3321 24.3915L9.43567 23.4951C9.12518 23.1868 8.71964 22.9967 8.29025 22.954L8.10498 22.9448H6.81873C4.81481 22.9448 3.17588 21.3779 3.06137 19.4022L3.05498 19.181V17.8948C3.05498 17.4598 2.90335 17.0385 2.63075 16.7047L2.5066 16.5672L1.61019 15.6696C0.194475 14.2618 0.131678 12.0086 1.42795 10.5256L1.59707 10.3444L2.50472 9.43548C2.8134 9.1246 3.00318 8.71983 3.0458 8.28939L3.05498 8.10354V6.81979L3.06137 6.59863C3.17165 4.69592 4.6956 3.17149 6.59764 3.06118L6.81873 3.05479H8.10498C8.54058 3.05479 8.96154 2.90368 9.29535 2.63221L9.43286 2.50859L10.3306 1.60963C11.7385 0.195282 13.9916 0.133015 15.4387 1.39562ZM11.8017 2.80327L11.6584 2.93349L10.7568 3.8363C10.1102 4.47828 9.25507 4.86213 8.35226 4.92165L8.10498 4.92979H6.81873C5.83428 4.92979 5.02463 5.68498 4.9377 6.64783L4.92998 6.81979V8.10354C4.92998 9.015 4.59922 9.89143 4.00261 10.5765L3.83335 10.7585L2.92439 11.6687C2.23462 12.3616 2.19446 13.4562 2.80403 14.1987L2.9346 14.3423L3.83368 15.2427C4.47668 15.8872 4.86204 16.7438 4.9218 17.6473L4.92998 17.8948V19.181C4.92998 20.1661 5.68461 20.9752 6.64687 21.0621L6.81873 21.0698H8.10498C9.01472 21.0698 9.89191 21.4009 10.5771 21.9976L10.7591 22.1669L11.6633 23.071C12.361 23.7649 13.4559 23.8053 14.1978 23.1957L14.3413 23.0652L15.2424 22.1653C15.8883 21.5225 16.7438 21.1376 17.6475 21.078L17.895 21.0698H19.18C20.1658 21.0698 20.9754 20.3155 21.0623 19.353L21.07 19.181V17.8948C21.07 16.9837 21.401 16.105 21.9968 15.4229L22.1658 15.2419L23.0752 14.3325C23.765 13.6388 23.8049 12.5448 23.1962 11.8025L23.0658 11.659L22.1635 10.7566C21.5211 10.1096 21.1376 9.25534 21.0781 8.35123L21.07 8.10354V6.81979C21.07 5.83428 20.3149 5.02445 19.352 4.93752L19.18 4.92979H17.895C16.9835 4.92979 16.106 4.5993 15.4223 4.00309L15.2408 3.83395L14.3809 2.97174L14.3311 2.92545C13.6382 2.23574 12.5434 2.19536 11.8017 2.80327ZM16.8705 15.553C16.958 15.6405 17.033 15.7405 17.083 15.853C17.1205 15.9655 17.1455 16.0905 17.1455 16.2155C17.1455 16.3418 17.1205 16.453 17.083 16.5655C17.033 16.678 16.958 16.7905 16.8705 16.878C16.6955 17.053 16.458 17.153 16.208 17.153C15.958 17.153 15.7205 17.053 15.5455 16.878C15.458 16.7905 15.3955 16.678 15.3455 16.5655C15.2955 16.453 15.2705 16.3418 15.2705 16.2155C15.2705 16.0905 15.2955 15.9655 15.3455 15.853C15.3955 15.7405 15.458 15.6405 15.5455 15.553C15.8955 15.203 16.5205 15.203 16.8705 15.553ZM16.875 9.124C17.2078 9.45684 17.2381 9.97766 16.9658 10.3447L16.875 10.4498L10.45 16.8748C10.0839 17.2409 9.49031 17.2409 9.12419 16.8748C8.79136 16.542 8.7611 16.0212 9.03342 15.6542L9.12419 15.549L15.5492 9.124C15.9153 8.75789 16.5089 8.75789 16.875 9.124ZM10.4454 9.12854C10.6204 9.30229 10.7204 9.54104 10.7204 9.79104C10.7204 9.91604 10.7079 10.0273 10.6579 10.141C10.6079 10.2535 10.5329 10.3535 10.4454 10.4535C10.3579 10.541 10.2579 10.6023 10.1454 10.6523C10.0329 10.7023 9.90785 10.7285 9.78285 10.7285C9.65785 10.7285 9.54535 10.7023 9.43285 10.6523C9.32035 10.6023 9.20785 10.541 9.12035 10.4535C9.03285 10.3535 8.97035 10.2535 8.92035 10.141C8.87035 10.0273 8.84535 9.91604 8.84535 9.79104C8.84535 9.66479 8.87035 9.54104 8.92035 9.42854C8.97035 9.31604 9.03285 9.20354 9.12035 9.12854C9.48285 8.77729 10.0954 8.77729 10.4454 9.12854Z"
                fill="#EA7C69"
                className={activeSidebar === "discount" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("vector")}
          className={`sidebar-menu__items ${
            activeSidebar === "vector" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={activeSidebar === "vector" ? "sidebar-menu__link" : ""}
            href="#icon4"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1222 6.45075C11.2318 6.66856 11.2977 6.90491 11.3166 7.15128L11.8023 14.0119C11.8088 14.1059 11.8534 14.1935 11.9261 14.2553C11.9806 14.3016 12.0476 14.3306 12.1225 14.339L12.1999 14.3405L19.1676 13.9207C19.7334 13.8875 20.2882 14.0844 20.7005 14.4648C21.1128 14.8453 21.3461 15.3755 21.343 15.989C21.0331 20.5046 17.7163 24.2796 13.1988 25.2581C8.68128 26.2366 4.04514 24.1842 1.82227 20.231C1.22787 19.2119 0.827223 18.0972 0.642247 16.9686L0.583034 16.5449C0.531628 16.2276 0.503988 15.9072 0.5 15.5994L0.503892 15.2965C0.516748 10.5818 3.82695 6.50503 8.48511 5.40543L8.80478 5.33509L8.97675 5.30665C9.87749 5.18351 10.7637 5.65566 11.1222 6.45075ZM9.27053 7.09766L9.16521 7.10965L8.87961 7.17416C5.16908 8.06847 2.50775 11.2629 2.35995 15.0263L2.3535 15.3326C2.34461 15.5657 2.35312 15.799 2.38124 16.0472L2.41596 16.301C2.54015 17.3688 2.88494 18.4008 3.43643 19.3465C5.2704 22.6079 9.08336 24.2959 12.7988 23.4911C16.5141 22.6863 19.2421 19.5816 19.4948 15.9267C19.4948 15.8717 19.4717 15.8191 19.4308 15.7813C19.4035 15.7561 19.3699 15.739 19.3343 15.7314L19.28 15.7272L12.3238 16.1462C11.7367 16.1879 11.1569 15.9991 10.7125 15.6214C10.2682 15.2438 9.99604 14.7086 9.95652 14.1375L9.47128 7.28271C9.47041 7.27135 9.46732 7.26027 9.44603 7.21623C9.41438 7.14619 9.3456 7.10164 9.27053 7.09766ZM14.7787 0.501313C20.1356 0.652836 24.6286 4.50203 25.488 9.67605L25.5 9.82088L25.4972 10.0732C25.4671 10.4453 25.3172 10.7991 25.0681 11.0835C24.7552 11.4405 24.3096 11.6608 23.8235 11.6959L15.5167 12.2376C14.4519 12.2977 13.5369 11.5064 13.4676 10.4669L12.9123 2.31142L12.9186 2.12869L12.9462 1.9228C13.0203 1.55774 13.2105 1.22422 13.4906 0.970535C13.8424 0.651956 14.3092 0.483261 14.7787 0.501313ZM14.7641 2.31128L15.3139 10.3477C15.3171 10.3965 15.36 10.4336 15.4018 10.4313L23.6478 9.8919L23.6068 9.66689C22.7897 5.60025 19.2649 2.58053 15.0359 2.32415L14.7641 2.31128Z"
                fill="#EA7C69"
                className={activeSidebar === "vector" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("message")}
          className={`sidebar-menu__items ${
            activeSidebar === "message" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={activeSidebar === "message" ? "sidebar-menu__link" : ""}
            href="#icon5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4304 0C19.2471 0.0227344 20.9762 0.877248 22.2151 2.36459C23.4539 3.85193 24.0943 5.84228 23.9887 7.81196L23.9872 16.1279C24.0943 18.1577 23.4539 20.1481 22.2151 21.6354C20.9762 23.1228 19.2471 23.9773 17.4202 24H6.54742C2.74398 24 0 20.5847 0 16.188V7.81196C0 3.41535 2.74398 0 6.54742 0H17.4304ZM17.4101 2.03784H6.54742C3.79535 2.03784 1.82093 4.4954 1.82093 7.81196V16.188C1.82093 19.5046 3.79535 21.9622 6.54742 21.9622H17.4101C18.7288 21.9457 19.9839 21.3254 20.8831 20.2458C21.7823 19.1662 22.2472 17.7215 22.1678 16.188L22.1694 7.75185C22.2472 6.27849 21.7823 4.83377 20.8831 3.75417C19.9839 2.67456 18.7288 2.0543 17.4101 2.03784ZM19.2288 7.51782C19.5145 7.91723 19.488 8.48348 19.1859 8.84735L19.087 8.95007L14.1586 13.3648C12.9616 14.409 11.3077 14.4612 10.0596 13.5167L9.86608 13.3593L4.90472 8.95271C4.51084 8.60288 4.44495 7.96195 4.75753 7.52114C5.0417 7.12041 5.54083 7.02303 5.92516 7.27147L6.03668 7.35642L10.9918 11.7575C11.5473 12.2421 12.309 12.2794 12.889 11.8758L13.0299 11.7657L17.9491 7.35907C18.3417 7.0074 18.9146 7.07848 19.2288 7.51782Z"
                fill="#EA7C69"
                className={activeSidebar === "message" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("notification")}
          className={`sidebar-menu__items ${
            activeSidebar === "notification" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={
              activeSidebar === "notification" ? "sidebar-menu__link" : ""
            }
            href="#icon6"
          >
            <svg
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2599 22.6133C14.6307 22.9152 14.6894 23.4641 14.3912 23.8394C14.1707 24.1168 13.9159 24.3652 13.6459 24.5688C12.7364 25.2825 11.58 25.6061 10.4316 25.4693C9.28222 25.3324 8.23376 24.7453 7.51823 23.8362C7.22175 23.4595 7.28308 22.9108 7.65522 22.6107C8.02736 22.3106 8.56939 22.3726 8.86588 22.7493C9.2974 23.2976 9.93337 23.6537 10.633 23.737C11.3336 23.8205 12.0384 23.6233 12.6032 23.1803C12.7697 23.0547 12.9194 22.9087 13.0486 22.7461C13.3469 22.3708 13.8892 22.3114 14.2599 22.6133ZM2.44016 9.24968L2.45555 8.50489C2.46655 8.18632 2.48358 7.8906 2.50856 7.6012C2.88318 3.5557 6.74456 0.5 10.956 0.5H11.0451C15.2543 0.5 19.1168 3.55357 19.5042 7.60671C19.5264 7.86435 19.536 8.09322 19.5389 8.41508L19.54 9.39978C19.5409 9.48947 19.5424 9.56836 19.5447 9.64191L19.5563 9.88721L19.612 10.1211C19.7879 10.7725 20.097 11.3816 20.5203 11.9103L20.7087 12.1318L20.7858 12.2308C21.2935 12.9896 21.5835 13.8725 21.625 14.8234L21.6238 15.3275C21.5883 16.4537 21.1749 17.5414 20.4173 18.4477C19.4139 19.5126 18.0542 20.1742 16.6092 20.3072C12.8775 20.7124 9.11249 20.7124 5.3912 20.3082C3.9362 20.1683 2.58055 19.5087 1.53329 18.4029C0.761024 17.4614 0.350519 16.276 0.37613 15.078L0.377187 14.7802C0.421803 13.8694 0.710045 12.9873 1.2117 12.2252L1.29567 12.1172C1.88156 11.4749 2.28211 10.6888 2.45591 9.84132L2.43711 9.91744L2.44016 9.24968ZM11.0451 2.24419H10.956C7.58314 2.24419 4.51004 4.67608 4.22459 7.75847C4.20998 7.92785 4.19832 8.10259 4.18922 8.2865L4.16915 8.86949L4.16099 10.0186L4.14301 10.1958C3.90555 11.3538 3.35911 12.4262 2.56162 13.3005L2.6232 13.2291L2.51306 13.4114C2.30673 13.7831 2.17362 14.1869 2.12103 14.5853L2.09919 14.8234L2.09899 15.0968C2.0821 15.8928 2.35108 16.6695 2.81711 17.2413C3.53602 17.9981 4.50853 18.4713 5.5646 18.5729C9.1741 18.9649 12.8159 18.9649 16.4392 18.5715C17.4838 18.4753 18.4557 18.0025 19.1355 17.2833C19.6499 16.6663 19.9218 15.8871 19.9019 15.067L19.903 14.8627C19.8766 14.2732 19.6888 13.7016 19.3592 13.209L19.3782 13.2407L19.2059 13.0386C18.6117 12.3051 18.18 11.4544 17.9396 10.5425L17.8585 10.1977L17.8424 10.0819C17.8302 9.91266 17.8232 9.76227 17.8194 9.58142L17.816 8.45062C17.8137 8.16305 17.8059 7.96948 17.7884 7.76658C17.493 4.67594 14.417 2.24419 11.0451 2.24419Z"
                fill="#EA7C69"
                className={activeSidebar === "notification" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("card-outline")}
          className={`sidebar-menu__items ${
            activeSidebar === "card-outline" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={
              activeSidebar === "card-outline" ? "sidebar-menu__link" : ""
            }
            href="#cart"
          >
            <button onClick={handleHSHowCart} className="sidebar-menu__button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  activeSidebar === "card-outline" ? "colored-icon" : ""
                }
              >
                <g clip-path="url(#clip0_36_2893)">
                  <path
                    d="M8.30793 23.0769C8.81778 23.0769 9.2311 22.6636 9.2311 22.1538C9.2311 21.644 8.81778 21.2307 8.30793 21.2307C7.79808 21.2307 7.38477 21.644 7.38477 22.1538C7.38477 22.6636 7.79808 23.0769 8.30793 23.0769Z"
                    stroke="#EA7C69"
                  />
                  <path
                    d="M20.3079 23.0769C20.8178 23.0769 21.2311 22.6636 21.2311 22.1538C21.2311 21.644 20.8178 21.2307 20.3079 21.2307C19.7981 21.2307 19.3848 21.644 19.3848 22.1538C19.3848 22.6636 19.7981 23.0769 20.3079 23.0769Z"
                    stroke="#EA7C69"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.92334 0.923096H4.45511L7.10394 18.4616H21.231"
                    stroke="#EA7C69"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.30209 13.8461H21.0487C21.1506 13.8462 21.2495 13.8056 21.3284 13.7312C21.4072 13.6568 21.4613 13.5532 21.4813 13.4381L23.0685 4.29959C23.0813 4.2259 23.0797 4.14986 23.0639 4.07695C23.0481 4.00403 23.0184 3.93608 22.977 3.87797C22.9356 3.81987 22.8836 3.77307 22.8246 3.74096C22.7656 3.70884 22.7011 3.69221 22.6358 3.69226H5.53857"
                    stroke="#EA7C69"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_2893">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {cartLength > 0 && (
                <span className="cart-count">{cartLength}</span>
              )}
            </button>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("account")}
          className={`sidebar-menu__items ${
            activeSidebar === "account" ? "sidebar-menu__item" : ""
          }`}
        >
          <a
            className={activeSidebar === "account" ? "sidebar-menu__link" : ""}
            href="#account"
          >
            <button
              onClick={handleAccountCard}
              className="sidebar-menu__button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className={activeSidebar === "account" ? "colored-icon" : ""}
              >
                <rect width="24" height="24" fill="url(#pattern0_55_4761)" />
                <defs>
                  <pattern
                    id="pattern0_55_4761"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_55_4761"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_55_4761"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFeklEQVRYCe1ZXWwUVRQ+d3aWVuSnhU7XH4xarSVpQEJEfdEH3ogm0MZS9BEiuEi1qIBom4wKIj9SDEhNAzz4IA8USiTExIQnXzSCGowKNIDRpNLdLaXFCu3u7PG7272TSWl3fnaLJuzmfHN+7rnn3HPn3umdKVHxV5yBO3sGRCHL725qKplRlmoQTHXEtIAElWfiM/WTRj+KNHddGwx3Vu/dO5yxF+BSsAJiLWtfIOadGPRDlPt3mZk3RLZ+djS3m7fWvAtgIhFviW5Fus2AdxK0xziXeEscOWJ573Srp3aryZ8l0RLdjh7OwceYxHuC04vSOkckNCGeZEHvwy8OjBJTc2JuxUejSvBrXncg3vrKCmZxWKVn4sN8c9rL9+zaNaRsTh4z106jFB0k4uVZOwsWS42t+09kdd8scAFyw86ckTpnr3lBR4wP2hsREKtq4nGgUS65TnjUA5K6jZhVKzo6klLxC81vB+VfVpasswdPFBfDw6vcBi/7Sp+wXrIKch8gqTpuhJZJIQgCF4ClYycVxHuNHYeuex1AubnnGvbJPuWP/WHHUjavPHABSLAQyJAl9OMZwcdFpMnuI4SwY/kIkXHNp4B7MxHk5UbpJcn8QKRuXrT9me+3ZZ9CPgVgOY9m06b9Y8ujltt3DV4A019qmDzCVUr2ylkvfcTh2+OQfYmaL2+ns6AzStU0Xqpkr5w1WqZ88Wi1YymbVx64ACH4uEqCJ0pTn9k0Q+luvN9sLsOTa53yw+HPjqVsXnngAipCfceQRG1Ew7JSBzCTrntB+iSt4QPoOxuQ1G3ErcAFuCaUGSZCb0t0GQJ0qXZvRwmWg2/M9vnvjhLZAVBva/RjLIE3lA4uD3PtIUEnR0KpX6DTFEuvtYifh18UugFkCMXvNLa0b8woAS+IEbBnths3NITic43deBd4LWvyxHC32irP923I9ziddwFqtLF3ow2QdzjOR1DHpcv8f3qhcQ5RnlDlIQ/npCU43zyBJVMl2yFfgvw9sfhqYDB0vJCvlDJ+EcUZuJNnwNNTiE1Tj6V61wsSdXifnY8JuxuYDBrCR46zeMR2VeqRNmGaKbckrgXIwcdTV04h8LNuwQrc/o2hRxa7FaG5JY0lY/grK2734OWwnkHuZinkgp6rUbbh1LlccgkcxDaODJXue6Ct7YbUC40/16+/q2TqjddJiG0ydjb3LilPBNc7gEHPU50r9cQnkzV4mUPGHhgMt0k5C7nfsuL4zLUAbBLHXap13VTjp/FufXT27KTDO+yQxxVdC8BX5j9Uz37qmaPkyeK9qcSDdmym38nlp7m04+EjflU+yaS+QsmTxTVONdqxBdm5bdsYwb0Aps9VH2yqt2Mta6qVXmge3/zqY9jAm+y4jty2bYygjdFvUY0L8U4YzwOSyom0E1da1j0slUKi14xWcSj9JWKWAZJ+M8KRo1LIBdcC5AsHi3QjglwHJNVoZJ2Jt0ZfYiwwacgHMoaMJVJ0GnFqAEmDaRFqxB+xtFRyQeRqdLbF3okuwb+JOmGbCmSJfyDWdlCYTlaa+//OGj2x+MaV06lkynPMtAHzsNDRaQhfOeojW/Z/7bBNKHouQEbobV3zuEhrx/DWVSV1B27Cdkowf8dpcZo160KpbvXPNA9elTM8aK4qH6aSWTTC1ULQIhbiKZypFqN/KeCki5ym+siH7WedxlyyrwJkoKubVs9MhvU38V2nGfp0oBB0HW9tbeERa/es7R0DfgL6LkAF7zFXV4SS+ko8mV6EbQEQhH7CHfoiaWmH5mz7tC9IgMAFOJPhn3w1WMtPY2nMw7vvfBR1H9ZxBZYJID1FAncsgXflHsz0WSy1n7GUvsUnlfOytYjiDBRnIPgM/AtpCL31PxAotAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
