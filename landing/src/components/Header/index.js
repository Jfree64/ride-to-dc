import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use'

import './index.scss'

export function Header() {
  const [isActive, setIsActive] = useState(false)
  const { y} = useWindowScroll();
  return (
    <React.Fragment>
    <div className={`header ${y > 0 ? "header-shadow" : ''}`}>
      <Link to='/'>
        <svg className="header-logo" width="106" height="40" viewBox="0 0 106 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9923 35.3781C20.7568 35.4076 20.5507 35.3487 20.3741 35.2309C20.1975 35.1132 20.0208 34.9365 19.9031 34.7305C19.7853 34.5244 19.6676 34.2594 19.6087 33.9945C19.5498 33.7295 19.5204 33.4646 19.5498 33.1997C19.5793 32.7875 19.6381 32.3459 19.697 31.9044C19.7559 31.4628 19.8442 31.0506 19.962 30.6091C20.0503 30.1675 20.168 29.7553 20.3152 29.3138C20.4624 28.8722 20.6096 28.46 20.7568 28.0185C20.9629 27.4591 21.1984 26.9881 21.4339 26.5465C21.6694 26.1344 21.9049 25.7517 22.1699 25.4573C22.4348 25.1629 22.6703 24.9274 22.9353 24.7508C23.2002 24.5741 23.4946 24.4858 23.7595 24.4269C23.8479 24.4269 23.9067 24.3975 23.9951 24.4269C24.0539 24.4269 24.1422 24.4269 24.2011 24.4564C24.26 24.4564 24.3483 24.4858 24.4072 24.5153C24.4661 24.5447 24.5544 24.5741 24.6133 24.6036C24.6721 24.6624 24.731 24.6919 24.7899 24.7508C24.8193 24.8096 24.8488 24.8391 24.8782 24.898C24.9077 24.9568 24.9077 24.9863 24.9077 25.0451C24.9077 25.104 24.9077 25.1335 24.9077 25.1629C24.8782 25.2218 24.8782 25.2807 24.8488 25.369C24.8193 25.4573 24.7899 25.5456 24.7899 25.6339C24.7605 25.7517 24.731 25.8694 24.7016 25.9872C24.6721 26.1049 24.6427 26.2521 24.5838 26.4288C24.4072 27.1647 24.26 27.9301 24.0834 28.6955C23.9362 29.4609 23.7595 30.1969 23.5829 30.9034C23.4063 31.61 23.2002 32.2871 22.9353 32.9053C22.6998 33.5235 22.4054 34.0828 22.0521 34.5244C21.9638 34.6421 21.846 34.7599 21.7577 34.8777C21.6694 34.966 21.5811 35.0543 21.4633 35.1132C21.375 35.172 21.2867 35.2309 21.1984 35.2604C21.1395 35.3192 21.0512 35.3487 20.9923 35.3781ZM21.5811 21.5419C21.1101 21.6008 20.6391 21.748 20.1975 21.9835C19.7559 22.219 19.3143 22.5134 18.9022 22.8961C18.49 23.2788 18.1073 23.7498 17.7246 24.2797C17.3419 24.8096 16.9887 25.4573 16.6354 26.1638C16.3704 26.6937 16.1349 27.253 15.9289 27.7829C15.7228 28.3128 15.5462 28.8427 15.3695 29.3726C15.2223 29.9025 15.0751 30.4324 14.9868 30.9623C14.8985 31.4922 14.8102 31.9927 14.7513 32.5226C14.6924 33.0819 14.6924 33.5824 14.6924 34.0534C14.7219 34.5244 14.7513 34.966 14.8396 35.3487C14.928 35.7314 15.0457 36.0846 15.1929 36.4085C15.3401 36.7029 15.5167 36.9972 15.7522 37.2033C15.9583 37.4388 16.2233 37.6154 16.5471 37.7626C16.8415 37.9098 17.1947 38.0276 17.5774 38.1159C17.9601 38.2042 18.4017 38.2337 18.8433 38.2337C19.3143 38.2337 19.8148 38.2042 20.3741 38.1159C20.6391 38.0865 20.9334 38.0276 21.1984 37.9393C21.4633 37.851 21.7283 37.7626 21.9638 37.6154C22.1993 37.4977 22.4642 37.3505 22.6703 37.1739C22.9058 36.9972 23.1119 36.8206 23.3474 36.6145L23.3768 36.5851L25.0843 34.5244C25.2609 34.8188 25.4376 35.1132 25.6436 35.4076C25.8497 35.6725 26.0558 35.9374 26.2913 36.1435C26.5268 36.3496 26.7917 36.5262 27.1156 36.6145C27.4394 36.7029 27.8221 36.7323 28.2637 36.6734H28.2931H28.3225H28.352H28.3814C29.3529 36.4968 30.0594 36.1141 30.5304 35.6431C31.0015 35.172 31.2958 34.5833 31.4136 34.0239C31.5314 33.4646 31.5019 32.9347 31.3842 32.552C31.2664 32.1693 31.0603 31.9338 30.8248 31.9632H30.7659L30.7071 31.9927L30.6482 32.0221L30.5893 32.0515C30.4421 32.1693 30.2655 32.3165 30.1183 32.4342C29.9711 32.552 29.7945 32.6992 29.6473 32.817C29.5001 32.9347 29.3529 33.023 29.2351 33.1113C29.1174 33.1702 28.9996 33.2291 28.9113 33.2585C28.8524 33.2585 28.7936 33.288 28.7347 33.2585C28.6758 33.2585 28.5875 33.2291 28.5286 33.1408C28.4697 33.0819 28.4109 32.9641 28.3814 32.7875C28.352 32.6109 28.352 32.3754 28.352 32.081C28.352 32.081 28.4109 31.6983 28.4697 31.0506C28.558 30.4324 28.6464 29.5787 28.7936 28.6661C28.9113 27.7535 29.0585 26.8115 29.2057 25.9577C29.3529 25.104 29.5001 24.3681 29.6473 23.9265C29.6473 23.9265 29.6178 23.8676 29.559 23.8087C29.5001 23.7498 29.4118 23.6615 29.2646 23.5732C29.1468 23.4849 28.9702 23.3966 28.7936 23.3671C28.5875 23.3083 28.3814 23.3083 28.1165 23.3377H28.0576L27.881 23.426C27.616 23.0139 27.2627 22.6606 26.88 22.3662C26.4679 22.0718 26.0263 21.8658 25.4964 21.6891C24.9665 21.5419 24.3778 21.4536 23.7301 21.4242C23.0825 21.3948 22.3759 21.4242 21.5811 21.5419Z" />
          <path d="M36.5065 19.9522H36.477H36.4476H36.4182H36.3887L34.9757 20.1878C34.7107 20.2172 34.4752 20.3349 34.2691 20.541C34.0631 20.7471 33.857 21.0415 33.6804 21.4242C33.5037 21.8069 33.3565 22.3073 33.2093 22.8961C33.0622 23.4849 32.9444 24.1914 32.8561 25.0157C32.7678 25.6928 32.6795 26.3993 32.5911 27.1647C32.5028 27.9301 32.4145 28.725 32.3556 29.5198C32.2673 30.3147 32.2084 31.1389 32.179 31.9632C32.1496 32.7581 32.1201 33.5529 32.1201 34.3183C32.1201 34.5244 32.1201 34.6716 32.1496 34.8188C32.1496 34.966 32.179 35.0837 32.179 35.172C32.179 35.2603 32.2084 35.3487 32.2379 35.4075C32.2673 35.4664 32.2967 35.5253 32.2967 35.5547C32.3851 35.7019 32.4734 35.8197 32.6206 35.908C32.7678 35.9963 32.9444 36.0552 33.1799 36.1141C33.386 36.1729 33.6509 36.1729 33.9453 36.1729C34.2397 36.1729 34.5635 36.1435 34.9168 36.0846C35.0051 36.0846 35.1229 36.0552 35.2701 36.0258C35.4172 35.9963 35.5644 35.9374 35.7116 35.8786C35.8588 35.8197 36.006 35.7314 36.0943 35.6136C36.2121 35.4959 36.271 35.3487 36.3004 35.172C36.3887 34.1417 36.5065 33.1702 36.6831 32.1987C36.8597 31.2567 37.0952 30.3147 37.3602 29.4315C37.6251 28.5483 37.949 27.6946 38.3317 26.8998C38.6849 26.0755 39.1265 25.3101 39.5681 24.5741C39.627 24.6036 39.7153 24.633 39.7742 24.6624C39.833 24.6919 39.9214 24.6919 40.0097 24.7213C40.098 24.7213 40.1569 24.7507 40.2452 24.7213C40.3335 24.7213 40.4218 24.7213 40.5101 24.6919C40.6279 24.6624 40.7456 24.633 40.8928 24.6036C41.0106 24.5741 41.1283 24.5152 41.2461 24.4564C41.3639 24.3975 41.4816 24.3386 41.5699 24.2503C41.6877 24.162 41.776 24.1031 41.8643 23.9853C41.9821 23.897 42.0704 23.7793 42.1293 23.691C42.2176 23.5732 42.2765 23.4849 42.3353 23.3671C42.3942 23.2494 42.4236 23.1316 42.4825 23.0139C42.512 22.8961 42.5414 22.7784 42.5414 22.6312C42.5708 22.3368 42.5708 22.0718 42.512 21.7774C42.4531 21.5125 42.3353 21.2475 42.1587 21.0415C41.9821 20.8354 41.7171 20.6588 41.3639 20.5705C41.0106 20.4821 40.569 20.4527 39.9802 20.541C39.833 20.5705 39.6858 20.5999 39.5092 20.6588C39.362 20.7177 39.2148 20.7765 39.0382 20.8648C38.891 20.9532 38.7438 21.0415 38.5672 21.1298C38.42 21.2475 38.2728 21.3653 38.0962 21.4831C38.0667 21.4831 38.0667 21.5125 38.0373 21.5419C38.0078 21.5714 37.9784 21.6008 37.9195 21.6597C37.8607 21.7186 37.8018 21.7774 37.7429 21.8658C37.6546 21.9541 37.5663 22.0424 37.478 22.1601L37.6251 20.4233V20.3644C37.5957 20.2761 37.5663 20.2172 37.5368 20.1289C37.478 20.07 37.4191 19.9817 37.3308 19.9228C37.2424 19.8639 37.1247 19.8345 37.0069 19.8051C36.8597 19.9228 36.7125 19.9228 36.5065 19.9522Z" />
          <path d="M47.1338 25.6044C47.1633 25.3689 47.1927 25.1629 47.2516 24.9274C47.3105 24.6918 47.3694 24.4563 47.4282 24.2208C47.4871 23.9853 47.5754 23.7498 47.6637 23.4849C47.7521 23.2494 47.8404 22.9844 47.9581 22.7489C48.1053 22.3956 48.2819 22.0718 48.4291 21.8069C48.5763 21.5419 48.753 21.3064 48.9002 21.1003C49.0768 20.9237 49.224 20.7471 49.4006 20.6588C49.5772 20.541 49.7244 20.4821 49.9011 20.4527C50.0188 20.4232 50.166 20.4232 50.2838 20.4527C50.4015 20.4527 50.5193 20.5116 50.6076 20.5704C50.6959 20.6588 50.7842 20.7471 50.8137 20.9237C50.8726 21.0709 50.8725 21.3064 50.8431 21.5713C50.8137 21.8363 50.7842 22.0718 50.7254 22.3073C50.6665 22.5428 50.5782 22.7783 50.4604 22.9844C50.3427 23.2199 50.2249 23.426 50.0483 23.6321C49.9011 23.8381 49.695 24.0442 49.4889 24.2503C49.3123 24.4269 49.1062 24.5741 48.9296 24.7213C48.753 24.8685 48.5469 24.9862 48.3408 25.104C48.1348 25.2217 47.9287 25.3101 47.7226 25.3984C47.5754 25.5161 47.3694 25.575 47.1338 25.6044ZM47.3693 17.4205C46.9572 17.4794 46.5745 17.6266 46.1918 17.8326C45.8091 18.0387 45.4558 18.3331 45.132 18.7158C44.8082 19.0985 44.4844 19.5401 44.2194 20.07C43.925 20.5999 43.6601 21.2181 43.4246 21.8952C43.2774 22.3368 43.1302 22.8078 42.983 23.2494C42.8652 23.7204 42.7475 24.1914 42.6297 24.6624C42.5414 25.1334 42.4531 25.6044 42.3648 26.1049C42.3059 26.5759 42.247 27.0764 42.1881 27.5474C42.1587 27.9301 42.1293 28.3128 42.1293 28.6366C42.1293 28.9899 42.1293 29.2843 42.1587 29.5787C42.1881 29.873 42.2176 30.138 42.247 30.4029C42.2765 30.6385 42.3353 30.874 42.3942 31.08C42.4825 31.345 42.6003 31.6099 42.7475 31.8454C42.8947 32.0809 43.0419 32.287 43.2479 32.4931C43.4246 32.6992 43.6601 32.8758 43.8956 33.023C44.1311 33.1996 44.396 33.3174 44.6904 33.4646C45.0731 33.6118 45.4264 33.759 45.7502 33.8767C46.074 33.9945 46.3979 34.0828 46.6923 34.1417C46.9866 34.2005 47.2516 34.2594 47.5165 34.2594C47.7815 34.2888 48.017 34.2594 48.2525 34.23C48.6058 34.1711 48.9885 34.0828 49.3712 33.965C49.7833 33.8473 50.1955 33.7001 50.637 33.494C51.0786 33.3174 51.5496 33.0819 52.0501 32.8169C52.5506 32.552 53.0804 32.2576 53.6398 31.9043C54.0814 31.6394 54.4346 31.345 54.7585 31.08C55.0528 30.7856 55.3178 30.5207 55.5239 30.2263C55.7299 29.9319 55.8771 29.6375 55.9654 29.3137C56.0832 29.0193 56.1421 28.6955 56.1715 28.3717C56.2009 28.1362 56.2009 27.9595 56.1715 27.7829C56.1421 27.6063 56.0832 27.4885 56.0243 27.3708C55.9654 27.253 55.8771 27.1353 55.7594 27.0469C55.671 26.9586 55.5533 26.8703 55.4061 26.782C55.3178 26.9586 55.2295 27.1058 55.1412 27.253C55.0528 27.4002 54.9645 27.518 54.9056 27.6357C54.8173 27.7535 54.729 27.8712 54.6407 27.989C54.5524 28.1067 54.4346 28.195 54.3463 28.3128C53.787 28.8427 53.2571 29.2548 52.7566 29.5787C52.2562 29.9025 51.7557 30.1674 51.2847 30.3441C50.8137 30.5207 50.3427 30.6679 49.9011 30.7562C49.4595 30.8445 49.0179 30.9328 48.6058 30.9917C48.5469 30.9917 48.488 31.0212 48.4291 31.0212C48.3703 31.0212 48.3114 31.0506 48.2525 31.0506C48.1936 31.0506 48.1348 31.0506 48.0759 31.08C48.017 31.08 47.9581 31.08 47.9287 31.1095C47.7521 31.1389 47.6049 31.1389 47.4577 31.1389C47.3105 31.1389 47.1927 31.1095 47.075 31.08C46.9572 31.0506 46.8689 30.9917 46.81 30.9328C46.7217 30.874 46.6628 30.7856 46.6334 30.6973C46.6039 30.6385 46.5745 30.5796 46.5451 30.4913C46.5156 30.4029 46.4862 30.2852 46.4862 30.1674C46.4567 30.0202 46.4568 29.8731 46.4568 29.6964C46.4568 29.5198 46.4567 29.2843 46.4862 29.0488L46.5745 28.6072H46.6039H46.6628H46.7217H46.7511C47.1338 28.5483 47.5165 28.46 47.9287 28.3717C48.3114 28.2539 48.7235 28.1362 49.1062 27.989C49.4889 27.8418 49.9011 27.6651 50.2838 27.4591C50.6665 27.253 51.0786 27.0175 51.4613 26.782C51.9912 26.4287 52.4328 26.1049 52.8449 25.7222C53.2276 25.3689 53.5809 24.9862 53.8459 24.6035C54.1108 24.2208 54.3463 23.8087 54.4935 23.3965C54.6407 22.9844 54.729 22.5723 54.7879 22.1307C54.8173 21.7185 54.7879 21.3358 54.6996 20.9826C54.6113 20.6293 54.4346 20.276 54.2286 19.9522C54.0225 19.6284 53.7281 19.334 53.3748 19.0691C53.0216 18.8041 52.6389 18.5392 52.1678 18.3331C51.7557 18.127 51.3436 17.9798 50.9609 17.8326C50.5487 17.7149 50.1366 17.5971 49.7244 17.5383C49.3123 17.4794 48.9002 17.4205 48.488 17.4205C48.1936 17.3616 47.7815 17.3616 47.3693 17.4205Z" />
          <path d="M99.4463 4.90907C99.2403 4.93851 99.0342 4.99739 98.8281 5.08571C98.6221 5.17402 98.416 5.29178 98.2099 5.46841C98.0039 5.64504 97.8272 5.88055 97.68 6.17494C97.5328 6.46932 97.3856 6.82259 97.2973 7.26417V7.2936C97.2679 7.52911 97.2385 7.76462 97.209 8.00013C97.1796 8.23564 97.1501 8.47115 97.1207 8.67722C97.0913 8.91273 97.0618 9.14824 97.0324 9.35431C97.0029 9.58982 96.9735 9.79589 96.9441 10.0314L95.1483 10.473C94.9128 10.5319 94.6478 10.5907 94.3829 10.679C94.118 10.7674 93.8824 10.8557 93.6469 10.9734C93.4114 11.0912 93.2348 11.2384 93.0876 11.415C92.9404 11.5916 92.8521 11.7683 92.8521 12.0038C92.8226 12.2687 92.8815 12.4748 93.0287 12.6514C93.1759 12.8281 93.382 13.0047 93.6764 13.1225C93.9708 13.2402 94.3535 13.3285 94.8245 13.3874C95.2955 13.4463 95.8254 13.4757 96.473 13.4757L96.4436 13.8584C96.4436 13.9762 96.4142 14.5061 96.3553 15.242C96.2964 15.978 96.2375 16.92 96.1787 17.8326C96.1198 18.7452 96.0609 19.6578 96.0315 20.3349C95.9726 21.012 95.9431 21.4536 95.9431 21.483C95.8254 22.3662 95.8548 23.161 96.0315 23.8676C96.2081 24.5741 96.5025 25.1629 96.9146 25.6339C97.3268 26.1049 97.8272 26.4582 98.416 26.6642C99.0048 26.8703 99.6819 26.9292 100.388 26.8409C100.594 26.8114 100.83 26.782 101.095 26.7231C101.36 26.6642 101.625 26.6054 101.949 26.4876C102.243 26.3699 102.567 26.2521 102.92 26.0755C103.273 25.8988 103.627 25.6633 104.009 25.3984C104.745 24.8685 105.187 24.3386 105.422 23.8676C105.658 23.3965 105.687 22.955 105.628 22.5723C105.57 22.1896 105.422 21.8952 105.275 21.6597C105.128 21.4536 105.01 21.3064 105.01 21.3064C105.01 21.3064 104.981 21.3653 104.892 21.483C104.834 21.6008 104.716 21.748 104.569 21.8952C104.421 22.0718 104.245 22.2484 104.068 22.4251C103.862 22.6017 103.627 22.7783 103.362 22.9255C103.214 23.0138 103.038 23.1022 102.92 23.161C102.773 23.2199 102.655 23.2788 102.537 23.3377C102.42 23.3965 102.302 23.426 102.184 23.4554C102.066 23.4849 101.978 23.5143 101.89 23.5143C101.801 23.5143 101.713 23.5437 101.625 23.5437C101.536 23.5437 101.478 23.5437 101.389 23.5143C101.33 23.5143 101.272 23.4849 101.213 23.4554C101.154 23.426 101.124 23.3965 101.065 23.3965C100.977 23.3377 100.889 23.2788 100.83 23.1905C100.742 23.1022 100.683 22.9844 100.624 22.8372C100.565 22.69 100.506 22.5134 100.477 22.2779C100.447 22.0424 100.418 21.7774 100.418 21.4536C100.418 21.4242 100.418 21.3358 100.418 21.2181C100.418 21.1003 100.418 20.9237 100.447 20.6882C100.447 20.4527 100.477 20.1583 100.506 19.7756C100.536 19.3929 100.565 18.9219 100.594 18.3625C100.624 18.0976 100.624 17.7738 100.683 17.4205C100.712 17.0672 100.771 16.6257 100.801 16.1841C100.859 15.7131 100.918 15.2126 100.977 14.6533C101.036 14.0939 101.124 13.4757 101.213 12.8281C101.625 12.6809 101.978 12.5631 102.331 12.4454C102.685 12.3276 103.008 12.2393 103.303 12.1215C103.597 12.0332 103.892 11.9449 104.127 11.886C104.392 11.8272 104.598 11.7388 104.804 11.7094L104.981 11.6505L105.599 10.7674V10.6496C105.599 10.5319 105.599 10.4141 105.57 10.2963C105.54 10.1786 105.511 10.0608 105.452 9.97252C105.393 9.85477 105.334 9.76645 105.246 9.6487C105.157 9.56038 105.069 9.44263 104.951 9.35431C104.834 9.26599 104.716 9.17768 104.598 9.1188C104.48 9.05992 104.363 9.00105 104.245 8.97161C104.127 8.94217 104.009 8.91273 103.892 8.88329C103.774 8.88329 103.656 8.88329 103.538 8.88329C103.332 8.91273 103.156 8.94217 102.979 8.94217C102.802 8.97161 102.655 8.97161 102.479 8.97161C102.331 8.97161 102.184 8.97161 102.066 8.97161C101.949 8.97161 101.801 8.97161 101.713 8.94217C101.713 8.82441 101.713 8.70666 101.743 8.61834C101.743 8.50059 101.743 8.41227 101.772 8.32396C101.772 8.23564 101.772 8.14733 101.772 8.05901C101.772 7.97069 101.772 7.91182 101.772 7.85294C101.772 7.8235 101.772 7.76462 101.772 7.73518C101.772 7.70575 101.772 7.64687 101.772 7.61743C101.772 7.58799 101.772 7.55855 101.772 7.49967C101.772 7.47024 101.772 7.4408 101.772 7.41136C101.801 7.2936 101.831 7.17585 101.86 7.05809C101.89 6.94034 101.919 6.82259 101.978 6.73427C102.037 6.61652 102.066 6.5282 102.125 6.41044C102.184 6.32213 102.243 6.20437 102.302 6.11606L102.39 5.9983V5.88055C102.39 5.76279 102.39 5.64504 102.361 5.52729C102.331 5.40953 102.302 5.26234 102.214 5.14458C102.125 5.02683 102.008 4.90907 101.86 4.8502C101.684 4.76188 101.478 4.703 101.213 4.703H101.183H101.154C100.948 4.73244 100.771 4.73244 100.594 4.73244C100.418 4.73244 100.271 4.76188 100.123 4.76188C99.9762 4.76188 99.8585 4.79132 99.7407 4.79132C99.623 4.79132 99.5347 4.79132 99.4463 4.82076H99.4169H99.3875H99.358L99.4463 4.90907Z" />
          <path d="M87.8181 25.8695C87.6414 25.8989 87.4648 25.8989 87.3176 25.8401C87.1704 25.8106 87.0232 25.7518 86.9055 25.634C86.7877 25.5457 86.67 25.3985 86.5522 25.2513C86.4639 25.1041 86.3461 24.898 86.2873 24.692C86.2284 24.5153 86.1695 24.3387 86.1401 24.1621C86.1106 23.9854 86.0517 23.7794 86.0517 23.5733C86.0223 23.3672 86.0223 23.1317 86.0223 22.9256C86.0223 22.6901 86.0223 22.4546 86.0517 22.2191C86.0812 21.9836 86.1106 21.7187 86.1401 21.4243C86.1989 21.1593 86.2578 20.8649 86.3167 20.5411C86.405 20.2467 86.4933 19.9229 86.5816 19.5991C86.6994 19.2753 86.8171 18.922 86.9349 18.5687C87.0527 18.3038 87.1704 18.0094 87.2882 17.715C87.4354 17.4206 87.5531 17.1557 87.7297 16.9202C87.8769 16.6847 88.0536 16.4491 88.2302 16.3019C88.4068 16.1548 88.6129 16.037 88.7895 16.0076C88.8484 16.0076 88.8779 16.0076 88.9367 15.9781C88.9956 15.9781 89.025 15.9781 89.0545 15.9781C89.0839 15.9781 89.1428 15.9781 89.1722 16.0076C89.2017 16.0076 89.2606 16.037 89.29 16.0664C89.7021 16.3019 89.9965 16.6258 90.232 16.979C90.4675 17.3323 90.6147 17.7444 90.703 18.186C90.7914 18.6276 90.8208 19.0986 90.8208 19.5696C90.8208 20.0407 90.7914 20.5411 90.7325 21.0121C90.7031 21.2182 90.6736 21.4243 90.6147 21.6303C90.5559 21.8659 90.497 22.0719 90.4087 22.3369C90.3203 22.5724 90.232 22.8373 90.1143 23.0728C89.9965 23.3378 89.8788 23.6027 89.7316 23.8677C89.6138 24.0738 89.4666 24.3093 89.3489 24.5448C89.2017 24.7803 89.0545 24.9864 88.8778 25.1924C88.7012 25.3985 88.5246 25.5457 88.348 25.6929C88.1713 25.7518 87.9947 25.8401 87.8181 25.8695ZM87.9358 12.1217C87.612 12.1805 87.3176 12.2394 86.9938 12.3572C86.67 12.4749 86.3756 12.6221 86.0812 12.8282C85.7868 13.0343 85.4924 13.2698 85.198 13.5347C84.9036 13.7997 84.6387 14.1235 84.3443 14.4768C83.7261 15.301 83.2256 16.2136 82.8429 17.1262C82.4602 18.0388 82.1953 18.9809 82.0186 19.864C81.842 20.7472 81.7243 21.542 81.6948 22.1897C81.6359 22.8373 81.6654 23.3672 81.6948 23.6322V23.691V23.7499V23.7794V23.8088C81.7537 24.1032 81.8126 24.3976 81.8715 24.692C81.9598 24.9569 82.0481 25.2219 82.1364 25.4868C82.2542 25.7518 82.3719 25.9873 82.4897 26.2228C82.6369 26.4583 82.7841 26.6644 82.9312 26.8704C83.2256 27.2531 83.5495 27.5475 83.9322 27.8125C84.2854 28.0774 84.6976 28.2835 85.1391 28.4307C85.5807 28.5779 86.0517 28.6662 86.5522 28.6956C87.0527 28.7251 87.612 28.6956 88.2008 28.6367C88.6718 28.5779 89.1428 28.4307 89.5844 28.2835C90.026 28.1068 90.4381 27.9008 90.7914 27.6653C91.1741 27.4298 91.4979 27.1942 91.7923 26.9293C92.0867 26.6644 92.3516 26.4288 92.5282 26.1933C92.9698 25.6929 93.3231 25.0747 93.6469 24.3976C93.9413 23.7205 94.2062 22.9845 94.3829 22.2486C94.5595 21.5126 94.6773 20.7766 94.7361 20.0701C94.795 19.3636 94.795 18.7454 94.7361 18.186C94.7067 17.8328 94.6478 17.4501 94.5889 17.0379C94.5301 16.6258 94.4418 16.2136 94.324 15.8015C94.2062 15.3894 94.0591 14.9772 93.8235 14.5651C93.6175 14.1824 93.3231 13.7997 92.9993 13.4464C92.7049 13.152 92.3811 12.8871 91.9983 12.681C91.6451 12.4749 91.2329 12.3277 90.8208 12.21C90.4087 12.0922 89.9376 12.0333 89.4666 12.0039C88.9662 12.0333 88.4657 12.0333 87.9358 12.1217Z" />
          <path d="M73.5992 27.8419C73.4225 27.8713 73.2459 27.8713 73.0987 27.8124C72.9515 27.783 72.8043 27.7241 72.6866 27.6063C72.5688 27.518 72.4511 27.3708 72.3333 27.2236C72.245 27.0764 72.1567 26.8704 72.0684 26.6643C72.0095 26.4877 71.9506 26.311 71.9212 26.1344C71.8917 25.9578 71.8623 25.7517 71.8328 25.5456C71.8034 25.3396 71.8034 25.1041 71.8034 24.898C71.8034 24.6625 71.8034 24.427 71.8328 24.1915C71.8623 23.9559 71.8917 23.691 71.9212 23.3966C71.98 23.1317 72.0389 22.8373 72.0978 22.5135C72.1861 22.2191 72.2744 21.8952 72.3627 21.5714C72.4805 21.2476 72.5983 20.8943 72.716 20.5411C72.8338 20.2761 72.9515 19.9817 73.0693 19.6873C73.2165 19.393 73.3637 19.128 73.5108 18.8925C73.658 18.657 73.8347 18.4215 74.0113 18.2743C74.1879 18.1271 74.394 18.0093 74.5706 17.9799C74.6295 17.9799 74.659 17.9799 74.7178 17.9505C74.7767 17.9505 74.8061 17.9505 74.8356 17.9505C74.865 17.9505 74.9239 17.9505 74.9533 17.9799C74.9828 17.9799 75.0417 18.0093 75.0711 18.0093C75.4832 18.2449 75.7776 18.5687 76.0131 18.9219C76.2486 19.2752 76.3958 19.6873 76.4841 20.1289C76.5725 20.5705 76.6019 21.0415 76.6019 21.5125C76.6019 21.9836 76.5725 22.484 76.5136 22.955C76.4842 23.1611 76.4547 23.3672 76.3958 23.5732C76.337 23.8088 76.2781 24.0148 76.1898 24.2798C76.1014 24.5153 76.0131 24.7802 75.8954 25.0157C75.7776 25.2807 75.6599 25.5456 75.4832 25.8106C75.3655 26.0167 75.2183 26.2522 75.0711 26.4877C74.9239 26.7232 74.7767 26.9293 74.6001 27.1353C74.4234 27.3414 74.2468 27.4886 74.0702 27.6358C73.9524 27.7241 73.7758 27.8124 73.5992 27.8419ZM73.7758 14.094C73.452 14.1529 73.1576 14.2118 72.8338 14.3295C72.5099 14.4473 72.2155 14.6239 71.9212 14.8005C71.6268 15.0066 71.3324 15.2421 71.038 15.5071C70.7436 15.772 70.4492 16.0958 70.1843 16.4491C69.9782 16.714 69.7721 16.979 69.5955 17.2734C69.3894 17.5678 69.2128 17.8621 69.0656 18.1565C68.889 18.4804 68.7418 18.7747 68.5946 19.128C68.4474 19.4518 68.3002 19.8051 68.1825 20.1584L67.8292 21.1298C67.7703 21.277 67.7409 21.4242 67.682 21.5714C67.6526 21.7186 67.5937 21.8952 67.5642 22.0719C67.5348 22.2485 67.5054 22.4546 67.4759 22.6607C67.4465 22.8667 67.417 23.1022 67.417 23.3083C67.3876 23.8971 67.3582 24.4564 67.417 24.9569C67.4465 25.4868 67.5348 25.9578 67.6231 26.4288C67.7409 26.8998 67.8881 27.312 68.0647 27.7241C68.2413 28.1068 68.4768 28.4895 68.7418 28.8133C69.0362 29.196 69.36 29.4904 69.7133 29.7554C70.0665 30.0203 70.4787 30.2264 70.9202 30.3736C71.3618 30.5208 71.8328 30.6091 72.3333 30.6385C72.8338 30.668 73.3931 30.6385 73.9524 30.5796C74.4234 30.5208 74.8945 30.403 75.3066 30.2853C75.7187 30.1381 76.1309 29.9909 76.4841 29.7848C76.8374 29.5787 77.1907 29.3432 77.4851 29.0783C77.7795 28.8133 78.0738 28.4895 78.3093 28.1657C78.4565 27.9596 78.6037 27.7241 78.7509 27.4591C78.8981 27.1942 79.0453 26.8704 79.1925 26.5466C79.3397 26.1933 79.4869 25.8106 79.6341 25.3984C79.7813 24.9863 79.9285 24.5153 80.1051 24.0148C80.2817 23.3377 80.3995 22.8078 80.4878 22.3074C80.5761 21.8069 80.6056 21.3948 80.635 21.0121C80.635 20.6294 80.635 20.2467 80.5761 19.8934C80.5467 19.5107 80.4878 19.128 80.4289 18.6864C80.3701 18.4215 80.3112 18.1271 80.2229 17.8621C80.1345 17.5678 80.0462 17.3028 79.9285 17.0379C79.8107 16.7729 79.6635 16.508 79.4869 16.243C79.3103 15.9781 79.1042 15.7426 78.8687 15.5071C78.5743 15.2127 78.2505 14.9477 77.8678 14.7417C77.5145 14.5356 77.1024 14.3884 76.6902 14.2706C76.2781 14.1529 75.8071 14.094 75.336 14.0646C74.8061 14.0057 74.3057 14.0351 73.7758 14.094Z" />
          <path d="M65.1503 2.02418C64.4438 2.11249 63.7961 2.43632 63.2368 2.90734C62.6774 3.40779 62.177 4.08488 61.7354 4.96804C61.3233 5.8512 60.97 6.91099 60.7051 8.17685C60.4401 9.44272 60.2635 10.8852 60.1752 12.5043C60.1457 13.152 60.1163 13.7408 60.0574 14.3001C60.028 14.8594 59.9691 15.3599 59.9397 15.8015C59.9102 16.243 59.8513 16.6552 59.8219 17.0085C59.7925 17.3617 59.7336 17.6561 59.7041 17.921C59.7041 17.9799 59.6453 18.0388 59.5275 18.0977C59.4392 18.1566 59.292 18.2154 59.1448 18.2449C58.9976 18.3038 58.821 18.3332 58.6738 18.3626C58.5266 18.3921 58.35 18.4215 58.2028 18.4509C57.7612 18.5098 57.3491 18.5981 56.9958 18.7159C56.6425 18.8336 56.3481 18.9514 56.1126 19.0986C55.8771 19.2458 55.7005 19.4224 55.5533 19.5991C55.4355 19.7757 55.3472 20.0112 55.3472 20.2467C55.3472 20.3939 55.3472 20.5117 55.3472 20.6294C55.3767 20.7472 55.4061 20.8649 55.4944 20.9532C55.5533 21.071 55.671 21.1593 55.8182 21.2476C55.9654 21.3359 56.1715 21.4242 56.407 21.5126C56.5248 21.542 56.7603 21.6009 57.0547 21.6303C57.3491 21.6598 57.7023 21.6892 58.0261 21.6892C58.35 21.7186 58.6738 21.7186 58.9093 21.7186C59.1448 21.7186 59.292 21.7186 59.292 21.7186C59.1742 23.1022 59.0271 24.3976 58.8799 25.6045C58.7032 26.8115 58.5266 27.9008 58.2911 28.9017C58.0556 29.9026 57.7906 30.8152 57.4374 31.61C57.1135 32.4049 56.7014 33.1114 56.2598 33.7002C55.9654 34.0829 55.6416 34.4361 55.2883 34.76C54.9351 35.0543 54.5524 35.3193 54.1402 35.5548C53.7281 35.7903 53.2865 35.9669 52.7861 36.1141C52.2856 36.2613 51.7557 36.3791 51.1375 36.4674C50.9314 36.4968 50.6959 36.5263 50.4898 36.5557C50.2543 36.5852 50.0188 36.5852 49.7833 36.6146C49.5478 36.6146 49.2829 36.644 49.0474 36.644C48.7824 36.644 48.5175 36.644 48.2525 36.644C48.1348 36.644 48.017 36.644 47.8992 36.644C47.7815 36.644 47.6637 36.644 47.5754 36.644C47.4871 36.644 47.3693 36.644 47.281 36.6735C47.1927 36.6735 47.1044 36.7029 47.0161 36.7029C46.1624 36.8207 45.8974 37.0856 45.9857 37.4094C46.074 37.7333 46.5156 38.116 47.1338 38.4987C47.7226 38.8814 48.488 39.2346 49.1651 39.4996C49.8422 39.7645 50.4604 39.9412 50.8137 39.9706C51.1375 39.9706 51.4319 40 51.7263 40C52.0207 40 52.315 40 52.58 40C52.8449 40 53.1393 39.9706 53.4043 39.9706C53.6692 39.9412 53.9342 39.9117 54.1697 39.8823C54.7879 39.794 55.3472 39.6762 55.8771 39.4996C56.407 39.3229 56.9075 39.0874 57.4079 38.793C57.8789 38.4987 58.35 38.1454 58.7915 37.7333C59.2331 37.3211 59.6747 36.8207 60.0868 36.2613C60.6462 35.4959 61.1466 34.6128 61.5882 33.5824C62.0298 32.5521 62.3831 31.404 62.7069 30.1381C63.0307 28.8428 63.2957 27.4297 63.5312 25.8989C63.7667 24.3681 63.9727 22.6901 64.1494 20.8649C64.2377 20.8355 64.326 20.806 64.3849 20.806C64.4438 20.7766 64.5026 20.7766 64.5615 20.7472C64.6204 20.7177 64.7087 20.7177 64.797 20.6883C64.9148 20.6588 65.0325 20.6294 65.2092 20.6C65.4447 20.5411 65.6507 20.5117 65.8568 20.4528C66.0629 20.3939 66.2395 20.335 66.4162 20.2467C66.5928 20.1878 66.7694 20.0995 66.9166 20.0406C67.0638 19.9818 67.211 19.9229 67.3582 19.864C67.5348 19.8051 67.682 19.6874 67.7703 19.5696C67.8881 19.4519 67.947 19.3047 68.0058 19.1869C68.0647 19.0692 68.0942 18.922 68.0942 18.8336C68.1236 18.7453 68.1236 18.6865 68.1236 18.6865C68.1236 18.5098 68.1236 18.3332 68.0942 18.1566C68.0647 18.0094 67.9764 17.8327 67.8586 17.715C67.7409 17.5972 67.5643 17.4795 67.3288 17.3912C67.0932 17.3028 66.7989 17.244 66.4162 17.2145C66.4162 17.2145 66.3278 17.2145 66.1806 17.2145C66.0335 17.2145 65.8568 17.2145 65.6508 17.2145C65.4447 17.2145 65.2092 17.2145 64.9737 17.244C64.7382 17.244 64.5321 17.2734 64.3555 17.2734C64.3849 16.7435 64.4438 16.2136 64.5026 15.6543C64.5615 15.1244 64.6204 14.565 64.7087 14.0057C64.7676 13.4758 64.8559 12.9165 64.9148 12.3866C64.9737 11.8567 65.0325 11.3562 65.062 10.8558C65.1209 10.0904 65.2092 9.38384 65.2975 8.73619C65.3858 8.08854 65.533 7.5292 65.6802 7.05819C65.8274 6.58717 66.0335 6.17503 66.269 5.91008C66.5045 5.61569 66.7989 5.4685 67.1227 5.40962H67.1521H67.1816H67.211H67.2404C67.4171 5.43906 67.5348 5.49794 67.682 5.61569C67.7998 5.73345 67.9175 5.91008 68.0353 6.08671C68.153 6.26334 68.2414 6.46941 68.3591 6.67548C68.4769 6.88155 68.5652 7.08762 68.7124 7.29369C68.7712 7.35257 68.8596 7.44089 69.0068 7.55864C69.1539 7.64696 69.3011 7.73527 69.5072 7.82359C69.6838 7.91191 69.8899 7.97078 70.0665 8.02966C70.2432 8.08854 70.3904 8.08854 70.5376 8.08854C70.6848 8.0591 70.7436 7.82359 70.7436 7.44089C70.7436 7.05819 70.6848 6.55773 70.5964 6.05727C70.4787 5.52738 70.3315 4.96804 70.1254 4.46758C69.9194 3.96713 69.6544 3.55499 69.36 3.29004C69.0656 3.02509 68.7712 2.81902 68.5063 2.64239C68.2119 2.46576 67.947 2.348 67.6231 2.23025C67.3288 2.14193 67.0049 2.05362 66.6811 2.02418C66.3573 1.99474 66.004 1.9653 65.6213 1.99474C65.5919 1.99474 65.533 1.99474 65.5036 1.99474C65.4741 1.99474 65.4152 1.99474 65.3858 1.99474C65.3564 1.99474 65.2975 1.99474 65.268 1.99474C65.2092 2.02418 65.1797 2.02418 65.1503 2.02418Z" />
          <path d="M22.6115 10.0315C23.3769 11.3562 25.467 11.5623 27.2922 10.5025C29.1174 9.44269 29.9712 7.52918 29.2057 6.20444C28.4403 4.8797 26.3502 4.67363 24.525 5.73342C22.7292 6.79322 21.8461 8.70673 22.6115 10.0315Z" />
          <path d="M19.697 3.5255C18.6078 4.6736 18.3723 6.23385 19.1671 7.02869C19.9914 7.7941 21.5222 7.49971 22.6115 6.32217C23.7007 5.17406 23.9362 3.61381 23.1414 2.81897C22.3465 2.083 20.8157 2.37739 19.697 3.5255Z"/>
          <path d="M15.3107 2.31861C14.5158 3.40784 14.4864 4.76202 15.2518 5.32135C16.0172 5.88069 17.2831 5.43911 18.0779 4.34988C18.8728 3.26065 18.9022 1.90647 18.1368 1.34714C17.3714 0.787802 16.1055 1.22938 15.3107 2.31861Z"/>
          <path d="M13.884 3.52151C14.499 2.41251 14.3868 1.17468 13.6332 0.756755C12.8797 0.338829 11.7702 0.899064 11.1551 2.00807C10.54 3.11708 10.6523 4.35491 11.4059 4.77283C12.1594 5.19076 13.2689 4.63052 13.884 3.52151Z"/>
          <path d="M9.6879 3.76104C9.36408 4.67364 8.59867 5.26242 7.98046 5.05634C7.33281 4.85027 7.06786 3.90824 7.39169 2.99564C7.71551 2.08304 8.48092 1.49427 9.09913 1.70034C9.71734 1.90641 9.98229 2.84845 9.6879 3.76104Z"/>
          <path d="M15.3695 19.9818C19.1082 18.0094 24.2895 16.4786 22.1404 11.7684C20.5213 8.26522 15.3695 6.17508 11.5425 6.17508C8.03932 6.1162 5.12489 7.79421 3.41745 11.4152C1.82776 14.7712 0.885725 18.922 0.238075 22.7785C-0.350698 26.4877 0.179198 31.6689 1.53338 35.0544C2.74036 38.0277 6.00805 40.7361 9.54069 39.323C10.8654 38.7048 11.9547 37.645 12.1313 37.4095C15.3695 33.4058 12.6317 29.0195 11.3364 25.163C10.5122 22.6018 13.1911 21.1299 15.3695 19.9818ZM7.80381 19.9524C6.33188 22.4841 6.24356 25.5751 7.68605 28.2835C9.48181 30.9919 10.1 32.2577 9.74676 33.7591C9.51125 34.76 8.21595 35.8787 7.39167 35.1721C5.94917 34.0829 5.30152 31.7278 4.94826 30.1087C3.82959 24.6037 5.21321 20.6589 5.77254 17.8917C6.36131 15.0361 7.09728 12.2983 9.68788 11.003C12.3668 9.64884 16.3116 10.4142 17.4597 11.9156C18.6372 13.7997 17.4008 14.8595 15.0163 15.4188C12.3374 16.0665 8.95192 17.9505 7.80381 19.9524Z"/>
        </svg>
      </Link>
    <svg className={`hamburger ${isActive ? "cross" : ''}`} onClick={() => setIsActive(!isActive)} viewBox="0 0 800 600">
        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
        <path d="M300,320 L540,320" id="middle"></path>
        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
      </svg>
      <nav className="desktop-links">
        <Link to="/about">Join</Link>
        <a href="https://barefootcoders.applytojob.com/apply/">About</a>
        <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Route</a>
      </nav>
    </div>
    <nav className={`mobile-nav ${isActive ? "isActive" : ''} ${y > 0 ? "header-shadow" : ''}`}>
      <Link to="/about" onClick={() => setIsActive(false)}>Join</Link>
      <a href="https://barefootcoders.applytojob.com/apply/">About</a>
      <a href="mailto:someone@yoursite.com?subject=Mail from Our Site" onClick={() => setIsActive(false)}>Route</a>
    </nav>
    </React.Fragment>
  );
}