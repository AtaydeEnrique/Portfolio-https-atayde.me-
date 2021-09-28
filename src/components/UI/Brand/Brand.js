const Brand = ({ classes, scrolled, verticalOptn = false }) => {
  let scrWidth = "";
  let scrHeight = "";

  if (verticalOptn) {
    scrWidth = scrolled > 0 ? "141" : "130";
    scrHeight = scrolled > 0 ? "141" : "130";
  } else {
    scrWidth = "141";
    scrHeight = "52";
  }

  return (
    <div className="scale">
      <svg
        className={classes}
        width={scrWidth}
        height={scrHeight}
        viewBox={`0 0 ${scrWidth} ${scrHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Atayde">
          <path
            id="DE"
            d="M106.955 43.0605C107.879 40.4395 109.2 38.334 110.919 36.7441C111.177 36.4863 111.177 36.1963 110.919 35.874C110.231 35.4014 109.2 34.5742 107.825 33.3926C106.407 32.082 105.859 30.5352 106.182 28.752C106.504 27.6348 107.116 26.5068 108.019 25.3682C107.224 25.8408 106.515 26.2598 105.892 26.625C105.226 27.248 104.388 27.6025 103.378 27.6885C101.294 27.8818 99.4248 27.1406 97.7705 25.4648C96.8037 23.9824 97.126 23.0371 98.7373 22.6289C104.001 19.4707 109.641 16.8604 115.656 14.7979C115.678 14.0674 116.193 13.7666 117.203 13.8955C120.211 14.2822 122.37 15.9688 123.681 18.9551C124.024 21.2969 123.315 22.4248 121.554 22.3389C120.78 22.3604 119.878 21.9736 118.847 21.1787C115.323 23.8643 113.229 26.1523 112.562 28.043C112.176 29.2031 112.724 30.2666 114.206 31.2334C117.708 32.9307 119.771 34.3271 120.394 35.4229C121.124 36.4326 121.253 37.6357 120.78 39.0322C120.351 39.8701 119.223 40.1709 117.396 39.9346C116.021 39.6338 114.689 39.6445 113.4 39.9668C111.553 40.5254 109.404 41.5566 106.955 43.0605ZM119.427 26.4316C120.093 26.7324 120.544 27.2051 120.78 27.8496C120.931 28.4941 120.716 28.8594 120.136 28.9453C119.685 28.9883 119.212 28.7627 118.718 28.2686C118.353 27.9248 117.977 27.5273 117.59 27.0762C117.268 26.3457 117.407 25.9482 118.009 25.8838C118.524 25.9697 118.997 26.1523 119.427 26.4316ZM119.813 24.0469C120.501 24.1973 121.21 24.5518 121.94 25.1104C122.392 25.54 122.553 25.9697 122.424 26.3994C122.316 26.8076 122.005 26.9902 121.489 26.9473C121.081 26.8613 120.694 26.6465 120.329 26.3027C119.964 25.959 119.674 25.7012 119.459 25.5293C119.266 25.3359 119.051 25.0566 118.814 24.6914C118.793 24.2188 119.126 24.0039 119.813 24.0469Z"
            fill="black"
          />
          <path
            id="Y"
            d="M82.2393 42.7705C79.9619 42.8564 78.4795 41.5996 77.792 39V30.46C76.0518 32.6514 74.8057 34.1553 74.0537 34.9717C73.3018 35.7666 72.2598 36.2178 70.9277 36.3252C69.875 36.3252 69.0156 36.0244 68.3496 35.4229C67.6836 34.8213 66.9639 34.2627 66.1904 33.7471C67.0068 32.458 68.0918 31.1367 69.4453 29.7832C70.8203 28.4297 72.3672 26.9043 74.0859 25.207C75.8047 23.4883 77.835 21.6729 80.1768 19.7607C82.54 17.8271 85.1289 16.0977 87.9434 14.5723C88.2441 13.9063 88.7275 13.7236 89.3936 14.0244C89.9521 14.1963 90.6074 14.5937 91.3594 15.2168C92.1113 15.8398 92.5625 16.8496 92.7129 18.2461C92.8633 19.6211 92.6592 20.7598 92.1006 21.6621C91.4346 22.1348 90.6611 22.1562 89.7803 21.7266C87.3525 22.8652 85.3545 24.2725 83.7861 25.9482C84.4307 27.2373 84.667 28.4619 84.4951 29.6221L84.4629 37.4209C84.6562 40.9014 83.915 42.6846 82.2393 42.7705Z"
            fill="black"
          />
          <path
            id="TA"
            d="M37.3838 39.3867C40.7998 38.377 43.5498 36.6152 45.6338 34.1016C46.3643 33.3496 47.3848 32.2324 48.6953 30.75C48.0723 30.5781 47.4707 30.3848 46.8906 30.1699C46.332 29.9551 45.6445 29.8584 44.8281 29.8799C44.0332 30.8896 43.002 31.4697 41.7344 31.6201C40.3594 31.5557 39.457 31.0938 39.0273 30.2344C38.7695 29.418 38.1572 28.6982 37.1904 28.0752C37.9209 27.5596 38.8018 26.5176 39.833 24.9492C40.8857 23.3594 41.9385 21.791 42.9912 20.2441C43.2705 19.7285 43.335 19.0518 43.1846 18.2139C42.7119 16.2803 42.7656 14.9912 43.3457 14.3467C43.9473 13.6807 44.9893 13.6699 46.4717 14.3145C48.2119 15.4531 49.1787 16.8389 49.3721 18.4717C51.6064 17.1396 53.7979 16.1191 55.9463 15.4102C56.1611 14.4863 56.6768 13.9707 57.4932 13.8633C58.8037 13.9277 60.1572 14.8945 61.5537 16.7637C62.9717 18.6113 63.7129 20.7812 63.7773 23.2734C63.8633 24.8848 63.627 26.0342 63.0684 26.7217C62.5312 27.3877 61.7686 27.7744 60.7803 27.8818C58.8467 29.1709 55.3984 32.7588 50.4355 38.6455C47.9434 41.6533 45.752 43.0713 43.8613 42.8994C41.9707 42.749 40.7461 42.3193 40.1875 41.6104C39.6504 40.9229 38.7158 40.1816 37.3838 39.3867ZM58.2666 22.3066C58.2881 21.7051 58.1592 21.2002 57.8799 20.792C54.4209 22.0166 51.1016 23.5312 47.9219 25.3359C47.7285 25.7012 47.5352 25.9912 47.3418 26.2061C49.6406 26.3994 51.0586 26.8076 51.5957 27.4307C53.7871 25.5186 56.0107 23.8105 58.2666 22.3066Z"
            fill="black"
          />
          <path
            id="A"
            d="M9.28418 41.707C8.31738 41.1914 7.30762 40.7617 6.25488 40.418C7.41504 39.7305 8.48926 38.7637 9.47754 37.5176C12.4639 34.0586 14.6875 30.4277 16.1484 26.625C16.1484 25.3359 16.2451 24.4336 16.4385 23.918C15.8799 24.1758 15.2354 24.4658 14.5049 24.7881C13.8604 25.1963 12.8076 25.3574 11.3467 25.2715C9.90723 25.1855 8.47852 24.3477 7.06055 22.7578C6.26562 21.7266 6.05078 20.9746 6.41602 20.502C6.80273 20.0078 7.46875 19.7607 8.41406 19.7607C16.5352 16.8818 22.2715 15.1416 25.623 14.54C26.2246 13.9385 26.9336 13.7666 27.75 14.0244C28.8887 14.5186 29.8232 15.1094 30.5537 15.7969C32.3799 17.5801 33.0566 20.0293 32.584 23.1445C32.1328 25.25 31.123 26.8936 29.5547 28.0752C28.0078 29.2568 26.5898 29.6436 25.3008 29.2354C24.0117 28.8271 22.9268 28.4727 22.0459 28.1719C22.0244 29.6113 21.6699 30.7393 20.9824 31.5557C18.5117 36.7549 16.8359 39.9561 15.9551 41.1592C15.0957 42.3623 14.0752 42.9639 12.8936 42.9639C11.7119 42.9854 10.5088 42.5664 9.28418 41.707ZM21.9492 26.335C23.4531 25.583 25.0322 23.6279 26.6865 20.4697C23.958 21.1572 21.7344 21.9199 20.0156 22.7578C20.7891 23.3379 21.4336 24.5303 21.9492 26.335Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};

export default Brand;
