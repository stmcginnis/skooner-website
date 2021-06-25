$page-footer-desktop-height: 10rem;
<template>
<div class="footer-cncf">
<br><br>
   <h4>Skooner is a CNCF Sandbox project</h4>
      <img :src="$withBase('/images/cncf.png')" alt="Cloud Native Computing Foundation Logo">
      <br><br>
      <p>Skooner was originally created by <a href="https://opensource.indeedeng.io/" target=”_blank” aria-label="Link opens in new tab">Indeed</a> and made successful by its community</a>.</p>
      <br>
      <hr>
      <p>
        <span class="copyright">
       &nbsp;&nbsp; © Copyright The Skooner Authors <br>
        <b>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/cncf/foundation/blob/master/code-of-conduct.md" target=”_blank” aria-label="Link opens in new tab">Code of Conduct</a></b>
        </span>
        <span class="footer-links">
          <a href="https://twitter.com/IndeedEng" target=”_blank”>
            <img 
              :src="$withBase('/images/twitter.png')" 
              alt="twitter icon" 
              width="20px" 
            />
          </a> 
          <a href="https://github.com/skooner-k8s/skooner" target=”_blank”>
            <img 
            :src="$withBase('/images/github.png')" 
            alt="github icon" 
            width="20px" 
          />
          </a>
          &nbsp;&nbsp;
          <br>
        </span>
        <br><br>
      </p>
      </div>
</div>
</template>

<style lang="stylus">

@media (min-width: $MQMobile + 1) 

  // this spaces the footer far enough down as to
  // not overlap the sidebar at any point on
  // larger screens.
  .footer-cncf {
    height: $page-footer-desktop-height;

    // // this puts the footer above the bottom part
    // // of the fixed sidebar on larger screens
    position: relative;
    z-index: 10;
  }

  </style>

