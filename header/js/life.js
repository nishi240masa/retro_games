// ライフの表示数をlocalStorageと連動させる

//ライフの描画
function drawLife() {
  console.log("drawLife");
  //ライフを取得
  const life = getLife();

  //ライフの表示
  // life IDを取得
  const lifeElement = document.getElementById("life");

  const filledHeart = `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="35">
  <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.66 9 1.32 9 2 C9.99 2 10.98 2 12 2 C12 2.99 12 3.98 12 5 C12.99 5 13.98 5 15 5 C15 4.01 15 3.02 15 2 C15.99 2 16.98 2 18 2 C18 1.34 18 0.68 18 0 C20.97 0 23.94 0 27 0 C27 0.66 27 1.32 27 2 C27.66 2 28.32 2 29 2 C29 2.99 29 3.98 29 5 C29.66 5 30.32 5 31 5 C31 9.29 31 13.58 31 18 C30.34 18 29.68 18 29 18 C29 18.99 29 19.98 29 21 C28.34 21 27.68 21 27 21 C27 21.99 27 22.98 27 24 C26.01 24 25.02 24 24 24 C24 24.99 24 25.98 24 27 C23.34 27 22.68 27 22 27 C22 27.99 22 28.98 22 30 C21.01 30 20.02 30 19 30 C19 30.99 19 31.98 19 33 C18.34 33 17.68 33 17 33 C17 33.66 17 34.32 17 35 C14.69 35 12.38 35 10 35 C10 34.34 10 33.68 10 33 C9.34 33 8.68 33 8 33 C8 32.01 8 31.02 8 30 C7.01 30 6.02 30 5 30 C5 29.01 5 28.02 5 27 C4.34 27 3.68 27 3 27 C3 26.01 3 25.02 3 24 C2.01 24 1.02 24 0 24 C0 23.01 0 22.02 0 21 C-0.66 21 -1.32 21 -2 21 C-2 20.01 -2 19.02 -2 18 C-2.66 18 -3.32 18 -4 18 C-4 13.71 -4 9.42 -4 5 C-3.34 5 -2.68 5 -2 5 C-2 4.01 -2 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#E41B22" transform="translate(4,0)"/>
  <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.66 9 1.32 9 2 C9.99 2 10.98 2 12 2 C12 2.99 12 3.98 12 5 C12.99 5 13.98 5 15 5 C15 4.01 15 3.02 15 2 C15.99 2 16.98 2 18 2 C18 1.34 18 0.68 18 0 C20.97 0 23.94 0 27 0 C27 0.66 27 1.32 27 2 C27.66 2 28.32 2 29 2 C29 2.99 29 3.98 29 5 C29.66 5 30.32 5 31 5 C31 9.29 31 13.58 31 18 C30.34 18 29.68 18 29 18 C29 18.99 29 19.98 29 21 C28.34 21 27.68 21 27 21 C27 21.99 27 22.98 27 24 C26.01 24 25.02 24 24 24 C24 24.99 24 25.98 24 27 C23.34 27 22.68 27 22 27 C22 27.99 22 28.98 22 30 C21.01 30 20.02 30 19 30 C19 30.99 19 31.98 19 33 C18.34 33 17.68 33 17 33 C17 33.66 17 34.32 17 35 C14.69 35 12.38 35 10 35 C10 34.34 10 33.68 10 33 C9.34 33 8.68 33 8 33 C8 32.01 8 31.02 8 30 C7.01 30 6.02 30 5 30 C5 29.01 5 28.02 5 27 C4.34 27 3.68 27 3 27 C3 26.01 3 25.02 3 24 C2.01 24 1.02 24 0 24 C0 23.01 0 22.02 0 21 C-0.66 21 -1.32 21 -2 21 C-2 20.01 -2 19.02 -2 18 C-2.66 18 -3.32 18 -4 18 C-4 13.71 -4 9.42 -4 5 C-3.34 5 -2.68 5 -2 5 C-2 4.01 -2 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z M1 3 C1 3.99 1 4.98 1 6 C0.34 6 -0.32 6 -1 6 C-1 9.63 -1 13.26 -1 17 C-0.34 17 0.32 17 1 17 C1 17.99 1 18.98 1 20 C1.99 20 2.98 20 4 20 C4 20.99 4 21.98 4 23 C4.66 23 5.32 23 6 23 C6 23.99 6 24.98 6 26 C6.99 26 7.98 26 9 26 C9 26.99 9 27.98 9 29 C9.66 29 10.32 29 11 29 C11 29.99 11 30.98 11 32 C12.65 32 14.3 32 16 32 C16 31.01 16 30.02 16 29 C16.66 29 17.32 29 18 29 C18 28.01 18 27.02 18 26 C18.99 26 19.98 26 21 26 C21 25.01 21 24.02 21 23 C21.66 23 22.32 23 23 23 C23 22.01 23 21.02 23 20 C23.99 20 24.98 20 26 20 C26 19.01 26 18.02 26 17 C26.66 17 27.32 17 28 17 C28 13.37 28 9.74 28 6 C27.34 6 26.68 6 26 6 C26 5.01 26 4.02 26 3 C23.69 3 21.38 3 19 3 C19 3.99 19 4.98 19 6 C18.01 6 17.02 6 16 6 C16 6.99 16 7.98 16 9 C14.35 9 12.7 9 11 9 C11 8.01 11 7.02 11 6 C10.01 6 9.02 6 8 6 C8 5.01 8 4.02 8 3 C5.69 3 3.38 3 1 3 Z " fill="#1B0304" transform="translate(4,0)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C4.65 2 6.3 2 8 2 C8 1.34 8 0.68 8 0 C8.99 0 9.98 0 11 0 C11 0.99 11 1.98 11 3 C10.34 3 9.68 3 9 3 C9 3.66 9 4.32 9 5 C6.69 5 4.38 5 2 5 C2 4.34 2 3.68 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#060000" transform="translate(12,30)"/>
  <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.34 1 1.68 1 1 1 C1 2.98 1 4.96 1 7 C0.34 7 -0.32 7 -1 7 C-1 7.99 -1 8.98 -1 10 C-2.98 10 -4.96 10 -7 10 C-6.34 9.67 -5.68 9.34 -5 9 C-5 8.01 -5 7.02 -5 6 C-4.01 6 -3.02 6 -2 6 C-2 5.01 -2 4.02 -2 3 C-1.34 3 -0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#2B0506" transform="translate(27,20)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C3.66 3 4.32 3 5 3 C5 3.99 5 4.98 5 6 C5.99 6 6.98 6 8 6 C8 6.99 8 7.98 8 9 C8.66 9.33 9.32 9.66 10 10 C8.02 10 6.04 10 4 10 C4 9.01 4 8.02 4 7 C3.34 7 2.68 7 2 7 C2 5.02 2 3.04 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#2B0506" transform="translate(5,20)"/>
  <path d="M0 0 C3.63 0 7.26 0 11 0 C11 1.98 11 3.96 11 6 C12.32 6.33 13.64 6.66 15 7 C13.35 7 11.7 7 10 7 C10 6.01 10 5.02 10 4 C9.01 4 8.02 4 7 4 C7 3.01 7 2.02 7 1 C4.69 1 2.38 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#230405" transform="translate(5,2)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.32 3 2.64 3 4 C2.34 4 1.68 4 1 4 C1 4.66 1 5.32 1 6 C-0.32 6 -1.64 6 -3 6 C-3 5.01 -3 4.02 -3 3 C-2.01 3 -1.02 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#050000" transform="translate(19,2)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C2.34 3 1.68 3 1 3 C1 3.99 1 4.98 1 6 C0.01 6 -0.98 6 -2 6 C-2 5.01 -2 4.02 -2 3 C-1.34 3 -0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#020000" transform="translate(30,18)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C3.66 3 4.32 3 5 3 C5 3.99 5 4.98 5 6 C4.01 6 3.02 6 2 6 C2 5.01 2 4.02 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#020000" transform="translate(2,18)"/>
  </svg>
  
  `;
  const outlineHeart = `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="35">
  <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.66 9 1.32 9 2 C9.99 2 10.98 2 12 2 C12 2.99 12 3.98 12 5 C12.99 5 13.98 5 15 5 C15 4.01 15 3.02 15 2 C15.99 2 16.98 2 18 2 C18 1.34 18 0.68 18 0 C20.97 0 23.94 0 27 0 C27 0.66 27 1.32 27 2 C27.66 2 28.32 2 29 2 C29 2.99 29 3.98 29 5 C29.66 5 30.32 5 31 5 C31 9.29 31 13.58 31 18 C30.34 18 29.68 18 29 18 C29 18.99 29 19.98 29 21 C28.34 21 27.68 21 27 21 C27 21.99 27 22.98 27 24 C26.01 24 25.02 24 24 24 C24 24.99 24 25.98 24 27 C23.34 27 22.68 27 22 27 C22 27.99 22 28.98 22 30 C21.01 30 20.02 30 19 30 C19 30.99 19 31.98 19 33 C18.34 33 17.68 33 17 33 C17 33.66 17 34.32 17 35 C14.69 35 12.38 35 10 35 C10 34.34 10 33.68 10 33 C9.34 33 8.68 33 8 33 C8 32.01 8 31.02 8 30 C7.01 30 6.02 30 5 30 C5 29.01 5 28.02 5 27 C4.34 27 3.68 27 3 27 C3 26.01 3 25.02 3 24 C2.01 24 1.02 24 0 24 C0 23.01 0 22.02 0 21 C-0.66 21 -1.32 21 -2 21 C-2 20.01 -2 19.02 -2 18 C-2.66 18 -3.32 18 -4 18 C-4 13.71 -4 9.42 -4 5 C-3.34 5 -2.68 5 -2 5 C-2 4.01 -2 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FDFDFD" transform="translate(4,0)"/>
  <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.66 9 1.32 9 2 C9.99 2 10.98 2 12 2 C12 2.99 12 3.98 12 5 C12.99 5 13.98 5 15 5 C15 4.01 15 3.02 15 2 C15.99 2 16.98 2 18 2 C18 1.34 18 0.68 18 0 C20.97 0 23.94 0 27 0 C27 0.66 27 1.32 27 2 C27.66 2 28.32 2 29 2 C29 2.99 29 3.98 29 5 C29.66 5 30.32 5 31 5 C31 9.29 31 13.58 31 18 C30.34 18 29.68 18 29 18 C29 18.99 29 19.98 29 21 C28.34 21 27.68 21 27 21 C27 21.99 27 22.98 27 24 C26.01 24 25.02 24 24 24 C24 24.99 24 25.98 24 27 C23.34 27 22.68 27 22 27 C22 27.99 22 28.98 22 30 C21.01 30 20.02 30 19 30 C19 30.99 19 31.98 19 33 C18.34 33 17.68 33 17 33 C17 33.66 17 34.32 17 35 C14.69 35 12.38 35 10 35 C10 34.34 10 33.68 10 33 C9.34 33 8.68 33 8 33 C8 32.01 8 31.02 8 30 C7.01 30 6.02 30 5 30 C5 29.01 5 28.02 5 27 C4.34 27 3.68 27 3 27 C3 26.01 3 25.02 3 24 C2.01 24 1.02 24 0 24 C0 23.01 0 22.02 0 21 C-0.66 21 -1.32 21 -2 21 C-2 20.01 -2 19.02 -2 18 C-2.66 18 -3.32 18 -4 18 C-4 13.71 -4 9.42 -4 5 C-3.34 5 -2.68 5 -2 5 C-2 4.01 -2 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z M1 3 C1 3.99 1 4.98 1 6 C0.34 6 -0.32 6 -1 6 C-1 9.63 -1 13.26 -1 17 C-0.34 17 0.32 17 1 17 C1 17.99 1 18.98 1 20 C1.99 20 2.98 20 4 20 C4 20.99 4 21.98 4 23 C4.66 23 5.32 23 6 23 C6 23.99 6 24.98 6 26 C6.99 26 7.98 26 9 26 C9 26.99 9 27.98 9 29 C9.66 29 10.32 29 11 29 C11 29.99 11 30.98 11 32 C12.65 32 14.3 32 16 32 C16 31.01 16 30.02 16 29 C16.66 29 17.32 29 18 29 C18 28.01 18 27.02 18 26 C18.99 26 19.98 26 21 26 C21 25.01 21 24.02 21 23 C21.66 23 22.32 23 23 23 C23 22.01 23 21.02 23 20 C23.99 20 24.98 20 26 20 C26 19.01 26 18.02 26 17 C26.66 17 27.32 17 28 17 C28 13.37 28 9.74 28 6 C27.34 6 26.68 6 26 6 C26 5.01 26 4.02 26 3 C23.69 3 21.38 3 19 3 C19 3.99 19 4.98 19 6 C18.01 6 17.02 6 16 6 C16 6.99 16 7.98 16 9 C14.35 9 12.7 9 11 9 C11 8.01 11 7.02 11 6 C10.01 6 9.02 6 8 6 C8 5.01 8 4.02 8 3 C5.69 3 3.38 3 1 3 Z " fill="#202020" transform="translate(4,0)"/>
  <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.66 9 1.32 9 2 C6.36 2 3.72 2 1 2 C1 3.32 1 4.64 1 6 C0.34 6 -0.32 6 -1 6 C-1 9.63 -1 13.26 -1 17 C-0.34 17 0.32 17 1 17 C1 17.99 1 18.98 1 20 C1.99 20 2.98 20 4 20 C4 20.99 4 21.98 4 23 C4.66 23 5.32 23 6 23 C6 23.99 6 24.98 6 26 C6.99 26 7.98 26 9 26 C9 26.99 9 27.98 9 29 C9.66 29 10.32 29 11 29 C11 29.99 11 30.98 11 32 C12.65 32 14.3 32 16 32 C16 31.34 16 30.68 16 30 C16.99 30 17.98 30 19 30 C19 30.99 19 31.98 19 33 C18.34 33 17.68 33 17 33 C17 33.66 17 34.32 17 35 C14.69 35 12.38 35 10 35 C10 34.34 10 33.68 10 33 C9.34 33 8.68 33 8 33 C8 32.01 8 31.02 8 30 C7.01 30 6.02 30 5 30 C5 29.01 5 28.02 5 27 C4.34 27 3.68 27 3 27 C3 26.01 3 25.02 3 24 C2.01 24 1.02 24 0 24 C0 23.01 0 22.02 0 21 C-0.66 21 -1.32 21 -2 21 C-2 20.01 -2 19.02 -2 18 C-2.66 18 -3.32 18 -4 18 C-4 13.71 -4 9.42 -4 5 C-3.34 5 -2.68 5 -2 5 C-2 4.01 -2 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#1B1B1B" transform="translate(4,0)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C4.65 2 6.3 2 8 2 C8 1.34 8 0.68 8 0 C8.99 0 9.98 0 11 0 C11 0.99 11 1.98 11 3 C10.34 3 9.68 3 9 3 C9 3.66 9 4.32 9 5 C6.69 5 4.38 5 2 5 C2 4.34 2 3.68 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#070707" transform="translate(12,30)"/>
  <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.34 1 1.68 1 1 1 C1 2.98 1 4.96 1 7 C0.34 7 -0.32 7 -1 7 C-1 7.99 -1 8.98 -1 10 C-2.98 10 -4.96 10 -7 10 C-6.34 9.67 -5.68 9.34 -5 9 C-5 8.01 -5 7.02 -5 6 C-4.01 6 -3.02 6 -2 6 C-2 5.01 -2 4.02 -2 3 C-1.34 3 -0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#303030" transform="translate(27,20)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C3.66 3 4.32 3 5 3 C5 3.99 5 4.98 5 6 C5.99 6 6.98 6 8 6 C8 6.99 8 7.98 8 9 C8.66 9.33 9.32 9.66 10 10 C8.02 10 6.04 10 4 10 C4 9.01 4 8.02 4 7 C3.34 7 2.68 7 2 7 C2 5.02 2 3.04 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#303030" transform="translate(5,20)"/>
  <path d="M0 0 C3.63 0 7.26 0 11 0 C11 1.98 11 3.96 11 6 C12.32 6.33 13.64 6.66 15 7 C13.35 7 11.7 7 10 7 C10 6.01 10 5.02 10 4 C9.01 4 8.02 4 7 4 C7 3.01 7 2.02 7 1 C4.69 1 2.38 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#272727" transform="translate(5,2)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.32 3 2.64 3 4 C2.34 4 1.68 4 1 4 C1 4.66 1 5.32 1 6 C-0.32 6 -1.64 6 -3 6 C-3 5.01 -3 4.02 -3 3 C-2.01 3 -1.02 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#060606" transform="translate(19,2)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C2.34 3 1.68 3 1 3 C1 3.99 1 4.98 1 6 C0.01 6 -0.98 6 -2 6 C-2 5.01 -2 4.02 -2 3 C-1.34 3 -0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#020202" transform="translate(30,18)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C3.66 3 4.32 3 5 3 C5 3.99 5 4.98 5 6 C4.01 6 3.02 6 2 6 C2 5.01 2 4.02 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#020202" transform="translate(2,18)"/>
  </svg>
  `;

  lifeElement.innerHTML =
    filledHeart.repeat(life) + outlineHeart.repeat(5 - life);
}

// load時にライフを描画
window.addEventListener("load", () => {
  drawLife();
});

//ライフの加算
function addLife() {
  plusLife();

  drawLife();
}

// ライフの減算
function removeLife() {
  minusLife();

  drawLife();
}

// ライフが0になった時の処理
function lifeZero() {
  console.log("lifeZeroカウント");
  // ライフが0になった時の処理
  if (getLife() == 0) {
    console.log("lifeZero");

    // gameOverを表示する
    document.getElementById("game_over_pop").style.display = "block";
    console.log("game_over");

    // localStorageにスコアを消す
    initScore();
    initBleckBreakerScore();
  }
}
