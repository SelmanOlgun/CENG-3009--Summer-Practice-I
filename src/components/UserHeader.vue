  <template>
  <header class="userHeader">
    <div class="header-box">
      <div class="left-box">
          <img class="mini-logo" src="../assets/pragmatic-logo.svg" alt="" />
        <div class="search-container">
          <input type="text" placeholder="Search..." class="search-box" />
        </div>
      </div>
      <div class="right-box">
        <div class="profile-container">
          <div class="icons">
            <i class="mdi mdi-bell notification-icon"></i>
            <i class="mdi mdi-fullscreen fullscreen-icon"></i>
            <div class="flag-container">
              <svg
                data-v-58f816f7=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                class="iconify iconify--circle-flags"
              >
                <mask id="iconifyVue0">
                  <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                </mask>
                <g mask="url(#iconifyVue0)">
                  <path
                    fill="#eee"
                    d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
                  ></path>
                  <path
                    fill="#d80027"
                    d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
                  ></path>
                  <path fill="#0052b4" d="M0 0h256v256H0Z"></path>
                  <path
                    fill="#eee"
                    d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="profile">
            <span class="profile-name">Aurora Shenton</span>
            <img
              src="../assets/UserHeader/profile-pic.jpg"
              alt="Profile Photo"
              class="profile-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>



  <style scoped>
.userHeader {
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 50px;
  padding-right: 20px;
  display: flex;
}
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
}
.left-box {
  flex: 1;
}
.right-box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-container {
  display: flex;
  height: 26px;
  width: 300px;
  flex-shrink: 10;
}

.search-box {
  padding: 5px;
  width: 100%;
}

.profile-container {
  display: flex;
  align-items: center;
  padding-right: 20px;
  flex-shrink: 0;
}

.icons {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.notification-icon,
.fullscreen-icon {
  margin-right: 10px;
  font-size: 24px;
}

.flag-container {
  display: flex;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
}

.profile-name {
  margin-right: 10px;
}

.profile-photo {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .search-container {
    display: none;
  }

  .mini-logo {
    display: block !important;
  }
  .userHeader{
    padding-left: 10px;
  }
}

.mini-logo {
  width: 32px;
  height: 32px;
  display: none;
}
</style>