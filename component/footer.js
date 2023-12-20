(function ($) {
  $.fn.footer = function () {
    // Iterate over each selected element
    return this.each(function () {
      const $footer = $(this);
      const footerHtml = `
                <footer id="footer" class="pb-5">
        <div class="container">
            <div class="row py-0 py-md-5">
                <div class="col-md-7 d-flex flex-row pl-5 footer-links order-1 order-md-0 mt-5 mt-md-0">
                    <div>
                        <a href="https://siglens.github.io/siglens-docs/" target="_blank"
                            class="footer-nav-heading">Documentation</a>
                    </div>
                    <div>
                        <a href="/blog/allblogs.html" class="footer-nav-heading">Blogs</a>
                    </div>
                    <div class="d-flex flex-column">
                        <a href="#" class="footer-nav-heading">Community</a>
                        <a class="mt-3 pl-2" href="https://github.com/siglens/siglens">GitHub</a>
                        <a class="mt-3 pl-2" href="/slack.html">Slack</a>
                        <a class="mt-3 pl-2" href="/guides.html">Guides</a>
                        <a class="mt-3 pl-2" href="/questions.html">Questions</a>
                    </div>
                </div>
                <div class="col-md-5 text-md-start footer-links order-0 order-md-1 mx-4 mx-md-0">
                    <h5 class="text-start font-weight-bold text-white">Subscribe for updates</h5>
                    <form class="d-flex gap-4 align-items-end flex-row " id="newsletter-form">
                        <div class="flex-fill w-100 mt-4">
                            <input class="form-control" type="email" id="ns-email" placeholder="Your Email">
                        </div>
                        <div class="flex-grow w-auto">
                            <button class="btn btn-primary ml-2" id="ns-form-btn">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-4 col-sm-12 mt-5 pl-5 order-2 order-md-2">
                    <div class="d-flex">
                        <a class="mr-4" href="https://twitter.com/sigscalr" target="_blank">
                            <div class="icon-container"><i class="fa-brands fa-x-twitter"></i></div>
                        </a>
                        <a class="" href="https://www.linkedin.com/company/sigscalr-io/" target="_blank">
                            <div class="icon-container"><i class="fa-brands fa-linkedin-in"></i></div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center credits flex-column align-items-center mt-5 mt-md-0">
                <img src="./assets/ss-logo.svg" alt="" style="height: 50px;">
                <div class="font-weight-bold text-white h1 mb-4 mt-2">SigLens</div>
                <div class="text-center">Made with ❤️ in New Hampshire, California, Montana and India.</div>
                <div>Copyright © 2024 - <strong class="text-white pointer-event"><a
                            href="https://www.sigscalr.io/">SigScalr Inc.</a></strong></div>
            </div>
        </div>
    </footer>
            `;
      $footer.append(footerHtml);
    });
  };
})(jQuery);
